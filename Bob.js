class Bob {
    constructor(x, y, radius1, radius2) {
      var options = {
          isStatic: true,
          'restitution': 0.2,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, radius1, radius2, options);
      this.radius1 = radius1;
      this.radius2 = radius2;

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      pop();

      ellipseMode(CENTER);
      fill("yellow");
      circle(pos.x, pos.y, this.radius1, this.radius2);
    }
  } 