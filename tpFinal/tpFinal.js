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
    pantalla(0, "", false, 1, 0, false, true);
  }

  transicionPantalla();

  if (pantallaActual == 1) {
    pantalla(1, "Tu madre te deja en el colegio. En la entrada ves a una chica muy parecida a vos pero de mayor edad", false, 2, 0, false, false);
    interaccion(515, 110, 130, 320, 2);
  }

  transicionPantalla();

  if (pantallaActual == 2) {
    pantalla(2, "La chica te mira fijo. Se acerca a vos y te cuenta que ella es tu hermana perdida. Te muestra una foto familiar y te dice de quedar nuevamente para contarte más, ya que estás apurada.", true, 2, 0, false, false);
    interaccion(600, 110, 330, 290, 1);
    interaccion(0, 110, 230, 290, 3);
  }
  transicionPantalla();

  if (pantallaActual == 3) {
    pantalla(3, "Cuando llegas, revisas la habitación. En ésta se encuentra una planta falsa. Conocés a tu mamá y sabés que no le gustan las plantas, siempre se le secan. Detrás de esta encontrás un artefacto junto a unas notas.", false, 2, 0, false, false);
    interaccion(115, 110, 530, 290, 4);
  }
  transicionPantalla();

  if (pantallaActual == 4) {
    pantalla(4, "Escuchas los pasos de Jake, el alumno de tu mamá acercarse a la habitación", true, 2, 0, false, false);
    interaccion(0, 110, 330, 290, 5);
  }
  transicionPantalla();
  
    if (pantallaActual == 5) {
    pantalla(5, "Presionas el botón rojo del artefacto para escapar", true, 2, 0, false, false);
    interaccion(400, 150, 130, 190, 6);
  }
  transicionPantalla();
  
   if (pantallaActual == 6) {
    pantalla(6, "Viajas a un universo de completo vacío donde te quedas hasta morir", false, 2, 0, true, false);
    
  }
  transicionPantalla();








  fill(255);
  textSize(16);
  text(mouseX + ", " + mouseY, mouseX + 10, mouseY);
}
