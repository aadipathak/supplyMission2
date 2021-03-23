var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxPosition= width/2 -100
	 box.y= 600;

	 boxleftSide = createSprite(boxPosition,boxY,20,100);
	 boxleftSide.shapeColour(255,0,0);

	 leftBody = Bodies.rectangle(boxPosition+20,boxY,20,200,{isstatic:true});
	 world.add(world,leftBody)

	 boxBase = createSprite(boxPosition+100,boxY+40,200,20);
	 boxBase.shapeColour(255,0,0);

	 bottomBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20, {isstatic:true});
	world.add(world,bottomBody);
	
	boxleftSide = createSprite(boxPosition+20,boxY,20,200);
	boxleftSide.shapeColour (255,0,0);

	boxrightSide = createSprite(boxPosition+200-20,boxY,20,100);
    boxrightSide.shapeColour (255,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed(){
if(keyCode === DOWN_ARROW){
	Matter.body.setStatic(packageBody,false);
}
}