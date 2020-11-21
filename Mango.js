  class Mango {
    constructor(x, y, r) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1
      }
      this.body = Bodies.circle(x, y, r, options);
      this.image = loadImage("mango.png");
      this.r = r
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      stroke("green")
      strokeWeight(4)
      image(this.image, 0, 0, 50,50);
      pop();
    }
  };