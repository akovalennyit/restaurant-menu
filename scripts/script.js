document.addEventListener("DOMContentLoaded", function () {

let remaining = 300; // 5 minutes

const promoEl = document.getElementById("promo");

function update() {

let minutes = Math.floor(remaining / 60);
let seconds = remaining % 60;

if (seconds < 10) {
seconds = "0" + seconds;
}

promoEl.textContent = minutes + ":" + seconds;

if (remaining <= 0) {
clearInterval(timer);
promoEl.textContent = "00:00";
}

remaining--;

}

update();
const timer = setInterval(update, 1000);

});