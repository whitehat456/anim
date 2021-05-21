class box {
 
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.2,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("CharacterR1.png");
      this.image1 = loadImage("CharacterR1.png");
      this.image2 = loadImage("CharacterR1.png");
      this.image3 = loadImage("CharacterR1.png");
      this.image4 = loadImage("CharacterR2.png");
      this.image5 = loadImage("CharacterR2.png");
      this.image6 = loadImage("CharacterR2.png");
      this.image7 = loadImage("CharacterR2.png");
      this.image8 = loadImage("CharacterR3.png");
      this.image9 = loadImage("CharacterR3.png");



       this.i=[this.image,this.image1,this.image2,this.image3,this.image4,this.image5,this.image6,this.image6,this.image7,this.image8,this.image9]


      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      
      
      var a=frameCount%30
      console.log(frameCount%10)
      
         switch(a){
             case 1: image(this.i[0], 0, 0, this.width, this.height);
             console.log("case1")
            break;
            case 2 :image(this.i[1], 0, 0, this.width, this.height);
            console.log("case2")
            break;
            case  3 :image(this.i[2], 0, 0, this.width, this.height);
            console.log("case3")
            break;
            case 4 :image(this.i[3], 0, 0, this.width, this.height);
            console.log("case4")
            break;
            case 5 :image(this.i[4], 0, 0, this.width, this.height);
            console.log("case5")
            break;
            case 6 :image(this.i[5], 0, 0, this.width, this.height);
            console.log("case6")
            case 7 :image(this.i[6], 0, 0, this.width, this.height);
            console.log("case7")
            case 8 :image(this.i[7], 0, 0, this.width, this.height);
            console.log("case6")
            case 9 :image(this.i[8], 0, 0, this.width, this.height);
            console.log("case6")
            
            break;
         }
        





      pop();
    }
}