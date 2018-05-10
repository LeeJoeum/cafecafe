var cafe;
var frame;
var moon;

function preload() {
  frame = loadImage("frame.png");
  cafe = loadImage("cafe.png");
  moon = loadImage("moon.png");
}

function setup() {
  createCanvas(1000,1000);
  background(50);
  frameRate(3);
}

function draw() {
  background(50);
  
  for(var i=161; i<=415; i++) {
  stroke(i/2+50,70,(255-i/2));
  line(409,i,700,i);
  }
    
  noStroke();
  fill(255,random(100,255));
  ellipse(random(420,680),random(200,400),3,3);
  ellipse(random(420,680),random(200,400),2,2);
  fill(255,255,0,random(100,255));
  ellipse(random(420,680),random(200,400),3,3);
  ellipse(random(420,680),random(200,400),2,2);
  
  imageMode(CENTER);
  image(frame,width/2,height/2+2);
  image(cafe,width/2,height/2+1);
  image(moon,width/2,height/2);
   
  noFill();
  strokeWeight(3);
  stroke(255,255,0);
  rect(mouseX -28,mouseY-28,57,57);
   
  noStroke();
  fill(0);
  textSize(13);
  text("L.Joeum",width/2+190,height/2+357);
}