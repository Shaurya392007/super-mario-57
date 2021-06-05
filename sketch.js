var platform, platformGroup;
var mario;
var groundImage, marioImage;
var wallImage;
var wall;
var obstacleImage;
var obstacle , obstacleGroup;
var flag , flagImage;
var PLAY = 1;
var LOSE = 0;
var WIN = 2;
var gameState = PLAY;

function preload()
{
  groundImage = loadImage("images/ground.png");
  marioImage = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  wallImage = loadImage("images/wall.png");
  obstacleImage = loadImage("images/obstacle1.png");
  flagImage = loadImage("images/Flag.png")
}

function setup() {
  createCanvas(displayWidth, 700);

  var xPosition = 0;
  var gap;

  mario = new Player();
  platformGroup = new Group;
  obstacleGroup = new Group;



  for(i=0; i<20; i++)
  {
    platform = new Platform(xPosition);
    gap = random(80,120);
    xPosition = xPosition + platform.sptW + gap;
    platformGroup.add(platform.spt);

    if(i%2 === 0){
  wall = new Wall(xPosition);
    }
  platformGroup.add(wall.spt);

  if(i%3 === 0){
    obstacle = new Obstacle(xPosition);
    obstacleGroup.add(obstacle.spt);

  }  
  
  }

  flag = createSprite(xPosition - 365 , 350)
  flag.addImage("flag" , flagImage)
  flag.scale = 0.08;

 
}

function draw() {
  background('skyblue');

  translate(-mario.spt.x + width/2,0);

if(gameState === PLAY)
{

  mario.applyGravity();  
  mario.spt.collide(platformGroup);

  if(keyDown("left"))
  {
    mario.moveLeft();
  }

  if(keyDown("right"))
  {
    mario.moveRight();
  }

  if(keyDown("up") && mario.spt.velocityY === 0)
  {
    mario.jump();
  }
if(obstacleGroup.isTouching(mario.spt) || mario.spt.y>height)
{
  gameState = LOSE;
}
if(flag.isTouching(mario.spt))
{
gameState = WIN;
}
}
else if(gameState === LOSE)
{
textSize(70);
text("GAME OVER" ,mario.spt.x  ,210 )
obstacleGroup.destroyEach();
mario.spt.setVelocity(0,0);
mario.spt.pause();

}
else if(gameState === WIN)
{
textSize(100);
text("WINNER" ,mario.spt.x  ,350 )
obstacleGroup.destroyEach();
mario.spt.setVelocity(0,0);
mario.spt.pause();

}
 
  drawSprites();

}

