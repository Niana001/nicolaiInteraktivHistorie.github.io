
//Variabler til spilleren
let xSpiller = -50
let ySpiller = 0
let playerSpeed = 5
let playerController = true
let spillerFarge = document.cookie

//Variabler til bil
let xBil = 575
let yBil = -400

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
  background(0,60,0);
  noStroke();

  fill("black");
  rect(650,0,500);

  fill("Yellow");
  rect(50,50,200);

  fill("Brown");
  triangle(50,50,250,50,150,25);

  fill("Grey");
  rect(100,250,100);
  quad(0,300,0,400,650,400,650,300);

  fill("Brown");
  quad(120,125,180,125,180,250,120,250);

  fill("White");
  quad(680,0,700,0,700,500,680,500);
  quad(950,0,970,0,970,500,950,500);

  bil()

  fill(spillerFarge);
  character(); 
  
  bil()


  if (xSpiller > 425) {
    playerController = false
    if (xSpiller < 620) {
      xSpiller = xSpiller + 1
    }
    if (xSpiller === 620) {
      yBil = yBil + 10
    }
    if (yBil > 75 - ySpiller) {
      createCanvas(1000, 500);
      background(0)
      window.location.assign('SamtaleMedStemme1.html');
    }
  }

  if (xSpiller === 500) {
    xSpiller = xSpiller
  }

  if (ySpiller < 0) {
    ySpiller = 0
  }

  if (xSpiller < -165) {
    xSpiller = -165
  }

  if (ySpiller > 200) {
    ySpiller = 200
  }
}