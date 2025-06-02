/* my loader */
const loader = document.querySelector(".container");
let duration = 2000;
const interval = setInterval(() => {
  if (duration < 2000) {
    duration++;
  } else {
    clearInterval(interval);
    window.location.href = "main.html";
  }
}, (intervalTime = duration));


