
//Variabler til spilleren
let xSpiller = 0
let ySpiller = 80
let playerSpeed = 5
let playerController = true
let spillerFarge = document.cookie

//Variabler til bil
let xBil = 575
let yBil = 0

let fade = 1

function setup() {
  createCanvas(1000, 500);
}

function character() {
  //Karakter kropp
  //Bryst
  triangle(xSpiller + 180,ySpiller + 200,xSpiller + 225,ySpiller + 200,xSpiller + 202,ySpiller + 250);

  //Hode
  circle(xSpiller + 202,ySpiller + 175,40);

  //Høyre arm
  quad(xSpiller + 170,ySpiller + 200,xSpiller + 180,ySpiller + 200,xSpiller + 180,ySpiller + 250,xSpiller + 170,ySpiller + 250);

  //Venstre arm
  quad(xSpiller + 225,ySpiller + 200,xSpiller + 235,ySpiller + 200,xSpiller + 235,ySpiller + 250,xSpiller + 225,ySpiller + 250);

  //Høyre ben
  quad(xSpiller + 190,ySpiller + 250,xSpiller + 202,ySpiller + 250,xSpiller + 202,ySpiller + 300,xSpiller + 190,ySpiller + 300);
  
  //Venstre ben
  quad(xSpiller + 202,ySpiller + 250,xSpiller + 215,ySpiller + 250,xSpiller + 215,ySpiller + 300,xSpiller + 202,ySpiller + 300);
  
  if (playerController === true) {
    if (keyIsDown(87)) {
    ySpiller -= playerSpeed
  }
  
    if (keyIsDown(83)) {
    ySpiller += playerSpeed
  }
  
  if (keyIsDown(65)) {
    xSpiller -= playerSpeed
  }
  
  if (keyIsDown(68)) {
    xSpiller += playerSpeed
  }
  if (keyIsDown(UP_ARROW)) {
    ySpiller -= playerSpeed
  }
  
    if (keyIsDown(DOWN_ARROW)) {
    ySpiller += playerSpeed
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    xSpiller -= playerSpeed
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    xSpiller += playerSpeed
  }
}
}

function bil() {
  fill("Grey")
  quad(xBil + 295,yBil + 200,xBil + 205,yBil + 200,xBil + 200,yBil + 400,xBil + 300,yBil + 400);
  fill("Black")
  quad(xBil + 295,yBil + 250,xBil +  205,yBil + 250,xBil + 200,yBil + 350,xBil + 300,yBil + 350);
  fill("Blue")
  quad(xBil + 300,yBil + 350,xBil + 200,yBil + 350,xBil + 200,yBil + 375,xBil + 300,yBil + 375);
}

function draw() {
  background(0,0,0);
  noStroke();

  bil()

  fill(spillerFarge);
  character(); 
  
  bil()

  fill(255,255,255,fade)
  textSize(60)
  text("Slutt",width/2.3,height/2)


  if (xSpiller > 425) {
    playerController = false
    if (xSpiller < 620) {
      xSpiller = xSpiller + 1
    }
    if (xSpiller === 620) {
      yBil = yBil + 10
      spillerFarge = "black"
      fade = fade + 1
    }
  }

  if (xSpiller === 500) {
    xSpiller = xSpiller
  }

  if (ySpiller < 50) {
    ySpiller = 50
  }

  if (xSpiller < -170) {
    xSpiller = -170
  }

  if (ySpiller > 100) {
    ySpiller = 100
  }
}