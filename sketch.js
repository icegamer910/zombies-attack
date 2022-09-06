var galpao
var sobrevivente
var sobreviventeimg



function preload(){
galpao = loadImage("./assets/bg.jpeg");  
sobreviventeimg = loadImage("./assets/shooter_2.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
sobrevivente = createSprite(width/2,600);
sobrevivente.addImage(sobreviventeimg);
sobrevivente.scale = 0.8
}

function draw() {
background(galpao);
if(keyDown("w")){
sobrevivente.y-=10;
}
if(keyDown("s")){
sobrevivente.y+=10;
}
if(keyDown("d")){
sobrevivente.x+=10;
}
 if(keyDown("a")){
 sobrevivente.x-=10;
}

drawSprites()
}