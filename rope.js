class rope{
    constructor(bodyA,pointB){

        
        var options={
            bodyA:bodyA,
            pointB:pointB,
           stiffness:1,
           length:220
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        if (this.rope.bodyA){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(4);
        fill("black");
        var poinx=pointA.x
        var poiny = pointA.y
        var poin2x=pointB.x+this.offsetX
        var poin2y = pointB.y+this.offsetY
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
        }
    }
}