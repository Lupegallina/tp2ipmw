let PArray = [];
let pantallaActual = 0;
let pantallaSiguiente = 1;
let fade = 0;
let IsTransicionando = false;
let fadeSubiendo;


function preload() {
  for (let i = 0; i < 7; i++) {
    PArray[i] = loadImage("images/Pantalla_" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(255);



  if (pantallaActual == 0) {
    pantalla(0, "", 340, 334, 123, 28, 1, false);
  }
  if (pantallaActual == 1) {
    pantalla(2, "Tu madre te deja en el colegio. En la entrada ves a una chica muy parecida a vos pero de mayor edad", 520, 106, 133, 319, 2, false);

  }
  if (pantallaActual == 2) {
    pantalla(4, "La chica te mira fijo. Se acerca a vos y te cuenta que ella es tu hermana perdida. Te muestra una foto familiar y te dice de quedar nuevamente para contarte más, ya que estás apurada.", true, 2, 0, false, false);
  }
  transicionPantalla();
 







  fill(255);
  textSize(16);
  text(mouseX + ", " + mouseY, mouseX + 10, mouseY);
}
