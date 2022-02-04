var box;
var box2;
function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,30,30);
  box.shapecolor="orange";
  box2=createSprite(100,300,30,30);
  box2.shapeColor="yellow";
  
}

function draw() 
{
  background(25,50,30);
  if(keyDown("right")){
    box.x=box.x+5;
  }
  if(keyDown("left")){
    box.x=box.x-5;
  }
  if(keyDown("down")){
    box2.y=box2.y+5;

  }
  if(keyDown("up")){
    box2.y=box2.y-5;
  }
  if(keyDown("space")){
    background("aqua");
  }
drawSprites();

}




