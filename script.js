document.addEventListener("DOMContentLoaded", function () {
  const forecastButton = document.querySelector(".button");
  if (forecastButton) {
    forecastButton.addEventListener("click", function () {
      window.location.href = "index2.html";
    });
  }

  const showLessButton = document.querySelector(".button2");
  if (showLessButton) {
    showLessButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  const settingsButton = document.querySelector(".settings-button");
  if (settingsButton) {
    settingsButton.addEventListener("click", function () {
      window.location.href = "settings.html";
    });
  }

  const forecastButton3 = document.querySelector(".button3");
  if (forecastButton3) {
    forecastButton3.addEventListener("click", function () {
      window.location.href = "index2 copy.html";
    });
  }

  const forecastButton4 = document.querySelector(".button4");
  if (forecastButton4) {
    forecastButton4.addEventListener("click", function () {
      window.location.href = "index-night.html";
    });
  }

  const settingsButton2 = document.querySelector(".settings-button2");
  if (settingsButton2) {
    settingsButton2.addEventListener("click", function () {
      window.location.href = "setting-night.html";
    });
  }
});