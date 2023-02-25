import React, { useState } from 'react';

import './InputForm.scss';

import showIcon from './show.svg';
import hideIcon from './hide.svg';

export const InputForm = (props: Record<string, any>) => {
  const [isReveal, setIsReveal] = useState(false);

  const getType = (type: string) => {
    if (type !== 'password') return type;
    else if (!isReveal) return 'password';
    return 'text';
  };

  return (
    <div className="input-form-block">
      <input
        className="input-form-block_content"
        id={`input${props.id}`}
        placeholder={props.placeholder}
        autoComplete="off"
        type={getType(props.type)}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <label className="label" htmlFor={`input${props.id}`}>
        {props.placeholder}
      </label>
      {props.type === 'password' && (
        <img
          title={isReveal ? 'Hide password' : 'Show password'}
          src={isReveal ? hideIcon : showIcon}
          onClick={() => setIsReveal((prevState) => !prevState)}
        />
      )}
    </div>
  );
};
