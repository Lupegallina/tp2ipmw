class Chica {
  constructor() {
    this.posX= 300;
    this.posY=175;
    this.pj;
  }
  dibujar() {
    /*image(this.pj)*/
    fill(200)
      rect(this.posX, this.posY, 30, 50);
  }
  teclaPres() {
    if (keyIsDown(UP_ARROW)) {
      this.posY= this.posY-90;
    } else if(keyIsDown(DOWN_ARROW)){
      this.posY= this.posY+90;
  }
  }
}
