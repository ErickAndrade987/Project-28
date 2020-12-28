class Slingshot {
    constructor(bodyA,pointB){
    var options = {bodyA:bodyA,pointB:pointB,length:10,stiffness:0.04}
    this.pointB = pointB
    this.slingshot = Matter.Constraint.create(options)
    World.add (world,this.slingshot)
    }
    display(){
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    }
    fly(){
    this.slingshot.bodyA = null
    }
    }
    