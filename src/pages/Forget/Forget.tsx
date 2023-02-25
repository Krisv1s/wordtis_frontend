import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { InputForm } from '@/components/InputForm/InputForm';
import { ButtonForm } from '@/components/ButtonForm/ButtonForm';

import { Link } from 'react-router-dom';

import store from '@/store/index';

import '@/styles/Form.scss';

const Forget = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgainst, setPasswordAgainst] = useState('');

  const handleClickForget = () => {
    store.forget({ username: login, new_pass: password, repeat_pass: passwordAgainst });
  };

  // Old values return error props
  const getButtonProps = () => {
    const currectValue = `${login}${password}${passwordAgainst}`;
    const props = {
      text: 'Далее',
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
        <p className="main-block_text">Восстанавление пароля</p>
        {store.status !== 2 && (
          <>
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
            <InputForm
              id="2"
              placeholder="Повторите пароль"
              type="password"
              value={passwordAgainst}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordAgainst(e.target.value)
              }
            />
            <ButtonForm onClick={handleClickForget} info={getButtonProps()} />
            <div className="main-block_link main-block_link-solo">
              <Link to="/signin">Вспомнили пароль?</Link>
            </div>
          </>
        )}
        {store.status === 2 && (
          <p>
            На вашу почту отправлено письмо с ссылкой. Перейдите по ней, чтобы восстановить свою
            учетную запись
          </p>
        )}
      </div>
    </div>
  );
};

export default observer(Forget);
