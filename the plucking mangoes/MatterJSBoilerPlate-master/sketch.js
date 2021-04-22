
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
tree = new Tree(200,300);
mango1 = new Mangoes(650,200,20);
mango2 = new Mangoes(600,250,25);
mango3 = new Mangoes(560,350,30);
mango4 = new Mangoes(520,200,28);
mango5 = new Mangoes(600,160,30);
mango6 = new Mangoes(500,270,25);
mango7 = new Mangoes(480,360,30);
mango8 = new Mangoes(700,375,25);
mango9 = new Mangoes(759,279,20);
mango10 = new Mangoes(680,270,30);
mango11 = new Mangoes(630,340,28);
mango12 = new Mangoes(710,320,23)



//
ground = new Ground(400,690,800,10);
image(boyImage,220,640,80,120)
stone = new Stone(180,640,30,30)
rope = new Rubberband(stone.body,{x:168,y:586});


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  ground.display()
  
  tree.display();
  mango1.display();//small mango on right side
  mango2.display();//mango in middle
  mango3.display();//leftsidedown side big mango
  mango4.display();//upside small mango
  mango5.display();// rigthward middle mango
  mango6.display();//right side upward small mango
  mango7.display();//left side topmost mango
  mango8.display();//left sside small miidle manago
  mango9.display();// middle upward mango
  mango10.display();// left side middle mango
  mango11.display();// right side big mango
  mango12.display();// right side small mango in mango middle
  //boy.display();
  image(boyImage,220,640,180,240)

  stone.display();
  rope.display();
  detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);
 detectCollision(stone,mango10);
 detectCollision(stone,mango11);
 detectCollision(stone,mango12);
 detectCollision(stone,mango11);

  
  



  

  drawSprites();
  //image(boyImage,220,640,180,240)
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.fly();
	
}


	function detectCollision(lstone,lmango)
	{ 
	   mangoBodyPosition=lmango.body.position 
	   stoneBodyPosition=lstone.body.position
		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
	   
		}
		}
 


