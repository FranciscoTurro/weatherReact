import cloud_day from '../assets/svg/cloud-day.svg';
import cloud_night from '../assets/svg/cloud-night.svg';
import cloud from '../assets/svg/cloud.svg';
import mist from '../assets/svg/mist.svg';
import moon from '../assets/svg/moon.svg';
import rain from '../assets/svg/rain.svg';
import snowflake from '../assets/svg/snowflake.svg';
import sun from '../assets/svg/sun.svg';
import thunderstorm from '../assets/svg/thunderstorm.svg';

export const getWeatherImage = (ID: string) => {
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
};
