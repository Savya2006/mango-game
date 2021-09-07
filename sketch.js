
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;

function preload(){
  BG = loadImage("garden.jpg");
  S = loadSound("SOUND..mp3");
  Farm = loadImage("farm.jpg");
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(240,510,30);
   
  // 1st Tree
	mango1 = new Mango(1340,50,30);
	mango2 = new Mango(1528,287,30);
	mango3 = new Mango(1300,150,30);
	mango4 = new Mango(1390,300,30);
	mango5 = new Mango(1361,222,30);
	mango6 = new Mango(1463,226,30);
  mango7 = new Mango(1417,117,30);
  mango8 = new Mango(1155,322,30);
  mango9 = new Mango(1277,242,30);
  mango10 = new Mango(1205,110,30);  
  mango11 = new Mango(1190,240,30);
  mango12 = new Mango(1410,180,30);
  mango13 = new Mango(1103,203,30);

  //2nd Tree.
  M1 = new Mango(1696,352,25);
  M2 = new Mango(1651,272,25);
  M3 = new Mango(1608,400,25);
  M4 = new Mango(1766,243,25);
  M5 = new Mango(1849,360,25);
  M6 = new Mango(1753,327,25);
  M7 = new Mango(1770,398,25);





  tree = new Tree(1300,680);
  T2 = new tree2(1720,680);

  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,500);
	chain = new Chain(stone.body,{x:240, y:510});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(BG);

  fill("darkblue");
  textSize(25)
  stroke("black")
  text("*DRAG THE STONE WITH YOUR MOUSE",50,40);
  text("*SPACE FOR GETTING BACK THE STONE",130,65);

 // fill("red")
 //text(mouseX+ "," +mouseY,1550,50); 

  ground.display();
  tree.display();
  T2.display();

  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display();
  M6.display();
  M7.display();



  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);
  detectCollision(stone, mango13);

  detectCollision(stone, M1);
  detectCollision(stone, M2);
  detectCollision(stone, M3);
  detectCollision(stone, M4);
  detectCollision(stone, M5);
  detectCollision(stone, M6);
  detectCollision(stone, M7);



  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
