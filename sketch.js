var x;
x = 10

var diametro;
  diametro = 10;
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 102)
}

function draw() {
  var miColor = color(10+random(10));
  ellipse(mouseX, mouseY, diametro, diametro);
  strokeWeight(2);
  stroke(0, 255, 200);
  fill(255, 0, 255, 100)
  
  diametro = diametro + 1;
  //diametro = random(100)

}
function miFuncionBacan(){
  
}
function miElipse(){
  
}
function muchasElipses(cuantas) {
  for (var i = 0; i < 100; i++)
  elipse(random(width), random(height), 100, 100)
  
  
}