function setup() {
  createCanvas(500, 500);
  colorMode(HSB,10);
  rectMode(CENTER);
  frameRate(6);
  // save('jgs.jpg');


}

function draw() {
  background(0);
  for(i=0;i<150;i++){
     push();
    translate(width/2,height/2);
    rotate(i)
    glowingRect((i%4)*1.0,12,i%4*2,412);
     pop();
  }
}

function glowingRect( x, y, z, r){
  noStroke();
  rect(x,y,z,r);
  }
