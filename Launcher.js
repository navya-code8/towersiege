class Launcher{

    constructor(body1, point2){

        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.2,
            length: 15
        }

        this.sling = Constraint.create(options);
        this.point = point2

        World.add(world,this.sling);
         
    }

    fly(){
    
        this.sling.bodyA = null;

    }

    attach(body1){
        this.sling.bodyA = body1;

    }

    display(){
        stroke("blue");
    
        if (this.sling.bodyA){
          var posA = this.sling.bodyA.position;
          var posB =  this.sling.pointB;

          line(posA.x, posA.y, posB.x, posB.y);

        }
    }

}



