const timeElem = document.querySelector(".time");
const clockElem = document.querySelector(".clock");

setInterval(() => {
  const date = new Date();

  let hours = date.getHours();

  if (Number(hours) > 12) {
    hours = Number(hours) - 12;
  } else {
    hours = hours;
  }

  //   hours = Number(hours) > 12 ? Number(hours) - 12 : hours;

  const minutes = date.getMinutes();

  const seconds = date.getSeconds();

  const time = concatenateTime(hours, minutes, seconds);

  timeElem.textContent = time;
}, 1000);

const concatenateTime = (hours, minutes, seconds) => {
  //   return hours + ":" + minutes + ":" + seconds;

  return `${hours}:${minutes}:${seconds}`;
};

setTimeout(() => {
  clockElem.textContent = "Time is:";
}, 5000);
