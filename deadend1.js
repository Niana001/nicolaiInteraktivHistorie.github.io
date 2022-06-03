let lerret

let middleWayColor = "Black"

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function draw() {
  background("Green");
  
  fill("Brown")
  quad(400,400,650,400,1000,500,0,500)

  fill("White")
  textSize(30)
  text("Du har nådd en blindvei, trykk for gå tilbake",width/4.5,height/2)
  
  if (mouseX > 400 && mouseX < 650) {
    middleWayColor = "White"
  }
  else {
    middleWayColor = "Black"
  }
}

function veiValgt() {
    if (mouseX > 400 && mouseX < 650) {
      window.location.assign('slange.html');
    }
  }