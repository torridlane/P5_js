function setup() {
  createCanvas(500, 500);
  colorMode(HSB,10);
  rectMode(CENTER);
  frameRate(6);
  // save();
}

function draw() {
  background(0);
  for(i=0;i<150;i++){
     push();
    translate(width/2,height/2);
    rotate(i)
    glowingRect((i%24)*1.8,2,i%3*2,412);
     pop();
  }
}

function glowingRect( x, y, z, r){
  noStroke();
  rect(x,y,z,r);
  }
