class Mangoes {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:0,
          density:1.2,
          friction:1
      }
      this.image = loadImage("sprites/mango.png");
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    imageMode(CENTER); fill("purple");
    image( this.image,0, 0, this.radius*2, this.radius*2);
     
      pop();
    }
  };