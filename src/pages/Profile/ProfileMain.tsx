import React from 'react';

import { observer } from 'mobx-react-lite';

import './Profile.scss';

import { Footer } from '@/components/Footer/Footer';
import GameResult from '@/components/GameResult/GameResult';
import store from '@/store/index';

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

import settingSvg from '@/static/status/setting.svg';

const ProfileMain = () => {
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

  const getStatus = (status: number | undefined) => {
    if (status === 0) return status0;
    else if (status === 1) return status1;
    else if (status === 2) return status2;
    else if (status === 3) return status3;
    return status0;
  };

  const handleClickProfileEdit = () => {
    store.profileEdit();
  };

  const handleClickChangeStatus = (status: number) => {
    store.changeStatus({ status });
  };

  const handleClickLogout = () => {
    store.logout();
  };

  return (
    <div>
      <div className="profile-block">
        <div className="profile-block-header" />
        <div className="profile-block-info">
          <div className="profile-block-line">
            <div className="profile-dropdown-status">
              <img src={getStatus(store?.user?.status_id)} alt="BS" />
              <div className="profile-dropdown-status-content">
                <img
                  src={getStatus(0)}
                  alt="S1"
                  onClick={() => {
                    handleClickChangeStatus(0);
                  }}
                />
                <img
                  src={getStatus(1)}
                  alt="S2"
                  onClick={() => {
                    handleClickChangeStatus(1);
                  }}
                />
                <img
                  src={getStatus(2)}
                  alt="S3"
                  onClick={() => {
                    handleClickChangeStatus(2);
                  }}
                />
                <img
                  src={getStatus(3)}
                  alt="S4"
                  onClick={() => {
                    handleClickChangeStatus(3);
                  }}
                />
              </div>
            </div>
            <img
              src={getAvatar(store?.user?.avatar_id)}
              alt="Avatar"
              className="profile-block-avatar"
            />
            <div className="profile-dropdown-setting">
              <img src={settingSvg} alt="BS" />
              <div className="profile-dropdown-setting-content">
                <button
                  className="profile-dropdown-setting-button"
                  onClick={handleClickProfileEdit}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2943 4.33596C14.0748 3.55432 15.3406 3.55384 16.1217 4.33489L18.6135 6.82675C19.3879 7.60113 19.396 8.85478 18.6316 9.63905L16.9717 11.3421L11.6312 6.00165L13.2943 4.33596ZM10.5713 7.06311L15.9246 12.4164L9.39844 19.1123C8.83401 19.6914 8.05989 20.0179 7.25154 20.0179L4.49939 20.0178C3.64656 20.0178 2.96549 19.3068 3.00135 18.4541L3.11951 15.6451C3.15111 14.8939 3.46333 14.1819 3.9944 13.65L10.5713 7.06311ZM19.7649 20.6951C20.179 20.6951 20.5146 20.3592 20.5146 19.9448C20.5146 19.5305 20.179 19.1945 19.7649 19.1945H13.6432C13.2292 19.1945 12.8935 19.5305 12.8935 19.9448C12.8935 20.3592 13.2292 20.6951 13.6432 20.6951H19.7649Z"
                      fill="#6F2DBD"
                    />
                  </svg>
                  &ensp; Редактировать профиль
                </button>
                <button className="profile-dropdown-setting-button" onClick={handleClickLogout}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2167 3.06667H16.83C19.0391 3.06667 20.83 4.85753 20.83 7.06667V16.9333C20.83 19.1425 19.0391 20.9333 16.83 20.9333H13.2167C11.0075 20.9333 9.21667 19.1425 9.21667 16.9333V15.5733V12.75L14.5527 12.75L13.153 14.1497C12.8601 14.4426 12.8601 14.9174 13.153 15.2103C13.4459 15.5032 13.9208 15.5032 14.2137 15.2103L16.262 13.162C16.9037 12.5203 16.9037 11.4798 16.262 10.838L14.2137 8.78967C13.9208 8.49678 13.4459 8.49678 13.153 8.78967C12.8601 9.08256 12.8601 9.55744 13.153 9.85033L14.5527 11.25H9.21667V8.42667V7.06667C9.21667 4.85753 11.0075 3.06667 13.2167 3.06667ZM9.21667 11.25H4.75C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75L9.21667 12.75V11.25Z"
                      fill="#6F2DBD"
                    />
                  </svg>
                  &ensp; Выйти
                </button>
              </div>
            </div>
          </div>
          <p className="profile-block-name">{store?.user?.score?.login || ''}</p>
          <p className="profile-block-record_label">личный рекорд</p>
          <p className="profile-block-record">{store?.user?.score?.score || ''}</p>
        </div>
        {store?.user?.gameHistory && (
          <div className="profile-block-history">
            <p className="profile-block-history_label">История игр</p>
            {store?.user?.gameHistory.map((item: Record<string, string | number>) => (
              <GameResult key={item.id} info={item} maxScore={store?.user?.score?.score || 0} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default observer(ProfileMain);
