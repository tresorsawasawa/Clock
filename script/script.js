setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]'),
    minuteHand = document.querySelector('[data-minute-hand'),
    secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date(),
        secondsRatio = currentDate.getSeconds() / 60,
        minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60,
        hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();

// Functionality for Digital Clock 

function showTime() {
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour -= 12;
        session = "PM";
    }

    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;

    let time = hour + ":" + minute + ":" + second + " " + session;
    document.querySelector('#time-header').innerHTML = time;
    document.querySelector('#time-header').textContent = time;

    setTimeout(showTime, 1000);
}

showTime();