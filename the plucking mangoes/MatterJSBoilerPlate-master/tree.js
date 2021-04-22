class Tree{
    constructor(width,height){
        var options ={
            isStatic : true,
            friction : 2,
            density :1  
        }
       this.body = Bodies.rectangle(width,height,options)
this.width = width;
this.height = height;
this.image = loadImage("sprites/tree.png")

World.add(world,this.body);
    }
    display(){
//translate(this.body.position.x,this.body.position.y)
fill("green")
imageMode(CENTER)
image(this.image,600,400,this.width*2,this.height*2)




    }
}