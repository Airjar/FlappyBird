
var flag
var y
var gameState = "play"
function preload(){
  bird1 = loadImage("img/newbird.png");
  bgimg = loadImage("img/bg1.png");
  pipe_2 = loadImage("img/pipe2.png");
  pipe_3 = loadImage("img/pipe3.png");
  wall = loadImage("img/wall.png");
}


function setup() {
  createCanvas(800,600);
  bird = createSprite(400, 200, 50, 50);
  bird.addImage("bird", bird1);
  bird.scale = 0.3
  wall1 = createSprite(400,650,800,200)
  wall1.addImage("wall", wall)
  wall1.scale = 4
  pipeGroup = new Group() 
  pipeGroup2 = new Group()
}


function draw() {
  background(bgimg);

  if(gameState == "play"){
    bird.velocityY = 2

    if(keyDown("space")){
      bird.velocityY = -3
    }
    
    if(bird.isTouching(wall1) || bird.isTouching(pipeGroup) 
    || bird.isTouching(pipeGroup2)){
      gameState == "end"
    }

    bird.collide(wall1)
    pipe2();
    pipe3();
    console.log(pipeGroup)
    console.log(gameState)
  }
  

  //if(gameState == "end")

  drawSprites();
    
 

 
 
}

function pipe3(){

  if(frameCount%200 == 0){
    pipe1 = createSprite(800,y)
    pipe1.addImage("pipe", pipe_3)
    pipe1.velocityX = -2.5
    if(flag == 1){
      pipe1.y = random(0,100)
    } else{
      pipe1.y = random(0,200)
    }
    wall1.depth = pipe1.depth + 1
    
    pipeGroup.add(pipe1)
  }

}
function pipe2(){

  if(frameCount%200 == 0){
    pipe = createSprite(800,random(500,350))
    pipe.addImage("pipe", pipe_2)
    pipe.velocityX = -2.5
    if(pipe.y > 200){
      flag = 1
    }
  
    pipeGroup2.add(pipe)
  }
  

}