
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(800,height,1600,20);
	tree = new Tree(1050,400);
	stone = new Stone(100,300,50);
	slingshot = new Slingshot(stone.body,{x:250,y:380});
	m1 = new Mango(1100,200,50);
	m2 = new Mango(1050,300,50);
	m3 = new Mango(1200,250,50);
	m4 = new Mango(900,280,50);
	m5 = new Mango(985,200,50);

	Engine.run(engine);
  
}


function draw() {
  background("blue");
  image(boyImg,200,300,200,300);
  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  stone.display();
  slingshot.display();
//  detectCollision(stone, m1);
//  detectCollision(stone, m2);
//  detectCollision(stone, m3);
//  detectCollision(stone, m4);
//  detectCollision(stone, m5);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
    }
function mouseReleased(){
    slingshot.fly()
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body, {x:235, y:420})
slingshot.attach(stone.body);
}
}
function detectColission(Lstone,Lmango){
mangoBodyPosition = lmango.Body.Position
stoneBodyPosition = lstone.Body.Position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false);
}
}

