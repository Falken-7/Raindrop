class Raindrop {

    constructor(x,y,width,height){
   
        this.height = height;
        this.width = width;
	    this.x = x;
	    this.y = y;
}

	display(){
	    push();
	    fill("green");
	    rect(this.x, this.y, this.width, this.height);
	    pop()
	}

	fall(speed){
	    this.y = this.y + speed
	  }

	}
