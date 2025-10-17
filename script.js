const body = document.body;
const modeSwitch = document.querySelector(".mode-switch");
const modeIcon = document.querySelector("#mode-icon");

modeSwitch.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-mode");
  modeIcon.textContent = isLight ? "🌞" : "🌙";
});
