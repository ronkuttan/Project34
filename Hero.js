class Hero{
    constructor(x,y,r){
        var options = {
            density : 1,
            frictionAir : 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x ,y ,r/2 ,options) 
        this.image = loadImage("images/Superhero-01.png")
        World.add(world,this.body)
    }
    display(){
        var heropos = this.body.position
        push();
        translate(heropos.x,heropos.y)
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,0,0,this.r,170) 
        pop();
    }
}