
var fixedRect, movingRect;
var edges = [];
var topEdge, bottomEdge, leftEdge, rightEdge;
var canvasHeight, canvasWidth;

function setup() {
  canvasWidth = 900;
  canvasHeight = 400;
  
  createCanvas(canvasWidth, canvasHeight);
  //edges=createEdges(canvasWidth,canvasHeight);
  
  // topEdge=edges[0];
  // bottomEdge=edges[1];
  // leftEdge=edges[2];
  // rightEdge=edges[3];

  topEdge = createSprite(canvasWidth / 2, 0, canvasWidth, 10)
  topEdge.visible = false
  bottomEdge = createSprite(canvasWidth / 2, canvasHeight, canvasWidth, 10)
  bottomEdge.visible = false
  leftEdge = createSprite(0, canvasHeight / 2, 10, canvasHeight)
  leftEdge.visible = false
  rightEdge = createSprite(canvasWidth, canvasHeight / 2, 10, canvasHeight)
  rightEdge.visible = false
  

  fixedRect1 = createSprite(500, 100, 50, 80);
  fixedRect1.shapeColor = "yellow";
  //fixedRect1.debug = true;

  fixedRect2 = createSprite(600, 100, 50, 80);
  fixedRect2.shapeColor = "yellow";

  fixedRect3 = createSprite(700, 100, 50, 80);
  fixedRect3.shapeColor = "yellow";

  fixedRect4 = createSprite(800, 100, 50, 80);
  fixedRect4.shapeColor = "yellow";

  movingRect = createSprite(500, 300, 80, 30);
  movingRect.shapeColor = "blue";
  //movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect1.velocityY = 5;
  fixedRect2.velocityY = 5;
  fixedRect3.velocityY = 5;
  fixedRect4.velocityY = 5;

}

function draw() {
  background(0, 0, 0);

  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;  
  
  bounce(movingRect, fixedRect1)
  // bounce(movingRect, fixedRect2)
  // bounce(movingRect, fixedRect3)
  // bounce(movingRect, fixedRect4)

  bounceOffEdge(topEdge, bottomEdge, leftEdge, rightEdge, movingRect)
  bounceOffEdge(topEdge, bottomEdge, leftEdge, rightEdge, fixedRect1)
  bounceOffEdge(topEdge, bottomEdge, leftEdge, rightEdge, fixedRect2)
  bounceOffEdge(topEdge, bottomEdge, leftEdge, rightEdge, fixedRect3)
  bounceOffEdge(topEdge, bottomEdge, leftEdge, rightEdge, fixedRect4)
  
  drawSprites();
}

