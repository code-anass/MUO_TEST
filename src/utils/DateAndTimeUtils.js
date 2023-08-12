/**
 * Author:Anitha Gorli
 * Date: 10-APRIL-2023
 */

import Moment from 'moment';
import { isNil, isEmpty } from 'ramda';

export const parseDate = (mDate) => {
  if (isNil(mDate) || isEmpty(mDate)) {
    return "";
  }
  const fromNow = Moment(mDate);
  return fromNow.format('DD-MM-yyyy  HH:mm');
};


export const getCurrentDate= () =>{
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
 return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;


}
export const parseDateFormat = (mDate) => {
  if (isNil(mDate) || isEmpty(mDate)) {
    return "";
  }
  const fromNow = Moment(mDate);
  return fromNow.format('DD-MM-yyyy');
};

export const convertMinsToTime = (mins) => {
  mins = Number(mins * 60);
  const h = Math.floor(mins / 3600);
  const m = Math.floor((mins % 3600) / 60);
  const s = Math.floor((mins % 3600) % 60);
  const hoursV = h < 10 ? '0' + h : h;
  const minutesV = m < 10 ? '0' + m : m;
  const secondsV = s < 10 ? '0' + s : s;
  return hoursV + ':' + minutesV + ':' + secondsV;
};

export const convertSecondsToTime = seconds => {
  if (isNaN(seconds)) {
    return '00:00';
  }
  seconds = Number(seconds);

  if (seconds < 0) {
    return '00:00';
  }
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);

  const minutesV = m < 10 ? '0' + m : m;
  const secondsV = s < 10 ? '0' + s : s;

  return minutesV + ':' + secondsV;
};
