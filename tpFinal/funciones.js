function boton (IsDecision, IsFinal, IsInicio, Siguiente1, Siguiente2) {
  fill(255, 190, 245);
  stroke(230, 98, 210);
  strokeWeight(5);
  if (IsInicio) {
    rect(340, 380, 120, 50, 10);
    noStroke();
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    text("Comenzar", 400, 407);
    if (mouseIsPressed && mouseX >= 340 && mouseX <= 460 && mouseY >= 380 && mouseY <= 430) {
      IsTransicionando = true;
    }
  } else {
    if (!IsFinal) {
      if (!IsDecision) {
        rect(340, 380, 120, 50, 10);
        noStroke();
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(20);
        text("Continuar", 400, 407);
      } else if (IsDecision) {
        rect(60, 380, 280, 50, 10);
        rect(460, 380, 280, 50, 10);
        noStroke();
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(20);
        text("OPCION UNO", 200, 407);
        text("OPCION DOS", 600, 407);
      }
    } else {
      rect(310, 380, 180, 50, 10);
      noStroke();
      textAlign(CENTER, CENTER);
      fill(0);
      textSize(20);
      text("Volver a empezar", 400, 407);
    }
  }
}

function pantalla (PNum, PString, IsDecision, Siguiente1, Siguiente2, IsFinal, IsInicio) {
  image(PArray[PNum], 0, 0, 800, 450);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text(PString, 400, 300);
  boton(IsDecision, IsFinal, IsInicio, Siguiente1, Siguiente2);
}


function interaccion(x,y,ancho,alto,siguiente){

  fill(255, 0, 0, 100);
  noStroke();
  rect(x, y, ancho, alto);
  
if(mouseIsPressed && mouseX >= x && mouseX <= x+ancho && mouseY>= y && mouseY<= y+ alto){
pantallaSiguiente=siguiente;
IsTransicionando=true;
}

}

function transicionPantalla(){
  if (IsTransicionando) {
    if (fadeSubiendo) {
      fade += 5;

      if (fade >= 255) {
        fade = 255;
        pantallaActual = pantallaSiguiente
          fadeSubiendo = false;
      }
    } else {
      fade -= 5;

      if (fade <= 0) {
        fade = 0;
        IsTransicionando = false;
        fadeSubiendo = true;
      }
    }
  }
  noStroke();
  fill(0, fade);
  rect(0, 0, 800, 450);
  }
  
