
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var paperImg;
var binImg,bin; 


function preload()
{
	//paperImg=loadImage("paper.png")
	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(350,350,15);
	//paperObject.addImage(paperImg);

	bin=createSprite(1320,510,10,10);
	bin.addImage(binImg);
	bin.scale = 0.5;

	
	basket1 = new Basket(1400,500,20,200);
	basket2 = new Basket(1290,580,200,20);
	basket3 = new Basket(1250,500,20,200);
	dustbinObj = new Basket(1200,500);

	ground = new Ground(750,600,1500,20);

	Engine.run(engine);
	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  paperObject.display();
  //basket1.display();
  //basket2.display();
  //basket3.display();
  //dustbinObj.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{
			x:50,
			y:-50
		});
	}
}



