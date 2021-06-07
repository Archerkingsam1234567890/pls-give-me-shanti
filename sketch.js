
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var ground;	
var wall1 , wall2;
var ball;
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density :1.2

	};

    ground = new Bodies.rectangle(width/2,670,width,20);
	//wall1 = Bodies.rectangle(1100,600,20,120);
	//wall2 = Bodies.rectangle(1350,600,20,50);



	ball = Bodies.circle(260,100,5,ball_options)
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
 
	background("orange");
	 
	
	
	rectMode(CENTER);
   ellipse(ball.position.x,ball.position.y,5);
   rectangle(ground.position.x,ground.position.y,width,20);
   

  
  
  Engine.update(engine);
  
}

function vForce() {
	Matter.Body.applyForce( ball, {x:0 , y:0} , {x:0 , y:0.05})
}

function hForce() {
	Matter.Body.applyForce( ball , {x:0,y:0} , {x:0.05 , y:0});
}
