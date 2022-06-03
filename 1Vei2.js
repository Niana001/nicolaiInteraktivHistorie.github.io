let lerret
let opacityJa = 0
let opacityNei = 0

let middleWayColor = "Black"

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function draw() {
  background("Green");
  noStroke()
  
  fill (middleWayColor)
  quad(400,0,650,0,650,400,400,400)
  
  fill("Brown")
  quad(400,400,650,400,1000,500,0,500)

  fill("Red")
  textSize(32)
  text("Du hører noe bak deg, snur du deg?",width / 4, height / 5)
  text("Ja",250,250)
  text("Nei",725,250)

  fill(255,0,0,opacityJa)
  quad(0,0,500,0,500,500,0,500)
  fill(255,0,0,opacityNei)
  quad(500,0,1000,0,1000,500,500,500)

  svarValgt()
}

function svarValgt() {
  if (mouseX < 500) {
    opacityJa = 125
  }
  else {
    opacityJa = 0
  }

  if (mouseX > 500) {
    opacityNei = 125
  }
  else {
    opacityNei = 0
  }
}

function veiValgt() {
   if (mouseX > 0 && mouseX < 500) {
      window.location.assign('slange.html');
    }
    if (mouseX > 500 && mouseX < 1000) {
      window.location.assign('slangeRun.html');
    }
  }