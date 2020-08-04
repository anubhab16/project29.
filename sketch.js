
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,tree1,ground,boy;
function preload()
{
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);

	//Create the Bodies Here.
	tree1 = new tree(400,220,60,20)
	mango1 = new mango(350,200,10,10)
	mango2 = new mango(360,210,10,10)
	boy = createSprite(100,600,20,30)
	boy.addImage(boyimg)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  mango1.display();
  mango2.display();
 boy.display();
}
function detectollision(L stone,L mango){
	mangoBodyPosition =lmango.body.position 
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcherObject.attach(stone.body);
	}
}



