import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Berry from "./berry.js";
import Score from "./score.js";
import Snake from "./snake.js";
import Config from "./config.js";

const start = document.querySelector(".start");
const buttons = start.querySelectorAll(".btn");
const checkbox = start.querySelector("#checkbox");

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
  if (e.target.dataset.n === "300") {
    startGame(300);
  } else if (e.target.dataset.n === "600") {
    startGame(600);
  }

  function startGame(n) {
    start.remove();
    new Game(document.querySelector(".canvas_wrapper"), n, n, complexity);
  }
}

export default class Game {
  constructor(container, userWidth, userHeight, complexity) {
    this.canvas = new Canvas(container, userWidth, userHeight);
    this.berry = new Berry(this.canvas);
    this.score = new Score(".score", ".recordScore", 0);
    this.snake = new Snake();
    this.config = new Config();
    this.complexity = complexity;
    new GameLoop(this.update.bind(this), this.draw.bind(this));
  }
  update() {
    this.snake.update(this.berry, this.score, this.canvas, this.complexity);
  }
  draw() {
    this.canvas.context.clearRect(
      0,
      0,
      this.canvas.element.width,
      this.canvas.element.height
    );
    this.berry.draw(this.canvas.context);
    this.snake.draw(this.canvas.context);
  }
}
