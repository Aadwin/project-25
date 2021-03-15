class Paper{
    constructor(x,y,radius, angle){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        //var pos = this.body.position;
        //var angle = this.body.angle;
        ellipseMode(RADIUS);
        fill("white");
        //this.image = loadImage("paper.png");
        //rotate(angle);
        imageMode(RADIUS);
        //image(this.body.position.x,this.body.position.y,this.radius);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
};