class tree {
    constructor(x,y,width,height){
        var_options = {
            isStatic:true
           
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
        this.image = loadImage("tree.png")
    }
    display(){
        var pos =this.body.position;
    imageMode(CENTER);
    
    image(this.image,pos.x, pos.y, this.width, this.height);
    }
}