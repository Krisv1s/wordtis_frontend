import React from 'react';

import { observer } from 'mobx-react-lite';

import './Profile.scss';

import store from '@/store';

import ProfileMain from './ProfileMain';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
  if (!store.editStatus) return <ProfileMain />;
  return <ProfileEdit />;
};

export default observer(Profile);
