import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Berry from "./berry.js";
import Score from "./score.js";
import Snake from "./snake.js";
import Config from "./config.js";


export default class Game {
  constructor(container, a) {
    this.canvas = new Canvas(container, a);
    this.berry = new Berry(this.canvas);
    this.score = new Score(".score", ".recordScore", 0);
    this.snake = new Snake();
    this.config = new Config();
    new GameLoop(this.update.bind(this), this.draw.bind(this));
  }
  update() {
    this.snake.update(this.berry, this.score, this.canvas, this.config);
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

const start = document.querySelector(".start");
const buttons = start.querySelectorAll(".btn");
const a = document.querySelector("#startInc");

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  if (e.target.dataset.n === "300") {
    start.remove();
    new Game(document.querySelector(".canvas_wrapper"), 300);
  } else if (e.target.dataset.n === "input") {
    start.remove();
    new Game(document.querySelector(".canvas_wrapper"), a.value);
  }
}
