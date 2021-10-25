setInterval(setClock, 1000);

const hourHand = document.querySelector('#data-hour-hand'),
    minuteHand = document.querySelector('#data-minute-hand'),
    secondHand = document.querySelector('#data-second-hand');

function setClock() {
    const currentDate = new Date(),
        secondsRatio = currentDate.getSeconds() / 60,
        minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60,
        hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}