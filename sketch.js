const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;''
var box,ground;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world=engine.world; 
  var boptions={
    restitution:2.5,
    density:12
  }
box=Bodies.circle(200,200,25,boptions);
World.add(world,box);
var goptions={
  isStatic:true
}
ground=Bodies.rectangle(400,380,800,10,goptions);
World.add(world,ground);

}

function draw() {
  background(0);
  Engine.update(engine);  
ellipseMode(RADIUS);
fill('red');
ellipse(box.position.x,box.position.y,25,25);
rectMode(CENTER);
fill('white')
rect(ground.position.x,ground.position.y,800,10);
}