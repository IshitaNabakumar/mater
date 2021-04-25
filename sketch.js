
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chain,bob,box;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob = new bob(100,100);
	box=new box(200,200,40,50);
	chain=new SlingShot(bob.body,box.body);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



