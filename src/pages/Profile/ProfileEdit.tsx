import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import './Profile.scss';
import { Footer } from '@/components/Footer/Footer';
import { InputForm } from '@/components/InputForm/InputForm';
import { ButtonForm } from '@/components/ButtonForm/ButtonForm';

import avatar0 from '@/static/avatar/avatar0.png';
import avatar1 from '@/static/avatar/avatar1.png';
import avatar2 from '@/static/avatar/avatar2.png';
import avatar3 from '@/static/avatar/avatar3.png';
import avatar4 from '@/static/avatar/avatar4.png';
import avatar5 from '@/static/avatar/avatar5.png';
import avatar6 from '@/static/avatar/avatar6.png';
import avatar7 from '@/static/avatar/avatar7.png';

import store from '@/store';

const ProfileEdit = () => {
  const [login, setLogin] = useState(store?.user?.score?.login || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRepeatPassword, setNewRepeatPassword] = useState('');

  const handleClickProfileEdit = () => {
    store.profileEdit();
  };

  const handleClickChangeProfile = () => {
    store.changeProfile({
      login,
      old_pass: oldPassword,
      new_pass: newPassword,
      repeat_pass: newRepeatPassword,
    });
  };

  const getAvatar = (avatar: number | undefined) => {
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

  // Old values return error props
  const getButtonProps = () => {
    const props = {
      text: 'Сохранить',
      fail: false,
    };
    if (store.status === 1) {
      props.text = store.error.msg;
      props.fail = true;
    }
    return props;
  };

  return (
    <div>
      <div>
        <div className="profile-block">
          <div className="profile-block-header" />
          <div className="profile-block-info">
            <div className="profile-block-line profile-block-line-solo">
              <img
                src={getAvatar(store?.user?.avatar_id)}
                alt="Avatar"
                className="profile-block-avatar"
              />
            </div>
          </div>
          <div className="profile-block-edit-block">
            <InputForm
              id="0"
              placeholder="Имя пользователя"
              type="text"
              value={login}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                store.isChange();
                setLogin(e.target.value);
              }}
            />
            <InputForm
              id="1"
              placeholder="Старый пароль"
              type="password"
              value={oldPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                store.isChange();
                setOldPassword(e.target.value);
              }}
            />
            <InputForm
              id="2"
              placeholder="Новый пароль"
              type="password"
              value={newPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                store.isChange();
                setNewPassword(e.target.value);
              }}
            />
            <InputForm
              id="3"
              placeholder="Повторите новый пароль"
              type="password"
              value={newRepeatPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                store.isChange();
                setNewRepeatPassword(e.target.value);
              }}
            />
            <div className="profile-block-edit-buttons">
              <ButtonForm
                info={{ text: 'Отменить', fail: false }}
                modifier="button-form-profile"
                onClick={handleClickProfileEdit}
              />
              <ButtonForm
                info={getButtonProps()}
                modifier="button-form-profile"
                onClick={handleClickChangeProfile}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default observer(ProfileEdit);
