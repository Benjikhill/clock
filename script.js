const clockDigitalElement = document.querySelector(".digitalClock");

let showSeperator = false;
let seperator = () => (showSeperator ? ":" : "&nbsp;");

function formatTimeElement(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return "" + number;
  }
}

function digitalTime(seperatorState) {
  const dateTime = new Date();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();
  /*clockDigitalElement.innerText = [
    formatTimeElement(hrs),
    seperator(),
    formatTimeElement(min),
    seperator(),
    formatTimeElement(sec),
  ].join("");*/
  document.querySelector("#hours").innerText = formatTimeElement(hrs);
  document.querySelector("#minutes").innerText = formatTimeElement(min);
  document.querySelector("#seconds").innerText = formatTimeElement(sec);
  document.querySelectorAll(".colon").forEach(function (item) {
    item.innerHTML = seperator();
  });

  showSeperator = seperatorState;
}

setInterval(function () {
  digitalTime(true);
}, 1000);

setInterval(function () {
  digitalTime(false);
}, 2000);

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();
