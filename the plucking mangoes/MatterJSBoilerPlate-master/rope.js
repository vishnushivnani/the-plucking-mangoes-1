class Rubberband{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
this.pointB = pointB
        this.Rubberband = Constraint.create(options);
        World.add(world, this.Rubberband);
    }


  fly(){
     this.Rubberband.bodyA=null;  
  }
    
    display(){
        if(this.Rubberband.bodyA){
        var pointA = this.Rubberband.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}