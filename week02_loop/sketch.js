function setup (){
    
    createCanvas (1080, 720);
    
}

function draw (){
    
    background (255);
    
    
//loop
    fill (255, 163, 212, 28);
    stroke (106, 235, 255);
        strokeWeight (2.5);
    for (var yerr = 140; yerr <= width; yerr += 200){
        
        for (var y = 160; y <= height; y += 200){

            ellipse (yerr, y, 800, 800);
    }
}


}