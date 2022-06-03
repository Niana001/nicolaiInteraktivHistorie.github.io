let timer = 0

let fade1 = 255
let fade2 = 0
let fade3 = 0
let fade4 = 0

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(187,159,12);
  noStroke()
  fill(166,102,11)
  circle(500,-2150,5000)
  fill(59,5,5)
  circle(500,-2200,5000)
  fill(255)
  circle(500,135,225)
  fill(125,0,0)
  circle(500,135,200)
  fill(0)
  circle(500,135,190)
  fill(40,2,2)
  quad(10,175,100,250,150,500,25,500)
  quad(100,210,150,240,150,500,75,500)
  quad(200,225,260,300,260,500,200,500)
  quad(190,330,300,290,275,500,190,500)
  quad(710,200,720,200,790,500,650,500)
  quad(850,225,900,240,1000,500,800,500)
  fill(59,5,5)
  quad(0,375,1000,375,1000,500,0,500)
  fill(125)
  quad(490,375,510,375,650,500,350,500)

  textSize(30)
  fill(255,0,0,fade2)
  text("Du har blitt straffet for dine handlinger i ditt tidligere liv",150,425)
  fill(255,0,0,fade3)
  text("Derfor, må du gå denne veien for all evighet.",200,425)

  fill(0,0,0,fade1)
  quad(0,0,1000,0,1000,500,0,500)

  fill(0,0,0,fade4)
  quad(0,0,1000,0,1000,500,0,500)

  timer = timer + 0.1

  if (timer > 20) {
    fade1 = fade1 - 0.5
    if (fade1 < 0) {
      fade1 = 0
    }
  }

  if (timer > 60) {
    fade2 = fade2 + 0.5

    if (fade2 > 255) {
      fade2 = 255
    }
  }

  if (timer > 100) {
    fade2 = 0
    fade3 = fade3 + 0.5
  }

  if (timer > 150) {
    fade3 = 0
    }

  if (timer > 200) {
    fade4 = fade4 + 1
  }

  if (timer > 225) {
    window.location.assign('index.html');
  }
}