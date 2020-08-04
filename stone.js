 class stone{
            constructor(bodyA, pointB){
                var options = {
                    bodyA: bodyA,
                    pointB: pointB,
                    stiffness: 0.04,
                    length: 10
                }
                this.image = loadImage("stone.png")
                this.pointB = pointB
                this.stone= Constraint.create(options);
                World.add(world, this.sling);
            }
            attach(body){
                this.stone.bodyA = body;
            }
            
            fly(){
                this.stone.bodyA = null;
            }
        
            display(){
                image(this.stone,200,170)
                if(this.stone.bodyA){
                    var pointA = this.stone.bodyA.position;
                    var pointB = this.pointB;
                    push();
                    pop();
                }
            }
            
        }
    }
}