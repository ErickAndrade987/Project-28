class Tree{
    constructor(x, y) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 450, 600, options);
        this.width = 450;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}