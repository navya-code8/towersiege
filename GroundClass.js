class Ground {
    constructor(x,y,width,height, c) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = c;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      stroke(this.color);
      strokeWeight(1);
      rect(pos.x, pos.y, this.width,this.height);

    }
  }