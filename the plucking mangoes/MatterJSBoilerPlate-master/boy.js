class BOY{
   constructor(x,y,width,height){
       var options ={
           isStatic : true,
           friction : 2,
          
       }
      this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.image= loadImage("sprites/boy.png")

World.add(world,this.body);
   }
   display(){
translate(this.body.position.x,this.body.position.y);

imageMode(CENTER);
image(this.image,0,0,this.width*2,this.height*2);




   }
}