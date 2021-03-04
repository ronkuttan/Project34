const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine ,world;
var bgImg,ground,hero;
var fly,block1,monster;

function preload() {
  //preload the images here
  bgImg = loadImage("images/GamingBackground.png")

  
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,510,1000,10);

  hero = new Hero(200,200,300)

  fly = new Fly(hero.body,{x:200, y :-50})

  block1 = new Block(400,470,65,60)
  block2 = new Block(400,380,65,60)
  block3 = new Block(400,320,65,60)
  block4 = new Block(400,260,65,60)
  block5 = new Block(400,200,65,60)
  block6 = new Block(400,130,65,60)
  block7 = new Block(400,50,65,60)


  block9 = new Block(480,470,65,60)
  block10 = new Block(480,380,65,60)
  block11 = new Block(480,330,65,60)
  block12 = new Block(480,270,65,60)
  block13 = new Block(480,200,65,60)
  block14 = new Block(480,120,65,60)
 

  block16 = new Block(560,470,65,63)
  block17 = new Block(560,370,65,63)
  block18 = new Block(560,320,65,63)
  block19 = new Block(560,260,65,63)
  block20 = new Block(560,200,65,63)
  block21 = new Block(560,110,65,63)
  block22 = new Block(560,70,65,63)
  block23 = new Block(560,-10,65,63)
  
  block25 = new Block(640,470,65,63)
  block26 = new Block(640,380,65,63)
  block27 = new Block(640,310,65,63)
  block28 = new Block(640,250,65,63)
  block29 = new Block(640,150,65,63)
  
  monster = new Monster(800,260,250)

}

function draw() {
  background(bgImg);
  Engine.update(engine)

  ground.display();

  hero.display();

  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 
  
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();


  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();

  

  monster.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x : mouseX, y : mouseY})
}