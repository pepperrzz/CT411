var balls = [];

//var speed = 5; 

var click;
        

function preload (){
    
    click = loadImage("clicktoaddballs.png");
    
}


function setup (){
    
    createCanvas(1200, 750);
    
    imageMode(CENTER);
    
//    for (var i = 0; i < 2; i++){
//        
//        balls[i] = new Ball ();
//    }
    
}

function draw (){
    
    background (0);
    
    image(click, 1050, 710);
    
    paddle();
    
    for (var i = 0; i < balls.length; i++){
        
        balls[i].drawBall(width, random(740));
        balls[i].bounce();
        balls[i].move();
    
//      Paddle Bounce
        if (balls[i].intersects(paddle)){

            balls[i].bounceBack(paddle);
            balls[i].move(paddle);
        }
    }
    
}
    


function paddle (){
    
    this.pWidth = 15;
    this.pHeight = 230;
    this.pX = 50;
    this.pY = mouseY - this.pHeight / 2;
    
    fill (255, 121, 255);
    rect (this.pX, this.pY, this.pWidth, this.pHeight);

        
    }
    


function Ball (){
    

    this.x = width;
    this.y = random(height);
    this.speed = 12;
    this.speedY = 8;
    this.size = 20;
    this.r = 10;
    
    this.drawBall = function (x, y){
        
        noStroke ();
        fill (0, 231, 255);
        ellipse (this.x, this.y, this.size, this.size);
        
    }
    
    this.bounce = function (){
        
        if (this.x > width){
            
            this.speed = this.speed * -1;
        }
        
        if (this.y > height || this.y < 0){
            
            this.speedY = this.speedY * -1;
        }
        
    }

    
    this.move = function (){
        
        this.x = this.x + this.speed;
        
        this.y = this.y + this.speedY;
        
    }

    
    this.intersects = function(paddle){
        
        var d = dist(this.x, this.y, paddle.pX, paddle.pY);
        
            if(d < this.r){
            
                return true;
            } else {
            
                return false;
            }
    }
}


    this.bounceBack = function (paddle){
        
//        if (this.x > paddle){
//            
//            this.speed = this.speed * -1;
//        }
//        
//        if (this.y > height || this.y < 0){
//            
//            this.speedY = this.speedY * -1;
//        }
        
        
//        example found online
        if(this.speed > 0){
            
            this.x = paddle.pY - this.r;
            
        } else {
            
            this.y = paddle.pY + this.r;
            
        } this.speed *= -1;
        
    }


function mousePressed (){
    
    balls.push (new Ball());
    
}

