var gamemode = 0;  //0 = welcome screen, 1 = playing, 2 = game over
var clicks = 0;
var imgX;
var imgY;
//var startTime=getTime();
//var elapsedTime=((getTime()-startTime)/1000);
var img;
function preload() {
  //img = loadImage("1.jpg");
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  if (gamemode == 0) {
    background(244,164,96);
    textSize(70);
    textFont()
    text("Stump Smacker", 150, 170);
  } else if (gamemode == 1) {
    background(178,34,34);
    text("smash the stump", 30, 30);
    text(clicks + " Stumps Smacked.", 30, 90);
    imgX = random(width);
    imgY = random(height);
    console.log(imgX + " " + imgY);
    //image(img, imgX, imgY);
    rect(imgX, imgY, 100, 100);
    noLoop();
  } else if (gamemode == 2) {
    background(244,164,96);
    clicks = 0
  }
}

function keyTyped(){
  console.log("key");

  if (gamemode == 0) {
    gamemode = 1;
  }
}

function mouseClicked() {  
  if (gamemode == 0) {
    gamemode = 1;
      redraw();
    
  } else if (gamemode == 1) {
    if (mouseX > imgX && mouseX < imgX + 100 && mouseY > imgY && mouseY < imgY + 100) {
    console.log("click");
    clicks = clicks + 1;
    redraw();  
  } else {
    gamemode = 2;
    redraw();
  }
    
  } else if (gamemode == 2) {
    gamemode = 0;
      redraw();
  }
  
 

}
