var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -5;
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.velocityX = 5;
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  


bounceOff(movingRect,fixedRect)

  drawSprites();
}

