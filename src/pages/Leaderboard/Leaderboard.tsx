import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import './Leaderboard.scss';

import { Footer } from '@/components/Footer/Footer';
import LeaderboardString from '@/components/LeaderboardString/LeaderboardString';

import store from '@/store';

const Login = () => {
  useEffect(() => {
    store.getLeaderboard();
  }, []);
  return (
    <div>
      <div className="leaderboard-block">
        <p className="leaderboard-name">Рейтинг</p>
        <div className="leaderboard-top">
          {store?.leaderboard && (
            <>
              {store.leaderboard.leaderBoardList.map((key: Record<string, string | number>) => (
                <LeaderboardString key={key.place} user={store?.leaderboard?.user} info={key} />
              ))}
            </>
          )}
          {!store?.leaderboard && <p className="welcome-text">Wait....</p>}
        </div>
        {store?.leaderboard?.user && store?.leaderboard?.user.place > 5 && (
          <div className="leaderboard-top">
            <p className="leaderboard-top-label">Ваше место в рейтинге</p>
            <LeaderboardString user={store?.leaderboard?.user} info={store?.leaderboard?.user} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default observer(Login);
