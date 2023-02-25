import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { InputForm } from '@/components/InputForm/InputForm';
import { ButtonForm } from '@/components/ButtonForm/ButtonForm';

import { Link, Navigate } from 'react-router-dom';

import store from '@/store/index';

import '@/styles/Form.scss';

const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogin = () => {
    store.login({ username: login, password });
  };

  // Old values return error props
  const getButtonProps = () => {
    const currectValue = `${login}${password}`;
    const props = {
      text: 'Войти',
      fail: false,
    };
    if (currectValue === store.saveValue && store.status === 1) {
      props.text = store.error.msg;
      props.fail = true;
    }
    return props;
  };

  return (
    <div>
      {store.user !== null && <Navigate to="/profile" />}
      <div className="main-block">
        <p className="main-block_text">Войдите в аккаунт</p>
        <InputForm
          id="0"
          placeholder="Почта"
          type="text"
          value={login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
        />
        <InputForm
          id="1"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <ButtonForm onClick={handleClickLogin} info={getButtonProps()} />
        <div className="main-block_link">
          <Link to="/forget">Забыли пароль?</Link>
          <Link to="/signup">Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default observer(SignIn);
