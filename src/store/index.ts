import axios from 'axios';
import { observable } from 'mobx';

type Login = {
  username: string;
  password: string;
};

type Signup = {
  username: string;
  login: string;
  password: string;
  repeat_pass: string;
};

type Forget = {
  username: string;
  new_pass: string;
  repeat_pass: string;
};

type ChangeStatus = {
  status: number;
};

type ChangeProfile = {
  login: string;
  old_pass: string;
  new_pass: string;
  repeat_pass: string;
};

type SetScore = {
  score: number;
};

type User = {
  username: string;
  score: {
    login: string;
    score: number;
  };
  gameHistory: {
    id: number;
    date: string;
    score: number;
  }[];
  avatar_id: number;
  status_id: number;
};

type Leaderboard = {
  user: {
    login: string;
    score: number;
    place: number;
    avatar_id: number;
    status_id: number;
  };
  leaderBoardList: {
    login: string;
    score: number;
    place: number;
    avatar_id: number;
    status_id: number;
  }[];
};

type StoreType = {
  user: User | null;
  leaderboard: Leaderboard | null;
  error: Record<string, string>;
  status: number;
  load: number;
  editStatus: unknown;
  saveValue: string;
  login: (data: Login) => void;
  signUp: (data: Signup) => void;
  forget: (data: Forget) => void;
  logout: () => void;
  getUser: () => void;
  getLeaderboard: () => void;
  changeStatus: (data: ChangeStatus) => void;
  profileEdit: () => void;
  changeProfile: (data: ChangeProfile) => void;
  isChange: () => void;
  setScore: (data: SetScore) => void;
};

const store: StoreType = observable({
  leaderboard: null,
  editStatus: false,
  user: null,
  error: { msg: '' },
  status: 0,
  load: 0,
  saveValue: '',
  login(data: Login) {
    this.status = 4;
    axios
      .post('/api/login', data)
      .then((response) => {
        console.log(response.data);
        console.log('done');
        this.status = 2;
        this.getUser();
      })
      .catch((error) => {
        this.saveValue = `${data.username}${data.password}`;
        this.error.msg = 'Пароль или логин неверный';
        this.status = 1;
        console.error(error);
      });
  },
  signUp(data: Signup) {
    this.status = 4;
    axios
      .post('/api/register', data)
      .then((response) => {
        console.log(response.data);
        console.log('done');
        this.status = 2;
      })
      .catch((error) => {
        this.saveValue = `${data.username}${data.login}${data.password}${data.repeat_pass}`;
        this.error.msg = error.response.data.error.msg;
        this.status = 1;
        console.error(error);
      });
  },
  forget(data: Forget) {
    this.status = 4;
    axios
      .post('/api/forget', data)
      .then((response) => {
        console.log(response.data);
        console.log('done');
        this.status = 2;
      })
      .catch((error) => {
        this.saveValue = `${data.username}${data.new_pass}${data.repeat_pass}`;
        this.error.msg = error.response.data.error.msg;
        this.status = 1;
        console.error(error);
      });
  },
  logout() {
    axios
      .get('/api/logout', { headers: { 'ngrok-skip-browser-warning': '69420' } })
      .then((response) => {
        console.log(response.data);
        console.log('done');
        this.user = null;
      })
      .catch((error) => {
        this.error.msg = error.message;
        this.status = 1;
        console.error(error);
      });
  },
  getUser() {
    axios
      .get('/api/user', { headers: { 'ngrok-skip-browser-warning': '69420' } })
      .then((response) => {
        console.log(response.data);
        this.load = 2;
        this.user = JSON.parse(JSON.stringify(response.data));
        console.log('done');
      })
      .catch((error) => {
        this.load = 2;
        console.error(error);
      });
  },
  getLeaderboard() {
    axios
      .get('/api/leaderboard', { headers: { 'ngrok-skip-browser-warning': '69420' } })
      .then((response) => {
        console.log(response.data);
        this.leaderboard = JSON.parse(JSON.stringify(response.data));
        console.log('done');
      })
      .catch((error) => {
        this.error.msg = error.message;
        console.error(error);
      });
  },
  changeStatus(data: ChangeStatus) {
    axios
      .put('/api/status', data)
      .then((response) => {
        console.log(response.data);
        this.getUser();
        console.log('done');
      })
      .catch((error) => {
        this.error.msg = error.message;
        console.error(error);
      });
  },
  changeProfile(data: ChangeProfile) {
    axios
      .put('/api/change', data)
      .then((response) => {
        console.log(response.data);
        this.getUser();
        console.log('done');
      })
      .catch((error) => {
        this.saveValue = `${data.login}${data.old_pass}${data.new_pass}${data.repeat_pass}`;
        this.error.msg = error.response.data.error.msg;
        this.status = 1;
        console.error(error);
      });
  },
  setScore(data: SetScore) {
    axios
      .post('/api/score', data)
      .then((response) => {
        console.log(response.data);
        this.getUser();
        console.log('done');
      })
      .catch((error) => {
        console.error(error);
      });
  },
  profileEdit() {
    this.editStatus = !this.editStatus;
  },
  isChange() {
    this.status = 0;
  },
});

export default store;
