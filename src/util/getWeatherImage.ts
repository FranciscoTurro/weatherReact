import cloud_day from '../assets/svg/cloud-day.svg';
import cloud_night from '../assets/svg/cloud-night.svg';
import cloud from '../assets/svg/cloud.svg';
import mist from '../assets/svg/mist.svg';
import moon from '../assets/svg/moon.svg';
import rain from '../assets/svg/rain.svg';
import snowflake from '../assets/svg/snowflake.svg';
import sun from '../assets/svg/sun.svg';
import thunderstorm from '../assets/svg/thunderstorm.svg';

import cloud_day_dark from '../assets/svg/cloud-day-dark.svg';
import cloud_night_dark from '../assets/svg/cloud-night-dark.svg';
import cloud_dark from '../assets/svg/cloud-dark.svg';
import mist_dark from '../assets/svg/mist-dark.svg';
import moon_dark from '../assets/svg/moon-dark.svg';
import rain_dark from '../assets/svg/rain-dark.svg';
import snowflake_dark from '../assets/svg/snowflake-dark.svg';
import sun_dark from '../assets/svg/sun-dark.svg';
import thunderstorm_dark from '../assets/svg/thunderstorm-dark.svg';

export const getWeatherImage = (ID: string, isLight: boolean) => {
  if (isLight) {
    switch (ID) {
      case '01d':
        return sun;
      case '01n':
        return moon;
      case '02d':
        return cloud_day;
      case '02n':
        return cloud_night;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return cloud;
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return rain;
      case '11d':
      case '11n':
        return thunderstorm;
      case '13d':
      case '13n':
        return snowflake;
      case '50d':
      case '50n':
        return mist;
    }
  }
  if (!isLight) {
    switch (ID) {
      case '01d':
        return sun_dark;
      case '01n':
        return moon_dark;
      case '02d':
        return cloud_day_dark;
      case '02n':
        return cloud_night_dark;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return cloud_dark;
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return rain_dark;
      case '11d':
      case '11n':
        return thunderstorm_dark;
      case '13d':
      case '13n':
        return snowflake_dark;
      case '50d':
      case '50n':
        return mist_dark;
    }
  }
};
