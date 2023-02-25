import React from 'react';

import './ButtonForm.scss';

type ButtonProps = {
  modifier?: string;
  onClick: () => void;
  info: {
    fail: boolean;
    text: string;
  };
};

export const ButtonForm = (props: ButtonProps) => {
  const getStyles = (fail: boolean) => {
    if (fail) {
      return {
        style: {
          background: '#FF5252',
        },
        disabled: true,
      };
    }
  };
  return (
    <button
      onClick={props.onClick}
      {...getStyles(props.info.fail)}
      className={`button-form ${props.modifier ? props.modifier : ''}`}
    >
      {props.info.text}
    </button>
  );
};
