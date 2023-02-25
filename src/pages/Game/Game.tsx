import React, { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import './Game.scss';

import { Unity, useUnityContext } from 'react-unity-webgl';
import { Footer } from '@/components/Footer/Footer';

import store from '@/store';

const Game = () => {
  const {
    unityProvider,
    isLoaded,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
    addEventListener,
    removeEventListener,
    sendMessage,
  } = useUnityContext({
    loaderUrl: 'Wordtris Build/Build/Wordtris Build.loader.js',
    dataUrl: 'Wordtris Build/Build/Wordtris Build.data.unityweb',
    frameworkUrl: 'Wordtris Build/Build/Wordtris Build.framework.js.unityweb',
    codeUrl: 'Wordtris Build/Build/Wordtris Build.wasm.unityweb',
  });

  const [score, setScore] = useState(store?.user?.score?.score);
  const [isGameOver, setIsGameOver] = useState(false);
  // const [text, setText] = useState('Ваш счёт');

  const handleGameOver = useCallback((score: number) => {
    setScore(score);
    store.setScore({ score });
    setIsGameOver(true);
  }, []);

  const handleGameStarted = useCallback(() => {
    setIsGameOver(false);
  }, []);

  const handleClickStartGame = () => {
    sendMessage('ExternalEvents', 'Restart');
  };

  useEffect(() => {
    addEventListener('OnGameOver', handleGameOver);
    return () => {
      removeEventListener('OnGameOver', handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  useEffect(() => {
    addEventListener('OnGameStarted', handleGameStarted);
    return () => {
      removeEventListener('OnGameStarted', handleGameStarted);
    };
  }, [addEventListener, removeEventListener, handleGameStarted]);

  window.addEventListener(
    'popstate',
    async function () {
      try {
        await detachAndUnloadImmediate();
      } catch (err) {
        console.log(err);
      }
    },
    false
  );

  return (
    <>
      {isLoaded === false && (
        <div>
          <p className="welcome-text">Добро пожаловать в WordTris!</p>
        </div>
      )}
      <Unity unityProvider={unityProvider} style={{ zIndex: 0, overflow: 'hidden' }} />
      {isGameOver && (
        <>
          <div className="gray-block"></div>
          <div className="game-block">
            <svg
              width="97"
              height="96"
              viewBox="0 0 97 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="game-block-svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M83.9527 0.100675C91.3032 -0.860672 97.3607 5.19682 96.3993 12.5473C94.9941 23.2915 91.1359 41.5437 80.2255 53.3074C76.7541 57.0504 72.5609 60.5087 68.2488 63.5814L69.5088 72.401C69.8635 74.8846 69.0283 77.3902 67.2544 79.1642L52.7619 93.6567C48.1176 98.3009 40.1645 95.6499 39.2356 89.1479L37.3033 75.6216L37.3091 75.6208C36.075 75.0235 34.9308 74.2156 33.9339 73.2187L23.2814 62.5662C22.2845 61.5693 21.4766 60.4249 20.8793 59.1908L20.8784 59.1969L7.35211 57.2645C0.850113 56.3357 -1.80094 48.3825 2.84334 43.7382L17.3358 29.2457C19.1098 27.4718 21.6154 26.6366 24.0989 26.9914L32.9187 28.2513C35.9913 23.9392 39.4497 19.746 43.1926 16.2745C54.9563 5.36406 73.2086 1.50588 83.9527 0.100675ZM14.1154 63.0614C15.4493 64.3954 15.4493 66.5583 14.1154 67.8923L7.67426 74.3334C6.34027 75.6674 4.17743 75.6674 2.84344 74.3334C1.50944 72.9994 1.50945 70.8365 2.84344 69.5025L9.28453 63.0614C10.6185 61.7274 12.7814 61.7274 14.1154 63.0614ZM23.777 72.7231C25.111 74.0571 25.111 76.2199 23.777 77.5539L10.8948 90.4361C9.56081 91.7701 7.39798 91.7701 6.06399 90.4361C4.72999 89.1021 4.72999 86.9393 6.06399 85.6053L18.9462 72.7231C20.2802 71.3891 22.443 71.3891 23.777 72.7231ZM33.4386 82.3847C34.7726 83.7187 34.7726 85.8816 33.4386 87.2156L26.9975 93.6567C25.6635 94.9907 23.5007 94.9907 22.1667 93.6567C20.8327 92.3227 20.8327 90.1598 22.1667 88.8258L28.6078 82.3847C29.9418 81.0507 32.1046 81.0507 33.4386 82.3847ZM56.7861 39.712C53.2288 36.1547 53.2288 30.3871 56.7861 26.8298C60.3435 23.2725 66.111 23.2725 69.6683 26.8298C73.2256 30.3871 73.2256 36.1547 69.6683 39.712C66.111 43.2693 60.3435 43.2693 56.7861 39.712Z"
                fill="#6F2DBD"
              />
            </svg>
            <p className="game-block-text">Ваш счёт</p>
            <p className="game-block-score">{score}</p>
            <button onClick={handleClickStartGame} className="game-block-button">
              Новая игра
            </button>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default observer(Game);
