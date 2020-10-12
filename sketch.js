const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8;
var polygon;
var polygonImg;
var ground;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var backGround


function preload(){


  bgChange();
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(502,380,250,10,"brown");
  ground = new Ground(400,395,800,20,"darkgreen");
  box1 = new Box(455,350,50,50, "salmon");
  box2 = new Box(460,350,50,50,"salmon");
  box3 = new Box(505,350,50,50,"salmon");
  box4 = new Box(530,350,50,50,"salmon")
  box5 = new Box(555,350,50,50,"salmon");
  box6 = new Box(465,310,50,50,"yellow")
  box7 = new Box(490,310,50,50,"yellow")
  box8 = new Box(515,310,50,50,"yellow")
  box9 = new Box(540,310,50,50,"yellow");
  box10 = new Box(477,270,50,50,"lightgreen")
  box11 = new Box(502,270,50,50,"lightgreen")
  box12 = new Box(527,270,50,50,"lightgreen")
  box13 = new Box(480,220,50,50,"aquamarine")
  box14 = new Box(530,220,50,50,"aquamarine")
  box15 = new Box(505,180,50,50,"MediumOrchid")

  polygon = Bodies.circle(70,200,40, {restitution: 0.8, friction: 1.0, density: 2});
  World.add(world,polygon);

  launcher = new Launcher(this.polygon,{x:120, y:200})
  
}

function draw() {
  if (backGround){
  background(backGround)  
  
  Engine.update(engine);

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y,80,70);
  }
  ground.display();
  base.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  launcher.display();
  



  drawSprites();

}

function mouseDragged(){
  if (gameState === PLAY){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY})
  }
}

function mouseReleased(){

        
  launcher.fly();
  //console.log("hi")
  gameState = END

}

function keyPressed(){
  if (keyCode === 32){
  //  console.log("boom")
    this.polygon.speed = 0
    Matter.Body.setPosition(this.polygon,{x:120,y:200})
    launcher.attach(this.polygon);

    gameState = PLAY;

 }
}

async function bgChange(){
  console.log("hi")
  var aPI = await fetch("http://worldclockapi.com/api/json/pst/now");
  var apiData = await aPI.json();
  var time = apiData.currentDateTime
  var hours = time.slice(11,13);
  console.log(hours);
  
  if (hours>7 && hours<17){

    backGround = color(135,206,250)
    polygonImg = loadImage("lightPoly.jpg");

  }

  else{

    backGround = color(25,25,112)
    polygonImg = loadImage("polyImg.jpg");

  }

}
