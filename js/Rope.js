class Rope {
    constructor(body1, body2, xOffset , yOffset){
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options ={
            bodyA : body1,
            bodyB: body2,
            stiffness: 1,
            length:350,
           pointA:{x: this.xOffset, y: this.yOffset } 
        }
    this.rope = Constraint.create(options)
    World.add(world, this.rope);
    }
    display(){
        var point1 = this.rope.bodyA.position
        var point2 = this.rope.bodyB.position
        strokeWeight(4)
        var attachPointX = point1.x + this.xOffset
        var attachPointY = point1.y + this.yOffset
        line(point2.x,point2.y,attachPointX,attachPointY)
    }
    }