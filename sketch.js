var fixedRect,movingRect,box1,box2,box3;

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(400,200,60,60);
  movingRect.shapeColor = "red";

  box1 = createSprite(680,30,45,45);
  box1.debug = true;
  box1.shapeColor = "green";
  box1.velocityY = 3;

  box2 = createSprite(680,575,45,45);
  box2.debug = true;
  box2.shapeColor = "green";
  box2.velocityY = -3;

  box3 = createSprite(500,300,30,30);
  box3.shapeColor = "red";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(box3,movingRect)){
    box3.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";

  }
  else{
    box3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  
  bounceOff(box1,box2);
    
        
  drawSprites();
}

