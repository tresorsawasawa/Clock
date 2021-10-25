setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date(),
        secondsRatio = currentDate.getSeconds() / 60,
        minutesRatio = currentDate.getMinutes() / 60,
        hoursRatio = currentDate.getHours() / 60;
}