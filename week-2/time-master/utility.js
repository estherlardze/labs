// Utility function to ensure two-digit time format
function toTimeFormat(time) {
    return time.toString().padStart(2, "0");
}

// Clock Constructor Function
function Clock() {
    const date = new Date();
    this.date = date;
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Stores the current time zone 

    // Update time every second
    setInterval(() => {
        // set timezone to the current timezone
        this.date = new Date(
            new Date().toLocaleString("en-US", { timeZone: this.timeZone })
        );
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
    }, 1000);
}

// Prototype Methods
Clock.prototype.getPeriod = function () {
    return this.hour >= 12 ? "PM" : "AM";
};

Clock.prototype.getFormattedTime = function (format) {
    return format === "12" ? this.get12HourTime() : this.get24HourTime();
};

Clock.prototype.get12HourTime = function () {
    const hour = this.hour % 12 || 12; // convert 24 hour time format to 12-hour format
    return `${toTimeFormat(hour)}:${toTimeFormat(this.minute)}:${toTimeFormat(
        this.second
    )} ${this.getPeriod()}`;
};

Clock.prototype.get24HourTime = function () {
    return `${toTimeFormat(this.hour)}:${toTimeFormat(
        this.minute
    )}:${toTimeFormat(this.second)}`;
};

Clock.prototype.setTimeZone = function (timezone) {
    this.timeZone = timezone;
};

// Exporting the Clock constructor
export { Clock, toTimeFormat };