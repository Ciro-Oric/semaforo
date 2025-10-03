
let 

const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timerDisplay");

const ledsVermelho = document.querySelectorAll(".ledVermelho");
const ledsAmarelo = document.querySelectorAll(".ledAmarelo");
const ledsLaranja = document.querySelectorAll(".ledLaranja");
const ledsVerde = document.querySelectorAll(".ledVerde");

let startTime = null;
let waitingForClick = false;

function resetLeds() {
    [...ledsVermelho, ...ledsAmarelo, ...ledsLaranja, ...ledsVerde].forEach(led => {
        led.computedStyleMap.opacity = "0.2";
    });
}

function acender(leds, cor) {
    leds.forEach(led =>  {
        switch (cor) {
            case "vermelho":
                led.style.backgroundColor = "red";
                break;
            case "laranja":
                led.style.backgroundColor = "orange";
                break;
            case "amarelo":
                led.style.backgroundColor = "yellow";
                break;
            case "verde":
                led.style.backgroundColor = "limegreen";
                break;

        }
        led.style.opacity = "1";
    });
}

function apagarTudo() {
    ledsVermelho.forEach(led => led.style.backgroundColor = "rgba(252, 8, 8, 0.123)");
    ledsLaranja.forEach(led => led.style.backgroundColor = "rgba(255, 166, 0, 0,164)");
    ledsAmarelo.forEach(led => led.style.backgroundColor = "rgba(255, 255, 0, 0151)");
    ledsVerde.forEach(led => led.style.backgroundColor = "rgba(0, 128, 0, 0.096)");
    resetLeds();
}

function iniciarSequencia() {
    apagarTudo();
    timerDisplay.textContent = "";
    startButton.disable = true;
    startButton.textContent = "AGUARDE...";

    setTimeout(() => {
        acender()
    })
}

