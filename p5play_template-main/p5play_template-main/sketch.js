var box;
function setup()
 {
  box=createSprite(20,20,20,20) ;
   box.shapeColor="blue";
  createCanvas(400,400);
}
function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW))
   {
    box.x=box.x+2.5;
    box.shapeColor="green";

  }
  if (keyIsDown(LEFT_ARROW))
   {
    box.x=box.x-2.5;
    box.shapeColor="blue";
  }
  if (keyIsDown(UP_ARROW))
   {
    box.y=box.y-2.5;
    box.shapeColor="red";
  }
  if (keyIsDown(DOWN_ARROW))
   {
    box.y=box.y+2.5;
    box.shapeColor="grey";
  }

}