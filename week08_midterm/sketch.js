//var imgg = {
//    
//    loc: 0,
//    size: 400,
//    x: 200,
//    y: 100,
//    left: 0,
//    right: 0,
//    top: 0,
//    bottom: 0
//    
//};

var bg = {
    
    loc: 0,
    x: 243,
    y: 180,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    size: 200
    
};

var bg2 = {
    
    loc: 0,
    x: 503,
    y: 180,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    size: 200
    
};

var bg3 = {
    
    loc: 0,
    x: 759,
    y: 180,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    size: 200
    
};

var bg4 = {
    
    loc: 0,
    x: 243,
    y: 420,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    size: 200
    
};

var bg5 = {
    
    loc: 0,
    x: 503,
    y: 420,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    size: 200
    
};

var bg6 = {
    
    loc: 0,
    x: 759,
    y: 420,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    size: 200
    
};

var sound1;
var display1;

var display2;

var display3;

var display4;

var display5;

var display6;

function preload(){
//    imgg.loc = loadImage("sphynx_sq2.jpg");
//    meow = loadSound("johnnyMeowMeow.mp3");

    bg.loc = loadImage("bg.png");
    
    sound1 = loadSound("punch.mp3");
    sound5 = loadSound("sfx_wpn_cannon4.wav");
    sound2 = loadSound("Siren-SoundBible.com-1094437108.mp3");
    sound4 = loadSound("shotgun-reload-old_school-RA_The_Sun_God-580332022.mp3");
    sound3 = loadSound("bop3.mp3");
    sound6 = loadSound("sfx_coin_double1.wav");

    display1 = loadImage("01.png");
    display2 = loadImage("02.png");
    display3 = loadImage("03.png");
    display4 = loadImage("04.png");
    display5 = loadImage("05.png");
    display6 = loadImage("06.png");
}

function setup(){
    createCanvas(1200, 800);
    
    

}

function draw(){
    
    imageMode(CENTER);
    image(bg.loc, width/2, height/2);
//   01 
    bg.top = bg.y;
    bg.left = bg.x;
    bg.right = bg.x + bg.size;
    bg.bottom = bg.y + bg.size;
    
    
    if (mouseX > bg.left && mouseX < bg.right && mouseY > bg.top && mouseY < bg.bottom){
        
        image(display1, width/2, height/2);
        
    }

//   02
    bg2.top = bg2.y;
    bg2.left = bg2.x;
    bg2.right = bg2.x + bg2.size;
    bg2.bottom = bg2.y + bg2.size;
    
    
    if (mouseX > bg2.left && mouseX < bg2.right && mouseY > bg2.top && mouseY < bg2.bottom){
        
        image(display2, width/2, height/2);
        
    }
    
//   03
    bg3.top = bg3.y;
    bg3.left = bg3.x;
    bg3.right = bg3.x + bg3.size;
    bg3.bottom = bg3.y + bg3.size;
    
    
    if (mouseX > bg3.left && mouseX < bg3.right && mouseY > bg3.top && mouseY < bg3.bottom){
        
        image(display3, width/2, height/2);
        
    }
    
//   04
    bg4.top = bg4.y;
    bg4.left = bg4.x;
    bg4.right = bg4.x + bg4.size;
    bg4.bottom = bg4.y + bg4.size;
    
    
    if (mouseX > bg4.left && mouseX < bg4.right && mouseY > bg4.top && mouseY < bg4.bottom){
        
        image(display4, width/2, height/2);
        
    }
    
//   05
    bg5.top = bg5.y;
    bg5.left = bg5.x;
    bg5.right = bg5.x + bg5.size;
    bg5.bottom = bg5.y + bg5.size;
    
    
    if (mouseX > bg5.left && mouseX < bg5.right && mouseY > bg5.top && mouseY < bg5.bottom){
        
        image(display5, width/2, height/2);
        
    }
    
//   06
    bg6.top = bg6.y;
    bg6.left = bg6.x;
    bg6.right = bg6.x + bg6.size;
    bg6.bottom = bg6.y + bg6.size;
    
    
    if (mouseX > bg6.left && mouseX < bg6.right && mouseY > bg6.top && mouseY < bg6.bottom){
        
        image(display6, width/2, height/2);
        
    }
    
}

function mousePressed(){
    
    if (mouseX > bg.left && mouseX < bg.right && mouseY > bg.top && mouseY < bg.bottom){
    
        sound1.play();
        
            image(display1, width/2, height/2);
        
    }

    if (mouseX > bg2.left && mouseX < bg2.right && mouseY > bg2.top && mouseY < bg2.bottom){
    
        sound2.play();

        
    }
    
    if (mouseX > bg3.left && mouseX < bg3.right && mouseY > bg3.top && mouseY < bg3.bottom){
    
        sound3.play();
        

        
    }
    
    if (mouseX > bg4.left && mouseX < bg4.right && mouseY > bg4.top && mouseY < bg4.bottom){
    
        sound4.play();
        
        
    }
    
    if (mouseX > bg5.left && mouseX < bg5.right && mouseY > bg5.top && mouseY < bg5.bottom){
    
        sound5.play();
        
        
    }
    
    if (mouseX > bg6.left && mouseX < bg6.right && mouseY > bg6.top && mouseY < bg6.bottom){
    
        sound6.play();
        
        
    }
    
}