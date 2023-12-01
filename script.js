let hourNumber = 0
let minuteNumber = 0
let secondNumber = 0
let milisecondNumber = 0
let displayHour = document.querySelector("#hours")
let displayMinute = document.querySelector("#minutes")
let displaySecond = document.querySelector("#seconds")
let displayMilisecond = document.querySelector("#miliseconds")
let counter1
let counter2
let counter3
let counter4

function startCounter() {
    pauseCounter()

    if (!counter1) {
        counter1 = setInterval(() => {
            milisecondNumber++

            if (milisecondNumber === 100) {
                milisecondNumber = 0;
            }

            displayMilisecond.innerHTML = milisecondNumber + "ms"
        }, 10)
    }

    if (!counter2) {
        counter2 = setInterval(() => {
            secondNumber++

            if (secondNumber === 60) {
                secondNumber = 0;
            }

            displaySecond.innerHTML = secondNumber + "s"
        }, 1000);
    }

    if (!counter3) {
        counter3 = setInterval(() => {
            minuteNumber++

            if (minuteNumber === 60) {
                minuteNumber = 0;
            }

            displayMinute.innerHTML = minuteNumber + "m"
        }, 60 * 1000)
    }

    if (!counter4) {
        counter4 = setInterval(() => {
            hourNumber++

            displayHour.innerHTML = hourNumber + "h"
        }, 60 * 60 * 1000)
    }
};

function pauseCounter() {
    clearInterval(counter1)
    clearInterval(counter2)
    clearInterval(counter3)
    clearInterval(counter4)
    counter1 = null
    counter2 = null
    counter3 = null
    counter4 = null
};

function clearCounter() {
    clearInterval(counter1)
    clearInterval(counter2)
    clearInterval(counter3)
    clearInterval(counter4)
    counter1 = null
    counter2 = null
    counter3 = null
    counter4 = null
    hourNumber = 0
    minuteNumber = 0
    secondNumber = 0
    milisecondNumber = 0

    displayHour.innerHTML = hourNumber + "h"
    displayMinute.innerHTML = minuteNumber + "m"
    displaySecond.innerHTML = secondNumber + "s"
    displayMilisecond.innerHTML = milisecondNumber + "ms"
};

