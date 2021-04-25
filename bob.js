class Bob extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.body = Bodies.ellipse(x, y, width, height, options);
    }
   
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      ellipseMode(CENTER);
      fill("purple")
      super.display();
    }
  }