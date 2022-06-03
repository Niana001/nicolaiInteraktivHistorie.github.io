let lerret

let middleWayColor = "White"

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function draw() {
  background("Green");
  
  fill (middleWayColor)
  quad(400,0,650,0,650,400,400,400)
  
  fill("Brown")
  quad(400,400,650,400,1000,500,0,500)
}

function veiValgt() {
    if (mouseX > 400 && mouseX < 650) {
      window.location.assign('samtaleMedStemme3.html');
    }
  }