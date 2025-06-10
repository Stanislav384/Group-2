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
});
