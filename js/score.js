export default class Score {
  constructor(scoreBlock, recordBlock, score = 0) {
    this.scoreBlock = document.querySelector(scoreBlock);
    this.recordBlock = document.querySelector(recordBlock);

    this.score = score;
    this.recScore = localStorage.getItem("myRecord");

    this.draw();
  }
  recordScore() {
    if (this.score > localStorage.getItem("myRecord")) {
      this.recScore = this.score;
      localStorage.setItem("myRecord", this.recScore);
    }
  }
  incScore() {
    this.score++;    
    this.draw();
    
  }
  setToZero() {
    this.score = 0;
    this.draw();
  }
  draw() {
    this.scoreBlock.innerHTML = this.score;
    this.recordBlock.innerHTML = this.recScore;
  }
}
