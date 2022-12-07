export default class Canvas {
  constructor(container, a, b) {
    // this.element = document.createElement("canvas");
    // this.context = this.element.getContext("2d");
    // this.element.width = a;
    // this.element.height = b;

    // container.appendChild(this.element);
    this.element = document.createElement("div");
    this.element.width = 10;
    this.element.height = 10;
  }
}
