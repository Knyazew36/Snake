import Config from "./config.js";
export default class GameLoop {
  constructor(update, draw) {
    this.update = update;
    this.draw = draw;
    this.config = new Config();
    this.animation = this.animation.bind(this);
    this.animation();
  }
  animation() {
    requestAnimationFrame(this.animation);
    if (++this.config.step < this.config.maxStep) {
      return;
    }
    this.config.step = 0;
    this.update();
    this.draw();
  }
}
