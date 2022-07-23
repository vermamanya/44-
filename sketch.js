var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fruitGroup,banana,pineapple,grapes,watermelon;
var monkey1
var monkey

var bombGroup, bomb1,bomb3,bomb4
 function preload(){

  monkey1 = loadImage("monkey.png")
  backgroundImg = loadImage("jungle.png")

  bananaImg = loadImage("banana.png")
  pineappleImg = loadImage("pineapple.png")
  grapesImg = loadImage("grapes.png")
  watermelonImg = loadImage("watermelon.png")

  bomb1Img = loadImage("bomb1.png")
  bomb2Img = loadImage("bomb2.png")
  bomb3Img = loadImage("bomb3.png")
  bomb4Img = loadImage("bomb4.png")
}

function setup()
{
  createCanvas(300,600);

bg = createSprite(200,200)
bg.addImage(backgroundImg)
  monkey = createSprite(200,470,20,50)
  monkey.addImage(monkey1)
  monkey.scale = 0.3






}

function draw(){
    background("blue");
  
    if(keyDown("space")&& monkey.y >=100) {
      monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
   fruits()
   bombs() 
    
  drawSprites()
   
  }

  function fruits(){
    if(frameCount % 60 === 0){
      fruit = createSprite(200,200,50,50)
      fruit.velocityX=-3;
    
      var rand = Math.round(random(1,4))
      switch(rand){
        case 1: fruit.addImage(bananaImg);
        fruit.scale=0.1
        break;
        case 2: fruit.addImage(pineappleImg);
        fruit.scale=0.2
        break;
        case 3: fruit.addImage(grapesImg);
        fruit.scale=0.2
        break;
        case 4: fruit.addImage(watermelonImg);
        fruit.scale=0.2
        break;
        default:break
      }
    }
    }
    
    function bombs(){
      if(frameCount % 60 === 0){
        bomb = createSprite(100,150,50,50)
        bomb.velocityX=-3;
      
        var rand = Math.round(random(1,4))
        switch(rand){
          case 1: bomb.addImage(bomb1Img);
          bomb.scale=0.2
          break;
          case 2: bomb.addImage(bomb2Img);
          bomb.scale=0.2
          break;
          case 3: bomb.addImage(bomb3Img);
          bomb.scale=0.2
          break;
          case 4: bomb.addImage(bomb4Img);
          bomb.scale=0.2
          break;
          default:break
        }
      }
      }