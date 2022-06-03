function setup() {
    createCanvas(1000, 500);
  }
  
  function draw() {
    background(0);
    fill(255)
    textSize(30)
    text("Trykk for å starte",width/2.5,height/2)
    
    if (mouseIsPressed === true) {
        window.location.assign('sporsmaal1.html');
    }
  }