const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//variables
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
var onsling=true
//preload
function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
//setup
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Challenge1:
  var options={restitution:1,friction:1,isStatic:false}
  ball = Matter.Bodies.circle(50,200,20,options)
  World.add(world,ball);

//challenge 2
  slingShot = new Slingshot(ball,{x:50, y:60});

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  slingShot.display();
  ground.display();
  g.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)


}
function mouseDragged(){
  if(onsling===true ){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
  slingShot.fly();
onsling=false
}
function keyPressed(){
  if(keyCode===32){
slingShot.attach(ball)
onsling=true
  }
}