class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            length: 10,
            stiffness: 1,
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }
    display() {
        var point1 = this.Chain.bodyA.position
        var point2 = this.Chain.bodyB.position
        strokeWeight(5);
        line(point1.x, point1.y, point2.x, point2.y);
    }
}