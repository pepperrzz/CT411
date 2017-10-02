var puppy1;
var puppy2;
var bone;

var circDiameter = 420;
var circRadius = circDiameter/2;
var d;

var type;

function preload(){
    
    puppy1 = loadImage("sadpuppy.jpg");
    
    puppy2 = loadImage("happypuppy.jpg");
    
    bone = loadImage("bone.png");
    
    type = loadFont("Limerick-Serial-Heavy-Regular.ttf");
    
}


function setup(){
    
    createCanvas (1200, 800);
    
    textFont(type);

    textSize(35);
    
}

function draw(){
    
    background (246, 255, 213);
    
    d = dist(width/2, height/2, mouseX, mouseY);
    if(d<circRadius){
        
        imageMode(CENTER);
        image(puppy2, width/2, height/2);
        
    }else{
       
        imageMode(CENTER);
        image(puppy1, width/2, height/2);
        
    }

//    bone
        imageMode(CENTER);
        image(bone, mouseX, mouseY);
    
    text("WHO'S A GOOD BOY?", 408, 120)
}