let timer = 0

let fade1 = 1
let fade2 = 1
let fade3 = 1

let spillerFarge = document.cookie

function setup() {
    createCanvas(1000, 500);
  }
  
  function draw() {
    background(0);

    textSize(30)
    fill(255,255,255,fade1)
    text("Du våkner opp og gjør deg klar til å dra på jobb.",width/5,height/5)
    fill(255,255,255,fade2)
    text("Du tar på favoritt klærne dine.",width/3.4,height/2.3)
    fill(255,255,255,fade3)
    text("Du går ut av huset ditt.",width/3,height/1.5)

    timer = timer + 0.1

    if (timer > 1) {
        fade1 = fade1 + 1

        if (fade1 > 255) {
            fade1 = 255
        }
    }

    if (timer > 25) {
        fade2 = fade2 + 1

        if (fade2 > 255) {
            fade2 = 255
        }
    }

    if (timer > 50) {
        fade3 = fade3 + 1

        if (fade3 > 255) {
            fade3 = 255
        }
    }

    if (timer > 80) {
        fade1 = fade1 - 10
        fade2 = fade2 - 10
        fade3 = fade3 - 10

        if (fade1 < 0) {
            fade1 = 0
        }

        if (fade2 < 0) {
            fade2 = 0
        }

        if (fade3 < 0) {
            fade3 = 0
        }
    }

    if (timer > 90) {
        window.location.assign('hjem1.html');
    }
  }