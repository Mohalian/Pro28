const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree1, mango1;
var platform;
var stone, Boy;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    tree1 = new Tree(700,320,70,70);
    stone = new Stone(200,50);
mango1 = new Mango(tree1.x,tree1.y);
    boy = new Boy(stone.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    tree1.display();
    stone.display();
    platform.display();
    boy.display();    
    if(stone.isTouching(mango1)){
        Matter.Body.setStatic(mango1,false)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}