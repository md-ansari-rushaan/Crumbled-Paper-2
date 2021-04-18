class Paper{
    constructor(x,y,width,hieght){
        var option = {
            restitution:0.9,
            friction : 1.0,
            density : 1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,width,hieght,option);
        World.add(world,this.body);
        this.hieght = hieght;
        this.width = width;
    }
    display(){
        var pos = this.body.position;
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.hieght);
        pop()
        //rect(pos.x,pos.y,this.width,this.hieght);
        
    }
};