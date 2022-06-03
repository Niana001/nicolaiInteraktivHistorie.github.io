let lerret

let middleWayColor = "Black"

let xNøkkel = 0
let yNøkkel = 0

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function nøkkel() {
  fill(0)
  quad(xNøkkel + 390,yNøkkel + 250,xNøkkel + 460,yNøkkel + 250,xNøkkel + 450,yNøkkel + 300,xNøkkel + 400,yNøkkel + 300)
  
  fill(100)
  quad(xNøkkel + 420,yNøkkel + 300,xNøkkel + 430,yNøkkel + 300,xNøkkel + 430,yNøkkel + 350,xNøkkel + 420,yNøkkel + 350)
}

function draw() {
  background("Green");
  
  fill("Brown")
  quad(400,400,650,400,1000,500,0,500)

  fill("Yellow")
  textSize(40)
  text("Du har funnet et nøkkel. Hvorfor er dette her?",width/9,height/3)

  nøkkel()

}

function veiValgt() {
    if (mouseX > 400 && mouseX < 650) {
      window.location.assign('slangeAngrep.html');
    }
  }