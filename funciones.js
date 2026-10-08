
function pantalla (PNum, PString, x1, y1, ancho1, alto1, siguiente1, IsDecision, x2, y2, ancho2, alto2, siguiente2) {
  if (IsDecision && mouseX >= x2 && mouseX <= x2+ancho2 && mouseY>= y2 && mouseY<= y2+ alto2) {
    image(PArray[PNum+2], 0, 0, 800, 450);
  } else if (mouseX >= x1 && mouseX <= x1+ancho1 && mouseY>= y1 && mouseY<= y1+ alto1) {
    image(PArray[PNum+1], 0, 0, 800, 450);
  } else {
    image(PArray[PNum], 0, 0, 800, 450);
  }
  if (PString != "") {
    fill(253, 121, 188, 140);
    stroke(251, 23, 155, 150);
    strokeWeight(10);
    rect(125, 280, 550, 110, 15);
    stroke(255);
    strokeWeight(4);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    textFont(Fuente);
    text(PString, 135, 285, 530, 100);
  }
      interaccion(x1, y1, ancho1, alto1, siguiente1, IsDecision, x2, y2, ancho2, alto2, siguiente2);
}


function interaccion(x1, y1, ancho1, alto1, siguiente1, IsDecision, x2, y2, ancho2, alto2, siguiente2) {

  fill(255, 0, 0, 100);
  noStroke();
  rect(x1, y1, ancho1, alto1);
  rect(x2, y2, ancho2, alto2);

  if (mouseIsPressed && mouseX >= x1 && mouseX <= x1+ancho1 && mouseY>= y1 && mouseY<= y1+ alto1) {
    pantallaSiguiente=siguiente1;
    IsTransicionando=true;
  }
  if (IsDecision) {
    if (mouseIsPressed && mouseX >= x2 && mouseX <= x2+ancho2 && mouseY>= y2 && mouseY<= y2+ alto2) {
      pantallaSiguiente=siguiente2;
      IsTransicionando=true;
    }
  }
}

function transicionPantalla() {
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
