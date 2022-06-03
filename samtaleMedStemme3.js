let timer = 2

let fade1 = 0
let fade2 = 0

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(0);
  
  fill(255,0,0,fade1)
  textSize(30)
  text("Gratulerer, du har klart å drepe slangen.",width/4,height/5)
  
    fill(255,0,0,fade2)
    text("Jeg ser at du fant nøkkelen, skal du bruke den?",width/5,height/5)

     timer = timer + 0.01

  if (timer > 2) {
      fade1 = fade1 + 1
      if (fade1 > 255) {
          fade1 = 255
      }
  }

  if (timer > 10) {
      fade1 = fade1 - 2
  }

  if (timer > 15) {
      fade2 = fade2 + 1
      if (fade2 > 255) {
          fade2 = 255
      }
  }

  if (timer > 20) {
      fade2 = fade2 - 2
  }

  if (timer > 23) {
      window.location.assign('slutt3.html');
    }
}


