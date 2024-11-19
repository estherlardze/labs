import { Clock, toTimeFormat } from "./utility.js";

function ClockApp() {
    const clockElement = document.querySelector("#clock");
    const timeZoneElement = document.querySelector("#tz");
    const formatSelect = document.querySelector("#format");
    const colorInput = document.querySelector("#color");
    const alarmInput = document.querySelector("#time");
    const alarmList = document.querySelector("#alarms");
    let intervalId = null; //to keep track of intervals and clear them when needed
    const clock = new Clock(); // create an instance of the new clock


    function initializeDom() {
        populateTimeZones();
    }

    function populateTimeZones() {
        const timeZones = Intl.supportedValuesOf("timeZone").slice(0, 10);
        timeZones.forEach((tz) => { // dynamically fills the select dropdown with the first 10 supported time zones
            const option = document.createElement("option");
            const offset = new Date().toLocaleTimeString("en-us", {
                timeZone: tz,
                timeZoneName: "short",
            });
            const [region, city] = tz.split("/");
            option.value = tz;
            option.textContent = `${region}/${city} (${offset})`;
            timeZoneElement.appendChild(option);
        });
    }

    function updateTimeDisplay() {
        clearInterval(intervalId); 

        intervalId = setInterval(() => {
            clockElement.innerHTML = clock.getFormattedTime(formatSelect.value);
        });
    }

    function onFormatChange() {
        formatSelect.addEventListener("change", () => {
            updateTimeDisplay();
        });
    }

    function onColorChange() {
        colorInput.addEventListener("change", (event) => {
            clockElement.style.color = event.target.value;
        });
    }

    function onTimeZoneChange() {
        timeZoneElement.addEventListener("change", (event) => {
            clock.setTimeZone(event.target.value);
            updateTimeDisplay();
        });
    }

    function setAlarm() {
        alarmInput.addEventListener("change", (event) => {
            const alarmTime = event.target.value;
            const [hour, minute] = alarmTime.split(":").map(Number);
            const alarm = new Date();
            alarm.setHours(hour, minute, 0);
            const timeToAlarm = alarm - new Date();

            if (timeToAlarm > 0) {
                const alarmId = setTimeout(() => {
                    alert(`Alarm for ${alarm.toLocaleTimeString()}`);
                }, timeToAlarm);

                const listItem = document.createElement("li");
                listItem.textContent = `${alarmTime} - Alarm Set`;
                alarmList.appendChild(listItem);
            }
            alarmInput.value = "";
        });
    }

    function init() {
        initializeDom();
        updateTimeDisplay();
        onFormatChange();
        onColorChange();
        onTimeZoneChange();
        setAlarm();
    }

    return { init };
}

const app = ClockApp();
app.init();