import React from 'react';

import './Footer.scss';

import { IconButton } from '../IconLink/IconLink';
import currectColor from '@/utils/currectColor';

export const Footer = () => {
  const colors = currectColor();
  return (
    <div className="footer_block">
      <IconButton to="/leaderboard">
        <svg
          width="58"
          height="43"
          viewBox="0 0 58 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.0011 38.3005C50.1433 38.3193 50.2854 38.3387 50.4274 38.3586L51.1415 38.4588C54.2506 38.8951 57.0323 36.5253 57.0323 33.4403V31.0859C57.0323 28.8796 55.6203 26.9114 53.505 26.1693C51.061 25.312 48.538 24.7537 45.991 24.4946C48.6486 26.416 50.2969 29.5274 50.2969 32.9219V35.845C50.2969 36.694 50.1942 37.516 50.0011 38.3005ZM39.229 21.3625C40.2881 21.7997 41.4515 22.0414 42.6724 22.0414C47.5843 22.0414 51.5662 18.1301 51.5662 13.3052C51.5662 8.48039 47.5843 4.56909 42.6724 4.56909C42.5269 4.56909 42.3822 4.57252 42.2384 4.57931C43.1316 6.48164 43.6308 8.6057 43.6308 10.8463C43.6308 14.9624 41.9463 18.6851 39.229 21.3625Z"
            fill={colors[0]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.61802 38.3005C7.47586 38.3193 7.33376 38.3387 7.19171 38.3586L6.47761 38.4588C3.3685 38.8951 0.586817 36.5253 0.586817 33.4403V31.0859C0.586817 28.8796 1.99885 26.9114 4.11417 26.1693C6.55812 25.312 9.08117 24.7537 11.6281 24.4946C8.97055 26.416 7.3222 29.5274 7.3222 32.9219V35.845C7.3222 36.694 7.42493 37.516 7.61802 38.3005ZM18.3901 21.3625C17.331 21.7997 16.1676 22.0414 14.9467 22.0414C10.0348 22.0414 6.05293 18.1301 6.05293 13.3052C6.05293 8.48039 10.0348 4.56909 14.9467 4.56909C15.0922 4.56909 15.2369 4.57252 15.3807 4.57931C14.4875 6.48164 13.9883 8.6057 13.9883 10.8463C13.9883 14.9624 15.6729 18.6851 18.3901 21.3625Z"
            fill={colors[0]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.7144 10.8463C39.7144 4.85606 34.8584 0 28.8681 0C22.8779 0 18.0218 4.85606 18.0218 10.8463C18.0218 16.8366 22.8779 21.6926 28.8681 21.6926C34.8584 21.6926 39.7144 16.8366 39.7144 10.8463Z"
            fill={colors[0]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6575 26.8177C24.2003 23.7667 33.5359 23.7667 42.0788 26.8177C44.6585 27.739 46.3806 30.1826 46.3806 32.9219V35.845C46.3806 39.6752 42.9882 42.6173 39.1965 42.0757L38.3257 41.9513C32.0525 41.0551 25.6838 41.0551 19.4106 41.9513L18.5398 42.0757C14.7481 42.6173 11.3557 39.6752 11.3557 35.845V32.9219C11.3557 30.1826 13.0777 27.739 15.6575 26.8177Z"
            fill={colors[0]}
          />
        </svg>
      </IconButton>
      <IconButton to="/">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28ZM20.8372 22.9346C20.8372 19.086 25.1264 16.7905 28.3287 18.9253L35.9263 23.9904C38.7873 25.8977 38.7873 30.1017 35.9263 32.009L28.3287 37.0741C25.1264 39.2089 20.8372 36.9134 20.8372 33.0648V22.9346Z"
            fill={colors[1]}
          />
        </svg>
      </IconButton>
      <IconButton to="/profile">
        <svg
          width="36"
          height="43"
          viewBox="0 0 36 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="9.48571"
            transform="matrix(-1 0 0 1 17.9999 10.4857)"
            fill={colors[2]}
            stroke={colors[2]}
            strokeWidth="1.5"
          />
          <path
            d="M1.3999 33.4617C1.3999 31.7713 2.46259 30.2633 4.05456 29.6948L6.90081 28.6783C14.0782 26.1149 21.9216 26.1149 29.099 28.6783L31.9452 29.6948C33.5372 30.2633 34.5999 31.7713 34.5999 33.4617V40.194C34.5999 41.4111 33.5219 42.346 32.3171 42.1739L21.8183 40.6741C19.2856 40.3122 16.7143 40.3122 14.1815 40.6741L3.68274 42.1739C2.47788 42.346 1.3999 41.4111 1.3999 40.194V33.4617Z"
            fill={colors[2]}
            stroke={colors[2]}
            strokeWidth="1.5"
          />
        </svg>
      </IconButton>
    </div>
  );
};