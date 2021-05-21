const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

  
    ground = new Ground(500,400,1000,20)
    log=new box(300,100,50,100,0)
}

function draw(){
    background("orange");
    Engine.update(engine);

    ground.display();
    log.display()
  
    if (keyCode==32) {
        log.body.position.x-=0.1
       // this.moveBody(this.body, 1, "horizontal");
     }
}