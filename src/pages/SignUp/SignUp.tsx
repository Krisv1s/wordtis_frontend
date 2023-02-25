import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { InputForm } from '@/components/InputForm/InputForm';
import { ButtonForm } from '@/components/ButtonForm/ButtonForm';

import { Link } from 'react-router-dom';

import store from '@/store/index';

import '@/styles/Form.scss';

const SignUp = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgainst, setPasswordAgainst] = useState('');

  const handleClickSignup = () => {
    store.signUp({ username: email, login, password, repeat_pass: passwordAgainst });
  };

  // Old values return error props
  const getButtonProps = () => {
    const currectValue = `${email}${login}${password}${passwordAgainst}`;
    const props = {
      text: 'Создать аккаунт',
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
      <div className="main-block">
        <p className="main-block_text">Регистрация</p>
        {store.status !== 2 && (
          <>
            <InputForm
              id="0"
              placeholder="Логин"
              type="text"
              value={login}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
            />
            <InputForm
              id="1"
              placeholder="Почта"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <InputForm
              id="2"
              placeholder="Пароль"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <InputForm
              id="3"
              placeholder="Повторите пароль"
              type="password"
              value={passwordAgainst}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordAgainst(e.target.value)
              }
            />
            <ButtonForm onClick={handleClickSignup} info={getButtonProps()} />
            <div className="main-block_link main-block_link-solo">
              <Link to="/signin">У вас уже есть аккаунт?</Link>
            </div>
          </>
        )}
        {store.status === 2 && (
          <>
            <p>
              На вашу почту отправлено письмо с ссылкой. Перейдите по ней, чтобы активировать свою
              учетную запись
            </p>
            <div className="main-block_link main-block_link-solo">
              <Link to="/signin">Вход</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default observer(SignUp);
