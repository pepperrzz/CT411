var balls = [];

var paddle;

//var speed = 5; 

var type;

var score = 0;
    var r, g, b;

var state = 0;
    

var reloadB;
var reload;
    var relRectX = 360;
    var relRectY = 683;
    var relRectSize = 40;
    var relRtop = relRectY;
    var relRbottom = relRectY + relRectSize;
    var relRleft = relRectX;
    var relRright = relRectX + relRectSize;


var addW;
var add;
    var addRectX = 172;
    var addRectY = 675;
    var addRectSize = 160;
    var addRtop = addRectY;
    var addRbottom = addRectY + addRectSize;
    var addRleft = addRectX;
    var addRright = addRectX + addRectSize;

//      if(mouseX > addRleft && mouseX < addRright && mouseY > addRtop && mouseY < addRbottom )
        

function preload (){
    
    add = loadImage("addballs.png");
    
    addW = loadImage("addballsW.png");
    
    reload = loadImage("reload1x.png");
    
    reloadB = loadImage("reloadB.png");
    
    type = loadFont("Limerick-Serial-Heavy-Regular.ttf");
    
}


function setup (){
    
    createCanvas(1200, 750);
    
    textFont(type);
    textSize(38);
    

    
    paddle = new Paddle();
    
//    imageMode(CENTER);
    
//    for (var i = 0; i < 1; i++){
//        
//        balls[i] = new Ball (paddle);
//    }

    
}

function draw (){
    
    background (0);
    
    image(addW, addRectX, addRectY);
    
//    add hover
    if(mouseX > addRleft && mouseX < addRright && mouseY > addRtop && mouseY < addRbottom){
    
        image(add, addRectX, addRectY);
    
    }
    
    image(reload, relRectX, relRectY);
    
//    reload hover
    if (mouseX > relRleft && mouseX < relRright && mouseY > relRtop && mouseY < relRbottom){
            
        image(reloadB, relRectX, relRectY);
            
        }
    
    paddle.render();
    paddle.move();
    
//    for (var i = 0; i < balls.length; i++){
        
    for(var i = balls.length - 1; i >= 0; i--){
        
        balls[i].drawBall(width, random(740));
        balls[i].bounce();
        balls[i].move();
        
        if (balls[i].offScreen()){
            
            balls.splice(i, 1);
            
        }
        
    
    }

        
    
    
//    Score
    fill(255, 121, 255);
    textSize(32);
    textAlign(RIGHT);
    text("score:         ", 1155, 722);
    
    textSize(38);
    fill(0, 231, 255);
    text(score, 1155, 722);
    
    
//        if(mouseX > rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom ){
//          
//        background (255, 255, 0);
//    
//    }
    
    
    
}



function reset (){
    
    score = 0;
    
        for(var i = balls.length - 1; i >= 0; i--){
        
        balls[i].drawBall(width, random(740));
        balls[i].bounce();
        balls[i].move();
        
        if (mouseX > relRleft && mouseX < relRright && mouseY > relRtop && mouseY < relRbottom){
            
            balls.splice(i, balls.length);
            
        }
        
    
    }
    
}
    


function Paddle (){
    
    this.pWidth = 15;
    this.pHeight = 230;
    this.pX = 50;
    
    this.pY;
    
    
    this.color = color(255, 121, 255);
    
    this.score = function (){
        
        this.color;
        score++;
        
    }

    
    
    this.render = function (){
    
    fill (this.color);
    rect (this.pX, this.pY, this.pWidth, this.pHeight);   
    this.color = color(255, 121, 255);
        
    }
    
    this.move = function (){
        
    this.pY = mouseY - this.pHeight / 2;
        
    }
    
}
    


function Ball(paddle){
    
    this.paddle = paddle;
    
    this.x = width;
    this.y = random(height);
    this.speed = 17;
    this.speedY = 9;
    this.size = 20;
    this.r = 10;
    
//    this.color = color(0, 231, 255);
//    
//    this.score = function (){
//        
//    this.color = color(r, 255, b);
//        
//    }
    
    
    this.drawBall = function (x, y){
        
        noStroke ();
        fill (0, 231, 255);
        ellipse (this.x, this.y, this.size, this.size);
//        this.color = color(0, 231, 255);
        
    }
    
    
    
    this.bounce = function (){
        
        if (this.x > width){
            
            this.speed = this.speed * -1;
        }
        
        if (this.y > height || this.y < 0){
            
            this.speedY = this.speedY * -1;
        }
        
        this.testPaddle();
        
    }

    
    this.move = function (){
        
        this.x = this.x + this.speed;
        
        this.y = this.y + this.speedY;
        
        
        this.testPaddle();
        
    }
    
    
    this.offScreen = function (){
        
        if(this.x < 0){
            
            return true;
            
        } else{
            return false;
        }
        
    }
    
    
    this.testPaddle = function(){
        
        
        var top = (this.y + this.size/2 > this.paddle.pY);
        
        var bottom = (this.y - this.size/2 < this.paddle.pY + this.paddle.pHeight);
        
        var right = (this.x - this.size/2 < this.paddle.pY + this.paddle.pWidth);
        
        var left = (this.x + this.size/2 < this.paddle.pY);
        
        
        if(this.x < 80 && top && bottom && right && left){
            
            this.speed = 17;
            this.speedY = 9;
            
            
            this.paddle.score();
            
        }
        
        
    
        
        

        
    }
        
    
    
}






function mousePressed (){
    
    if(mouseX > addRleft && mouseX < addRright && mouseY > addRtop && mouseY < addRbottom){
    
        balls.push (new Ball(paddle));
    
    }

    
    if(mouseX > relRleft && mouseX < relRright && mouseY > relRtop && mouseY < relRbottom){
    
        reset();
    
    }
    
}

