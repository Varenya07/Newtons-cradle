class Bob{
    constructor(x,y,color){
        var options = {
            'restitution': 1,
            'friction': 0,
            'frictionAir': 0.0,
            'slop': 1,
            inertia: Infinity 
        }
        this.x = x
        this.y = y
        this.color = color

        this.body = Bodies.rectangle(this.x,this.y,40,40,options);
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(RADIUS)
        fill(this.color)
        ellipse(0,0,40.40)
        pop();
    }
}