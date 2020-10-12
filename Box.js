class Box {
    constructor(x, y, width, height, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.image = loadImage("Boom.jpg");
      this.visible =255;
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      fill(this.color);
        stroke("black")
        strokeWeight(1);

      if (this.body.speed<6 && pos.y<385){

        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
        
      }

      else{
        World.remove(world,this.body);
        push();
        tint(255,this.visible);
        image(this.image,pos.x, pos.y, this.width, this.height);
        this.visible-=3;
        pop();
      }
    }

    
  
    
}

