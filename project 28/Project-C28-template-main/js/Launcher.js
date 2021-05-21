class launcher{
    constructor(bodyA,pointB){
        //constructor(bodyA,pointB)
    var options={
        bodyA:bodyA,
        pointB:pointB,
       // bodyB:bodyB,
        length:100,
        stiffness:0.04
    
    }
    this.pointB=pointB;
    this.launcher=Constraint.create(options);
    World.add(world,this.launcher);
    
    
    }
    fly(){
    this.launcher.bodyA=null.
     
    
    }attach(bodyA){
     this.launcher.bodyA=bodyA;
    }
    display(){
    if(this.launcher.bodyA){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.pointB
        //var pointB=this.sling.bodyB.position;
        push ();
        strokeWeight(5);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        pop ();
    }
    
    }
        
    }
    
