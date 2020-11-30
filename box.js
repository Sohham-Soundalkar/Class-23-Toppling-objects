class Box{
    // properties which belongs to everyone
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        // changes its settings
        push()
        // captures the positions of pos
        translate(pos.x,pos.y);
        //rotates in an particular angle
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        // goes into its orignal settings
        pop();
    }
}