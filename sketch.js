const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5
var rope1,rope2,rope3, rope4,rope5;
var world;
var engine

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

	
	bobObject1=new Bob(220,250,"red");
	bobObject2=new Bob(260,250,"red");
	bobObject3=new Bob(300,250,"red");
	bobObject4=new Bob(340,250,"red");
	bobObject5=new Bob(380,250,"red");
	
	
	//Create a Ground

	rope1 = new rope(bobObject1.body,{x: 220,y: 100})
	rope2 = new rope(bobObject2.body,{x: 260,y: 100})
	rope3 = new rope(bobObject3.body,{x: 300,y: 100})
	rope4 = new rope(bobObject4.body,{x: 340,y: 100})
	rope5 = new rope(bobObject5.body,{x: 380,y: 100})
	


	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}

	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}


	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	

	}

	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);


  rope1.display()
  rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  drawSprites();
  
 
}

function mouseDragged() {
	Matter.Body.setPosition(bobObject1.body,{x: mouseX, y: mouseY})
}






