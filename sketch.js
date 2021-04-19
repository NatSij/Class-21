var fixedRectangle, movingRectangle, object1, object2, edges;

function setup() {
  createCanvas(800,400);

fixedRectangle = createSprite(300, 100, 50, 20);
fixedRectangle.shapeColor = "red";
fixedRectangle.velocityY = 6;

movingRectangle = createSprite(100, 200, 50, 20);
movingRectangle.shapeColor = "red";

object1 = createSprite(200, 200, 50, 20);
object1.shapeColor = "blue"

object2 = createSprite(300, 200, 50, 20);
object2.shapeColor = "white";
object2.velocityY = -8;

edges = createEdgeSprites();
}

function draw() {
  background("black");  
movingRectangle.y = mouseY;
movingRectangle.x = mouseX;

console.log(movingRectangle.x - fixedRectangle.x);



if(isTouching(movingRectangle,object1)){
  movingRectangle.shapeColor = "blue";
  object1.shapeColor = "green";
  object1.velocityY = 7;
}
else{
  movingRectangle.shapeColor = "red";
  object1.shapeColor = "purple";
  object1.velocityY = 0;
}

bounceOff(fixedRectangle,object2);
fixedRectangle.bounceOff(edges);
object2.bounceOff(edges);

  drawSprites();
}

