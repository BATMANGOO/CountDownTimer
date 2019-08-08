'use strict';
const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinuteEl = document.querySelector('.timer__minute');
const timerSecondEl = document.querySelector('.timer__second');

function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds
  };
}

let timer = setInterval(function () {
  const StartDate = new Date();
  const endDate = new Date('January 1, 2020 12:00:00 AM');
  let timeDifferenceObj = getTimeDifference(StartDate, endDate);

  if (timeDifferenceObj.rDays === 0 && timeDifferenceObj.rHours === 0 && timeDifferenceObj.rMinutes === 0 && timeDifferenceObj.rSeconds === 0) {
    clearInterval(timer);
  } else {
    timerDayEl.textContent = below10(timeDifferenceObj.rDays);
    timerHourEl.textContent = below10(timeDifferenceObj.rHours);
    timerMinuteEl.textContent = below10(timeDifferenceObj.rMinutes);
    timerSecondEl.textContent = below10(timeDifferenceObj.rSeconds);
  }
}, 1000);

function below10(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}