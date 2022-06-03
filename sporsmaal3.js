let lerret

let farge1 = 255
let farge2 = 255
let farge3 = 255

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function draw() {
  background(0);
  
  textSize(30)
  fill(255)
  text("Hva er ditt favoritt måltid?",width/2.8,height/5)
  fill(farge1)
  text("Frokost",width/4,height/2)
  fill(farge2)
  text("Lunsj",width/2.1,height/2)
  fill(farge3)
  text("Middag",width/1.5,height/2)
  
  if (mouseX < 400) {
    farge1 = 125
  }
  else {
    farge1 = 255
  }
  
  if (mouseX > 400 && mouseX < 650) {
    farge2 = 125
  }
  else {
    farge2 = 255
  }
  
  if (mouseX > 650) {
    farge3 = 125
  }
  else {
    farge3 = 255
  }
}

function veiValgt() {
    if (mouseX < 400) {
      window.location.assign('introduksjon1.html');
    }
  
    if (mouseX > 400 && mouseX < 650) {
      window.location.assign('introduksjon1.html');
    }
  
    if (mouseX > 650) {
      window.location.assign('introduksjon1.html');
    }
  }