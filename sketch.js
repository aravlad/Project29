
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  Boyimage = loadImage("boy.png");
  treeimage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,700,1200,20);
    stone = new Stone(400,590,20,20);
    slingshot = new Slingshot(stone.body, {x:280, y:580})
    mango1 = new Mango(910, 410, 20)
    mango2 = new Mango(1030, 300, 20)
    mango3 = new Mango(1140, 400, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

text(mouseX+","+mouseY, mouseX, mouseY)

  image(Boyimage, 250, 550, 200, 200)
  image(treeimage, 800, 200, 500, 500)

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);

  drawSprites();
 
}
function detectollision(lstone,lmango){ 
    mangoBodyPosition=lmango.body.position 
    stoneBodyPosition=lstone.body.position 
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
        if(distance<=lmango.r+lstone.r) {
            Matter.Body.setStatic(lmango.body,false);
        } 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
slingshot.attach(stone.body);

  }


}
