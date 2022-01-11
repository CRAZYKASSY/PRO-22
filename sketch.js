const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);


  var options = {
    isStatic: true
  }

  playerBase = Bodies.rectangle(150, 200, 190, 140, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(200, playerBase.position.y - 160, 60, 180, options);
  World.add(world,player)



}

function draw() {
   background(backgroundImg);
   Engine.update(engine);

   image(baseimage,playerBase.position.x,playerBase.position.y,190,140)
   image(playerimage,player.position.x,player.position.y,60,180)


   // Título
   fill("#FFFF");
   textAlign("center");
   textSize(40);
   text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
