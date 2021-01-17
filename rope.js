class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB=pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        
    }
    
}