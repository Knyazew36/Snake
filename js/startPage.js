import Game from "./game.js";

const start = document.querySelector(".start");
const buttons = start.querySelectorAll(".btn");
const checkbox = start.querySelector("#checkbox");
const gameBlock = document.querySelector(".game");

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener("click", clickHandler);
}
let complexity = true;
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    complexity = false;
  } else {
    complexity = true;
  }
});

function clickHandler(e) {
  gameBlock.style.display = "flex";
  startGame(e.target.dataset.n, e.target.dataset.n);
}

function startGame(w, h) {
  start.remove();
  new Game(document.querySelector(".canvas_wrapper"), w, h, complexity);
}
