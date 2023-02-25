import React, { ReactElement } from 'react';

import { observer } from 'mobx-react-lite';

import { Navigate } from 'react-router-dom';

import store from '@/store';

type ProtectedRouteType = {
  mustBeAuth?: boolean;
  children: ReactElement;
};

const ProtectedRoute = ({ mustBeAuth, children }: ProtectedRouteType) => {
  if (store.load === 0) {
    return <p className="welcome-text">Добро пожаловать в WordTris!</p>;
  } else if (store.load === 2) {
    if (mustBeAuth && store.user === null) {
      return <Navigate to="/signin" />;
    }
    return children;
  }
  return <div></div>;
};

export default observer(ProtectedRoute);
