export default class Canvas {
  constructor(container, a) {
    this.element = document.createElement("canvas");
    this.context = this.element.getContext("2d");
    this.element.width = a;
    this.element.height = 300;
    container.appendChild(this.element);
  }
}
