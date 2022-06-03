let lerret

let fargeRød = 255
let fargeBlå = 255
let fargeGrønn = 255

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function draw() {
  background(0);
  
  textSize(30)
  fill(255)
  text("Hva er favorittfargen din ut av disse fargene?",width/5,height/5)
  fill(fargeRød)
  text("Rød",width/4,height/2)
  fill(fargeBlå)
  text("Blå",width/2,height/2)
  fill(fargeGrønn)
  text("Grønn",width/1.4,height/2)
  
  if (mouseX < 400) {
    fargeRød = "Red"
  }
  else {
    fargeRød = 255
  }
  
  if (mouseX > 400 && mouseX < 650) {
    fargeBlå = "Blue"
  }
  else {
    fargeBlå = 255
  }
  
  if (mouseX > 650) {
    fargeGrønn = "Green"
  }
  else {
    fargeGrønn = 255
  }
}

function veiValgt() {
    if (mouseX < 400) {
      window.location.assign('sporsmaal2.html');
      document.cookie = spillerFarge = "Red"
    }
  
    if (mouseX > 400 && mouseX < 650) {
      window.location.assign('sporsmaal2.html');
      document.cookie = spillerFarge = "Blue"
    }
  
    if (mouseX > 650) {
      window.location.assign('sporsmaal2.html');
      document.cookie = spillerFarge = "Green"
    } 
  }