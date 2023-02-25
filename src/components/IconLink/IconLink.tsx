import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import './IconLink.scss';

type IconButtonProps = {
  to: string;
  children: ReactElement;
};

export const IconButton = (props: IconButtonProps) => {
  const navigate = useNavigate();

  const handleClickRoute = (to: string) => {
    if (window.location.pathname === '/') {
      navigate(to);
      window.location.reload();
    } else {
      navigate(to);
    }
  };
  return (
    <a
      onClick={() => {
        handleClickRoute(props.to);
      }}
    >
      {props.children}
    </a>
  );
};
