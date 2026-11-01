let juego;

function setup() {
createCanvas(800, 400);
juego= new Juego();
juego.iniciarJuego();
}

function draw() {
juego.dibujar();
}

function keyPressed(){
juego.teclaPres();
}
