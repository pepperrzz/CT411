var puppy1;
var puppy2;
var bone;

var ball;
var ballX = 175;
var ballY = 58;

var ballX2 = 1012;
var ballY2 = 750;

var rectX = 400;
var rectY = 220;
var rectSize = 420;
var rTop = rectY;
var rBottom = rectY + rectSize;
var rLeft = rectX;
var rRight = rectX + rectSize;


var type;

var speedX = 10;
var speedY = 10;
var speedY2 = -10;


function preload(){
    
    puppy1 = loadImage("sadpuppy.jpg");
    
    puppy2 = loadImage("happypuppy.jpg");
    
    bone = loadImage("bone.png");
    
    ball = loadImage("tennisball.png");
    
    type = loadFont("Limerick-Serial-Heavy-Regular.ttf");
    
}


function setup(){
    
    createCanvas (1200, 800);
    
    textFont(type);

    textSize(35);
    
}

function draw(){
    
    background (246, 255, 213);
    
//    rectangle hover
    if(mouseX > rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom ){
          imageMode(CENTER);
        image(puppy2, width/2, height/2);
    }else{
        imageMode(CENTER);
        image(puppy1, width/2, height/2);
    }
    

//    balls
    
    imageMode(CENTER);
    image(ball, ballX, ballY);
    ballY = ballY + speedY;
    
    if (ballY > windowHeight-222 || ballY-45 < 1) {
        
        speedY = speedY *-1;
        
    }
    
     imageMode(CENTER);
    image(ball, ballX2, ballY2);
    ballY2 = ballY2 + speedY2;
    
    if (ballY2 > windowHeight-222 || ballY2-48 < 1) {
        
        speedY2 = speedY2 *-1;
        
    }
    
    
    
    
//    bone
        imageMode(CENTER);
        image(bone, mouseX, mouseY);
    
    text("WHO'S A GOOD BOY?", 408, 120)
    
    
}