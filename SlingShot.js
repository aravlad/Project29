class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.Sling);
    }
     fly(){
       this.Sling.bodyA = null
     };
     attach(body1){
        this.Sling.bodyA = body1
      };
    display(){
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);


        }

    }
    
}