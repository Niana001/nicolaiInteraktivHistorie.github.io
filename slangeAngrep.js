let lerret

let middleWayColor = "Black"

let xSnake = -75
let ySnake = 10

let timer = 0

let fade = 255

let xNøkkel = -100
let yNøkkel = 125

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function slange() {
  //fjes
fill(0,50,0)
quad(xSnake + 400,ySnake + 200,xSnake + 800,ySnake + 200,xSnake + 650,ySnake + 400,xSnake + 550,ySnake + 400)
quad(xSnake + 400,ySnake + 150,xSnake + 800,ySnake + 150,xSnake + 800,ySnake + 200,xSnake + 400,ySnake + 200)
quad(xSnake + 700,ySnake + 50,xSnake + 500,ySnake + 50,xSnake + 400,ySnake + 150,xSnake + 800,ySnake + 150)

//munn
fill(175,0,0)
quad(xSnake + 450,ySnake + 220,xSnake + 750,ySnake + 220,xSnake + 725,ySnake + 250,xSnake + 475,ySnake + 250)
quad(xSnake + 475,ySnake + 250,xSnake + 725,ySnake + 250,xSnake + 650,ySnake + 375,xSnake + 550,ySnake + 375)
fill(0)
quad(xSnake + 475,ySnake + 220,xSnake + 725,ySnake + 220,xSnake + 710,ySnake + 250,xSnake + 490,ySnake + 250)
quad(xSnake + 490,ySnake + 250,xSnake + 710,ySnake + 250,xSnake + 650,ySnake + 360,xSnake + 550,ySnake + 360)

//tenner
fill(255)
triangle(xSnake + 525,ySnake + 220,xSnake + 575,ySnake + 220,xSnake + 550,ySnake + 350)
triangle(xSnake + 625,ySnake + 220,xSnake + 675,ySnake + 220,xSnake + 650,ySnake + 350)

//over munn
fill(0,50,0)
quad(xSnake + 450,ySnake + 220,xSnake + 750,ySnake + 220,xSnake + 650,ySnake + 250,xSnake + 550,ySnake + 250)

//nese
fill(0)
circle(xSnake + 585,ySnake + 220,10)
circle(xSnake + 610,ySnake + 220,10)

//øye
fill("Red")
ellipse(xSnake + 525,ySnake + 175,25,50)
fill(0,40,0)
ellipse(xSnake + 675,ySnake + 175,25,50)
}

function nøkkel() {
  fill(0)
  quad(xNøkkel + 390,yNøkkel + 250,xNøkkel + 460,yNøkkel + 250,xNøkkel + 450,yNøkkel + 300,xNøkkel + 400,yNøkkel + 300)
  
  fill(100)
  quad(xNøkkel + 420,yNøkkel + 300,xNøkkel + 430,yNøkkel + 300,xNøkkel + 430,yNøkkel + 350,xNøkkel + 420,yNøkkel + 350)
}

function draw() {
  background("Green")
  noStroke()
  
  fill (middleWayColor);
  quad(400,0,650,0,650,400,400,400);
  
  fill("Brown");
  quad(400,400,650,400,1000,500,0,500);

  slange();

  nøkkel()

  fill(255,255,255,fade)
  textSize(55)
  text("Fort! Trykk på øyet for å skade slangen",width/50,width/10)

  timer = timer + 0.2

  if (timer > 15) {
    window.location.assign('slange.html');
  }
}

function veiValgt() {
  if (mouseX > 425 && mouseX < 475 && mouseY > 155 && mouseY < 210) {
    window.location.assign('sluttPaaLabyrint2.html');
  }
}