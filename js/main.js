import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Berry from "./berry.js";
import Score from "./score.js";
import Snake from "./snake.js";

export default class Game {
  constructor(container, userWidth, userHeight, complexity) {
    this.canvas = new Canvas(container, userWidth, userHeight);
    this.berry = new Berry(this.canvas);
    this.score = new Score(".score", ".recordScore", 0);
    this.snake = new Snake();
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
