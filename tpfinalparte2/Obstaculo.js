class Obstaculo {
  constructor(posX,posY) {
    this.posX=posX;
    this.posY=posY;
    this.vel=3;
    this.seRompe=false;
    this.estrella;
  }
  
  dibujar() {
    /*image(this.estrella)*/
    if(!this.seRompe){
   fill(0,100,0)
    rect(this.posX,this.posY,40,40);
    this.mover();
  }
    
  }
  mover() {
   this.posX=this.posX-this.vel;
  }
  
  roto(){
   this.seRompe = true;
  }
}
