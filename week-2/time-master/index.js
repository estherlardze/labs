const newDate = new Date();
// task 1
console.log(
  `Current Time: ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
);

// task 2 and 3
class ClockObj {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  getFormattedTime() {
    const hs = String(this.hours).padStart(2, "0");
    const ms = String(this.minutes).padStart(2, "0");
    const ss = String(this.seconds).padStart(2, "0");
    return `${hs}:${ms}:${ss}`;
  }

  get12HourTime() {
    let amPm = "AM";
    let hour = this.hours;

    if (this.hours >= 12) {
      amPm = "PM";
      if (this.minutes > 12) {
        hour = this.hours - 12;
      } else if (this.hours === 0) {
        this.hours = 12;
      }
    }

    const hs = String(hour).padStart(2, "0");
    const ms = String(this.minutes).padStart(2, "0");
    const ss = String(this.seconds).padStart(2, "0");
    return `${hs}:${ms}:${ss} ${amPm}`;
  }

  updateTime() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
        if (this.hours === 24) {
          this.hours = 0;
        }
      }
    }
  }
}

const clock = new ClockObj(13, 32, 59);

// task 4
const container = document.getElementById("container");

function dislayClock() {
  const div = document.createElement("div");
  setInterval(() => {
    div.innerHTML = `Current Time: ${clock.getFormattedTime()}`;
  }, 1000);
  container.appendChild(div);
}
window.addEventListener("DOMContentLoaded", dislayClock);