import React from 'react';

import GamepadSvg from './Gamepad.svg';
import StarSvg from './Star.svg';

import './GameResult.scss';

const GameResult = (props: Record<string, any>) => {
  const normalTimeFormat = (num: number) => {
    if (num >= 10) return `${num}`;
    return `0${num}`;
  };

  const getDateString = (time: string) => {
    const monthArray = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    const date = new Date(time);
    const dateString = `${date.getDate()} ${
      monthArray[date.getMonth()]
    } ${date.getFullYear()} ${normalTimeFormat(date.getHours())}:${normalTimeFormat(
      date.getMinutes()
    )}:${normalTimeFormat(date.getSeconds())}`;
    return dateString;
  };

  return (
    <div className="game_result-block">
      <img
        className="game_result-block-icon"
        src={props.info.score === props.maxScore ? StarSvg : GamepadSvg}
        alt="Gamepad"
      />
      <div className="game_result-block-info">
        <p className="game_result-block-time">{getDateString(props.info.data)}</p>
        <p className="game_result-block-label">ваш счёт</p>
        <p className="game_result-block-score">{props.info.score}</p>
      </div>
    </div>
  );
};

export default GameResult;
