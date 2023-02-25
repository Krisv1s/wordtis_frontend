import React from 'react';

import './LeaderboardString.scss';

import avatar0 from '@/static/avatar/avatar0.png';
import avatar1 from '@/static/avatar/avatar1.png';
import avatar2 from '@/static/avatar/avatar2.png';
import avatar3 from '@/static/avatar/avatar3.png';
import avatar4 from '@/static/avatar/avatar4.png';
import avatar5 from '@/static/avatar/avatar5.png';
import avatar6 from '@/static/avatar/avatar6.png';
import avatar7 from '@/static/avatar/avatar7.png';

import status0 from '@/static/status/status0.svg';
import status1 from '@/static/status/status1.svg';
import status2 from '@/static/status/status2.svg';
import status3 from '@/static/status/status3.svg';

// type LeaderboardStringProps = {
//   info: {
//     login: string;
//     score: number;
//     place: number;
//     avatar_id: number;
//     status_id: number;
//   };
//   user: {
//     login: string;
//     score: number;
//     place: number;
//     avatar_id: number;
//     status_id: number;
//   };
// };

const LeaderboardString = (props: Record<string, any>) => {
  const getAvatar = (avatar: number | null) => {
    if (avatar === 0) return avatar0;
    else if (avatar === 1) return avatar1;
    else if (avatar === 2) return avatar2;
    else if (avatar === 3) return avatar3;
    else if (avatar === 4) return avatar4;
    else if (avatar === 5) return avatar5;
    else if (avatar === 6) return avatar6;
    else if (avatar === 7) return avatar7;
    return avatar1;
  };

  const getStatus = (status: number | null) => {
    if (status === 0) return status0;
    else if (status === 1) return status1;
    else if (status === 2) return status2;
    else if (status === 3) return status3;
    return status0;
  };

  const getClassPosition = (place: number) => {
    if (place === 1) return 'leaderboard-string-place-solo leaderboard-string-place-yellow';
    else if (place === 2) return 'leaderboard-string-place-solo leaderboard-string-place-blue';
    else if (place === 3)
      return 'leaderboard-string-place-solo leaderboard-string-place-yellowPink';
    else if (place === 4) return 'leaderboard-string-place-solo';
    else if (place === 5) return 'leaderboard-string-place-solo';
    else return '';
  };

  const getClassString = () => {
    if (props.info.place === props.user.place) return 'leaderboard-string-isUser';
    return '';
  };

  return (
    <div className={`leaderboard-string ${getClassString()}`}>
      <div className="leaderboard-string-user">
        <div className={`leaderboard-string-place ${getClassPosition(props.info.place)}`}>
          {props.info.place}
        </div>
        <div className="leaderboard-string-user">
          <img
            className="leaderboard-string-user-avatar"
            src={getAvatar(props.info.avatar_id)}
            alt="Avatar"
          />
          <div className="leaderboard-string-user-textBlock">
            <p className="leaderboard-string-user-textBlock-login">{props.info.login}</p>
            <p className="leaderboard-string-user-textBlock-score">{props.info.score}</p>
          </div>
        </div>
      </div>
      <img src={getStatus(props.info.status_id)} alt="Status" />
    </div>
  );
};

export default LeaderboardString;
