let lerret

let timer = 0

let fade1 = 1
let fade2 = 1
let fade3 = 1
let fade4 = 1

let fadeJa = 1
let fadeNei = 1

let fargeJa = 255
let fargeNei = 255

let valg = false

function setup() {
    lerret = createCanvas(1000, 500);
    lerret.mouseClicked(svarValgt)
  }
  
  function draw() {
    background(0);

    textSize(30)
    fill(255,0,0,fade1)
    text("Hallo? Kan du høre meg?",width/3,height/5)
    fill(255,0,0,fade2)
    text("Jeg har gode nyheter til deg. Vil du leve igjen?",width/5,height/2.3)
    fill(255,0,0,fade3)
    text("Alt du må gjøre er å komme deg ut av en labyrint uten å bli tatt.",width/10,height/1.5)
    fill(255,0,0,fade4)
    textSize(64)
    text("Hva sier du? Tar du sjansen.",width/9,height/5)

    textSize(30)
    fill(fargeJa,fargeJa,fargeJa,fadeJa)
    text("Ja",width/4,height/1.5)
    fill(fargeNei,fargeNei,fargeNei,fadeNei)
    text("Nei",width/1.4,height/1.5)

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
        fade4 = fade4 + 1

        if (fade4 > 255) {
            fade4 = 255
        }
    }

    if (timer > 100) {
        fadeJa = fadeJa + 1
        fadeNei = fadeNei + 1
        valg = true
    }

    if (valg === true) {
        if (mouseX < 500) {
            fargeJa = 125
        }
        else {
            fargeJa = 255
        }
        if (mouseX > 500) {
            fargeNei = 125
        }
        else {
            fargeNei = 255
        }
    }
  }

  function svarValgt() {
      if (valg === true) {
        if (mouseX < 500) {
            window.location.assign('3Veier1.html');
        }
        if (mouseX > 500) {
            window.location.assign('slutt1.html');
        }
      }
  }