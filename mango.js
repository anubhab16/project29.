class Mango{
    constructor(x,y,){
    var options ={
        isStatic:true,
        restitution:0,
        friction:1,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("mango.js");
    World.add(world, this.body);
    }
    display(){
        this.body = this.body.position.x
        this.body = this.body.position.y
    }
}