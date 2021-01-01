class rope{
	constructor(bodyA,pointB)
	{
		
		var options={
			bodyA:bodyA,
			pointB:pointB,
			stiffness: 1,
			angularStiffness: 1,
			length: 220 
		}

		this.pointB = pointB
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB;

		push();
		strokeWeight(3.5);
		stroke(0)
		line(pointB.x,pointB.y,pointA.x,pointA.y);
		pop();
	}

}