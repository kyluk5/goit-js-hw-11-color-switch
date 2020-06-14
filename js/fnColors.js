import colors from "./colors.js";

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let changeId = null;

btnStart.addEventListener("click", changeColor);
function changeColor() {
  changeId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  btnStart.disabled = true;
}

btnStop.addEventListener("click", stopRandom);
function stopRandom() {
  clearInterval(changeId);
  btnStart.disabled = false;
}
