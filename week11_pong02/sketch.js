var balls = [];

var speed = 5; 
        

function setup (){
    
    createCanvas (1200, 750);
    
    for (var i = 0; i < 2; i++){
        
        balls[i] = new Pong ();
    }
    
}

function draw (){
    
    background (0);
    
    paddle();
    
    for (var i = 0; i < balls.length; i++){
        
        balls[i].drawPong
        balls[i].bounce
        balls[i].move
    }
    
}
    
function mousePressed (){
    
    addBall();
    
}

function paddle (){
    
    this.pWidth = 15;
    this.pHeight = 230;
    this.pX = 50;
    this.pY = mouseY - this.pHeight / 2;
    
    fill (255, 121, 255);
    rect (this.pX, this.pY, this.pWidth, this.pHeight);
    
}

function Pong (){
    
    this.x = 50;
    this.y = 50;
    this.speed = 5;
    this.size = 20;
    
    this.drawPong = function (){
        
        fill (0, 231, 255);
        ellipse (this.x, this.y, this.size, this.size);
        
    }
    
    this.bounce = function (){
        
        if (this.x > width || this.x < 0){
            
            this.speed = this.speed * 1;
        }
        
        if (this.y > height || this.y < 0){
            
            this.speed = this.speed * 1;
        }
        
    }
    
    this.move = function (){
        
        this.x = this.x + this.speed;
        
        this.y = this.y + this.speed;
        
    }
    
}

function addBall (){
    
    
    
}

