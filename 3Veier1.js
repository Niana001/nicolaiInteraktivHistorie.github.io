let lerret

let middleWayColor = "Black"
let leftWayColor = "Black"
let rightWayColor = "Black"

function setup() {
  lerret = createCanvas(1000, 500);
  lerret.mouseClicked(veiValgt)
}

function draw() {
  noStroke()
  
  background("Green");
  
  fill(middleWayColor)
  quad(400,0,650,0,650,400,400,400)
  
  fill(leftWayColor)
  quad(100,0,350,0,350,500,100,500)
  
  fill(rightWayColor)
  quad(700,0,950,0,950,500,700,500)
  
  fill("Brown")
  quad(400,400,650,400,1000,500,0,500)
  
  if (mouseX > 400 && mouseX < 650) {
    middleWayColor = "White"
  }
  else {
    middleWayColor = "Black"
  }
  
    if (mouseX > 700 && mouseX < 950) {
    rightWayColor = "White"
  }
  else {
    rightWayColor = "Black"
  }
  
    if (mouseX > 100 && mouseX < 350) {
    leftWayColor = "White"
  }
  else {
    leftWayColor = "Black"
  }
}

function veiValgt() {
  if (mouseX > 400 && mouseX < 650) {
    window.location.assign('2Veier1.html');
  }

  if (mouseX > 700 && mouseX < 950) {
    window.location.assign('1Vei3.html');
  }

  if (mouseX > 100 && mouseX < 350) {
    window.location.assign('1Vei1.html');
  }
}
