let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");

function start(secund, light) {
  let timer = setInterval(function () {
    if (secund == 0) {
      clearInterval(timer);
      lights(light);
    }
    light.textContent = secund;
    secund--;
  }, 1000);
}

function lights(light) {
  setTimeout(function () {
    light.innerHTML = "";
    if (light == red) {
      start(3, yellow);
    } else if (light == yellow) {
      start(10, green);
    } else if (light == green) {
      start(10, red);
    }
  }, 1000);
}
start(10, red);
