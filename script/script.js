setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date(),
        secondsRatio = currentDate.getSeconds() / 60,
        minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60,
        hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
}