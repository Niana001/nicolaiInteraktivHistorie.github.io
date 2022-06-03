let xSpiller = 50
let ySpiller = 350
let spillerFart = 20
let spillerFarge = document.cookie


let yVei1 = 0
let yVei2 = 0

let ySlange = 400

let xTast = Math.floor(Math.random() * 400)
let yTast = Math.floor(Math.random() * 500)

let forklaring = true

const taster = ["Q","E","T","U","O","A","D","G","J","L","X","V","N"]
let tilfeldigTast = Math.floor(Math.random() * taster.length);

function setup() {
  createCanvas(500, 650);
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
}

function draw() {
  background("Green");
  noStroke()
  
  //Bakgrunn
  fill("Brown")
  quad(150,0,350,0,350,650,150,650)
  quad(0,yVei1 + 0,150,yVei1 + 0,150,yVei1 + 100,0,yVei1 + 100)
  quad(350,yVei2 + 300,500,yVei2 + 300,500,yVei2 + 400,350,yVei2 + 400)
  
  yVei1 += 5
  yVei2 += 5
  
  if (yVei1 === 700) {
    yVei1 = -100
  }
  
  if (yVei2 === 700) {
    yVei2 = -500
  }

  //Spiller
  fill(spillerFarge)
  character()
  
  //Slange
  fill(0,50,0)
  quad(210,ySlange + 375,290,ySlange + 375,350,ySlange +    450,150,ySlange + 450)
  quad(150,ySlange + 450,350,ySlange + 450,325,ySlange +  550,175,ySlange + 550)
  quad(190,ySlange + 550,310,ySlange + 550,300,700,200,700)
  
  ySlange = ySlange - 0.5

  //Taster
  textSize(40)
  fill(255)
  text(taster[tilfeldigTast],xTast,yTast)

  textSize(15)
  text("Trykk på tasten av bokstaven som vises på skjermen for å gå opp",width/14,height/10)
  
  taster.forEach(input)

  if (ySpiller <= -125) {
    window.location.assign('1Vei4.html');
  }

  if (ySlange < ySpiller - 100) {
    window.location.assign('slange.html');
  }

  if (forklaring === true) {
    
  }
}

function input() {
    let inputTast = tilfeldigTast
    
    if (inputTast === 0) {
      if (keyIsDown(81)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 1) {
      if (keyIsDown(69)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 2) {
      if (keyIsDown(84)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 3) {
      if (keyIsDown(85)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 4) {
      if (keyIsDown(79)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 5) {
      if (keyIsDown(65)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 6) {
      if (keyIsDown(68)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 7) {
      if (keyIsDown(71)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 8) {
      if (keyIsDown(74)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 9) {
      if (keyIsDown(76)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 10) {
      if (keyIsDown(88)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 11) {
      if (keyIsDown(86)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
      if (inputTast === 12) {
      if (keyIsDown(78)) {
        ySpiller -= spillerFart
        
       tilfeldigTast = Math.floor(Math.random() * taster.length);
       xTast = Math.floor(Math.random() * 300)
       yTast = Math.floor(Math.random() * 500)
      }
    }
  }
