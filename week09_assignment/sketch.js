var hand;
var ball;

var counter = 0;
var speed = 7;

function preload (){
    
    hand = loadImage("hand.png");
    ball = loadImage("ball01.png");
    
}

function setup (){
    
    createCanvas(1200, 800);

    imageMode(CENTER);
    
}

function draw (){
    
    background (255, 222, 122);
    
    image(hand, width/2, 650);
    
    push();
    
    translate (663, 263);
    rotate(radians(counter));
    
    image(ball, 0, 0);
    
    pop();
    
    counter -= speed;
    
}