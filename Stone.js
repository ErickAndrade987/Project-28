class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0.0,
            'friction':1.0,
           isStatic:false
        }
       
        this.r = r;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}