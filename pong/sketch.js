let xbolinha =300;
let ybolinha =200;
let diametro =20;
let raio =diametro /2;
let velocidadexbolinha =2;
let velocidadeybolinha =2;
let xraquete = 5;
let yraquete =150;
let xraqueteoponente=585;
let yraqueteoponente=150;
let raquetecomprimento =10;
let raquetealtura =90;
let hit = false;
let hit2 = false;
let meuspontos=0;
let pontosoponente=0;
 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xbolinha, ybolinha, diametro);
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  velocidadeyoponente=ybolinha - yraqueteoponente - raquetecomprimento/2 -50;
  yraqueteoponente += velocidadeyoponente;
  
  text(meuspontos,150,26)
  fill(255)
  text(pontosoponente, 450,26)
  
  
  rect(xraquete, yraquete, raquetecomprimento, raquetealtura);
  rect(xraqueteoponente, yraqueteoponente, raquetecomprimento, raquetealtura);
    
  hit = collideRectCircle(xraquete, yraquete, raquetecomprimento,raquetealtura, xbolinha, ybolinha,diametro);
  hit2 = collideRectCircle(xraqueteoponente, yraqueteoponente, raquetecomprimento,raquetealtura, xbolinha, ybolinha,diametro);
  if (xbolinha>590){
    meuspontos+=1;
  }
  if (xbolinha<10){
    pontosoponente+=1;
  }
  if (xbolinha + raio > width || 
     xbolinha -raio <0 )
    velocidadexbolinha *=-1
  
  if (ybolinha  + raio> height || 
     ybolinha - raio <0)
    velocidadeybolinha *=-1
  
  if (keyIsDown (UP_ARROW)) { 
    yraquete -=10};
  
  if (keyIsDown (DOWN_ARROW)) { 
    yraquete +=10};
  
  if (hit){velocidadexbolinha *=-1;
          }
if (hit2){velocidadexbolinha *=-1;
          }
  
}