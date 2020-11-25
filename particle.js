class Particles
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.4,
			}
		this.r=r
        
        .body=Bodies.circle(x,y,this.r,options)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world, this.body);
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
            var angle=this.body.angle

			push()
			translate(paperpos.x, paperpos.y);
		    rotate(angle)
			ellipseMode(RADIUS)
			strokeWeight(3);
			fill(this.color)
			ellipse(0,0,this.r, this.r); 
            pop()
			
	}

}


















































