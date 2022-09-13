var galpao;
var sobrevivente;
var sobreviventeimg;
var sobreviventeemperigo;
var fire;
var fireimg;

function preload(){
galpao = loadImage("./assets/bg.jpeg");  
sobreviventeimg = loadImage("./assets/shooter_2.png");
sobreviventeemperigo = loadImage("./assets/shooter_3.png");
fireimg = loadImage("./assets/fire.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
sobrevivente = createSprite(width/2,600);
sobrevivente.addImage("restante",sobreviventeimg);
sobrevivente.addImage("altodefesa",sobreviventeemperigo)
sobrevivente.scale = 0.8;
fire = createSprite(width-100,170);
fire.addImage(fireimg);
fire.scale = 0.09
};

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
if(mousePressedOver(fire)){
sobrevivente.changeImage("altodefesa")
sobrevivente.scale = 1
}
else{
sobrevivente.changeImage("restante")
sobrevivente.scale = 0.8
}


drawSprites()
}