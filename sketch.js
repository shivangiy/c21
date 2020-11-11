var fixedRect,movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(200,100,80,30);
  movingRect.shapeColor = "red"

  gameobject1 = createSprite(200,100,50,50);
  gameobject1.shapeColor = "red";
  gameobject1.velocityX=3

  gameobject2 = createSprite(300,100,50,50);
  gameobject2.shapeColor = "red";
  gameobject2.velocityX=-3

  gameobject3 = createSprite(400,100,50,50);
  gameobject3.shapeColor = "red";

  gameobject4 = createSprite(500,100,50,50);
  gameobject4.shapeColor= "red"
}

function draw() {
  background("blue");  

  /*movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(isTouching(movingRect,gameobject3)){
    movingRect.shapeColor = "green";
    gameobject3.shapeColor = "green"
  }
  else
  {
    movingRect.shapeColor = "red";
    gameobject3.shapeColor = "red"
  }

  console.log(movingRect.x - fixedRect.x);*/

  bounceOff(gameobject1,gameobject2)

  drawSprites();
}

