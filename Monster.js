class Monster{
    constructor(x,y,r){
        var options = {
            density : 5,
            frictionAir : 0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x ,y ,r/2 ,options) 
        this.image = loadImage("images/Monster-01.png")
        World.add(world,this.body)
    }
    display(){
        var monpos = this.body.position
        push();
        translate(monpos.x,monpos.y)
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,0,0,this.r,this.r) 
        pop();
    }
}