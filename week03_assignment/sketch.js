

var r, g, b;

function setup() {
  createCanvas(1080, 720);
    
  r = random(250);
  g = random(250);
  b = random(250);
}

function draw() {
  background(r, g, b);

//left
  strokeWeight(6);
  stroke(155, g, 255);
  fill(r, g, 255, 250);
  ellipse(405.866, 360, 150, 150);
    
  strokeWeight(1);
  stroke(r, g, 255);
  fill(r, 200, 200, 100);
  ellipse(405.866, 360, 84.804, 84.804);
    
//  right  
  strokeWeight(6);
  stroke(155, g, 255);
  fill(r, g, 255, 250);
  ellipse(674.353, 360, 150, 150);
    
  strokeWeight(1);
  stroke(r, g, 255);
  fill(r, 200, 200, 100);
  ellipse(674.353, 360, 84.804, 84.804);
    

 
}


function mousePressed() {

  var d = dist(mouseX, mouseY, 540, 360);
  if (d < 220) {
  
    r = random(255);
    
  }
    

    
    

}