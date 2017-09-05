function setup(){
    createCanvas (1080, 720);
}

function draw(){
    
    background (255, 99, 156);
    
//outer ear
    stroke (0);
        strokeWeight(4);
    fill (135, 93, 52);
    ellipse (431.062, 211.311, 116.234, 116.234);
    
    stroke (0);
        strokeWeight(4);
    fill (135, 93, 52);
    ellipse (665.326, 211.311, 116.234, 116.234);
    
//inner ear 
    stroke (0);
        strokeWeight(4);
    fill (232, 208, 173);
    ellipse (431.062, 211.311, 85.834, 85.834);
    
    stroke (0);
        strokeWeight(4);
    fill (232, 208, 173);
    ellipse (665.327, 211.311, 85.834, 85.834);
    
//face    
    stroke (0);
        strokeWeight(4);
    fill (135, 93, 52);
    ellipse (548.195, 373.04, 388.514, 388.514);
        
//eyes
        //left
    noStroke();
    fill (255);
    ellipse (451.154, 332.499, 116.768, 116.768);
    
    noStroke();
    fill (0);
    ellipse (451.15, 332.502, 65.81, 65.81);
    
    noStroke();
    fill (231, 68, 135);
    ellipse (451.981, 337.526, 50.022, 50.022);
    
    noStroke();
    fill (234, 219, 22);
    ellipse (442.33, 316.374, 22.69, 22.69);
    
    noStroke();
    fill (255);
    ellipse (448.698, 334.687, 5.97, 5.97);
    
    noStroke();
    fill (255);
    ellipse (460.471, 352.829, 12.74, 12.74);
    
        //right
    noStroke();
    fill (255);
    ellipse (647.002, 332.499, 116.768, 116.768);
    
    noStroke();
    fill (9, 135, 128);
    ellipse (647.002, 332.502, 65.812, 65.812);
    
    noStroke();
    fill (0);
    ellipse (646.267, 337.526, 50.02, 50.02);
    
    noStroke();
    fill (245, 156, 190);
    ellipse (635.5, 310.885, 14.332, 14.332);
    
    noStroke();
    fill (255);
    ellipse (642.954, 331.502, 9.152, 9.152);
    
    noStroke();
    fill (231, 216, 25);
    ellipse (641.56, 353.992, 15.129, 15.129);
    
//mouth
    stroke (0);
        strokeWeight (4);
    fill (232, 208, 173);
    ellipse (548.758, 476.14, 151.529, 151.529)
    
    noStroke();
    fill (0);
    rect (533, 475.207, 31.312, 3.007);
    
//nose
    stroke (0);
        strokeWeight (3.5);
    fill (119, 67, 27);
    ellipse (548.758, 405.683, 36.626, 36.626)
    
    
    
}