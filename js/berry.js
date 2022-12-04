import Config from "./config.js";
import { getRandom } from "./supportFunction.js";

export default class Berry {
  constructor(canvas) {
    this.x = 0;
    this.y = 0;
    this.config = new Config();

    this.canvas = canvas;
    this.randomPosition();
  }
  draw(context) {
    context.beginPath();
    context.fillStyle = "red";
    context.arc(
      this.x + this.config.sizeCell / 2,
      this.y + this.config.sizeCell / 2,
      this.config.sizeBerry,
      0,
      2 * Math.PI
    );
    context.fill();
  }
  randomPosition() {
    this.x =
      getRandom(0, this.canvas.element.width / this.config.sizeCell) *
      this.config.sizeCell;

    this.y =
      getRandom(0, this.canvas.element.height / this.config.sizeCell) *
      this.config.sizeCell;
  }
}
