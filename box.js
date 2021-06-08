class Box{
    constructor(x,y, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,10, options);
        this.width = 50;
        this.height = 10;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        RectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}