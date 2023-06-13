var Mario,MarioStandingImg,MarioJumpingImg;
var goomba,goombaWalkingRightImg,goombaWalkingLeftImg;
var coin, coinImg;
var Ground,GroundImg;


function preload(){
MarioStandingImg = loadImage("MarioStanding.png")
MarioJumpingImg = loadImage("MarioJumping.png")
GroundImg = loadImage("Background.jpg")
goombaWalkingRightImg = loadImage("goomba-walk1.png")
goombaWalkingLeftImg = loadImage("goomba-walk2.png")
coinImg=loadImage("coing.png")
}

function setup() {
  createCanvas(800,400);

  Mario = createSprite(100,350, 10, 10);
  Mario.addImage(MarioStandingImg)
  Mario.scale=3
  Mario.debug=false;
  Mario.setCollider("rectangle",0,0,15,20 );

  goomba = createSprite(300,325,20,20)
  goomba.addImage(goombaWalkingLeftImg);
  goomba.scale=.3
  goomba.debug=false;
  goomba.setCollider("rectangle",0,-46,90,30)

  

  Ground = createSprite(400,375,1000,50);
  Ground.visible=false;
}

function draw() {
  background(GroundImg);
  drawSprites();

  if (keyDown("RIGHT_ARROW"||touches.length>0)){
    Mario.x+=5
  }
  
  if (keyDown("LEFT_ARROW"||touches.length>0)){
    Mario.x-=5
  }
  
  if (keyDown("UP_ARROW")&& Mario.y>=0){
    Mario.y-=5
    Mario.addImage(MarioJumpingImg);
  }

  Mario.velocityY = Mario.velocityY+.2

 if(Mario.collide(Ground)){
  Mario.addImage(MarioStandingImg);
 }
 if(Mario.collide(goomba)){
  coin = createSprite(300,325,20,20)
  coin.addImage(coinImg)
  coin.scale=.1
  Mario.addImage(MarioStandingImg);
  goomba.destroy();
 }
}