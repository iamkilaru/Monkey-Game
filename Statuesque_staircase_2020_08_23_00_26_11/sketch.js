var monkey,monkeysize,monkeyAnimation;
var banana,bananas,bananaImage;
var stone,stones,stoneImage;
var ground,scene; 
function preload(){
  //scene=loadImage(jungle.png)
  //monkeyAnimation = loadImage(Monkey_01.png)
  //bananaImage=loadImage(banana.png)
  //stoneImage=loadImage(stone.png)
}
function setup() {
  createCanvas(600, 400);
  //create monkey
monkey = createSprite(100,350,200,200);
//monkey.addImage(monkeyAnimation);
monkey.scale = 0.1;

//create scoreing variable
time=0
  

//create banana and stone groups
bananas=createGroup();
stones=createGroup();

//create ground
ground = createSprite(300,370,600,20);
//ground.addImage(scene);

}

function draw() {
//set background to white
  background(255);
  
//jump when the up arrow key is pressed and duck when the down arrow key is pressed
  if(keyDown("UP_ARROW")&&monkey.y >= 350||keyDown("space") &&           monkey.y >= 350){
    monkey.velocityY = -20 ;
  }else if(keyDown("DOWN_ARROW")){
    monkey.scale=monkeysize-0.02;
    monkey.velocityY=monkey.velocityY+1;
  } else if(keyWentUp("DOWN_ARROW")){
    monkey.scale=monkeysize
  }
  
  //add gravity and floor
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  //functions for obstacles and bananas
  createBananas();
  createStones();
  
  if(bananas.isTouching(monkey)){
    bananas.destroyEach();
    monkeysize=monkey.scale=monkey.scale+0.02
  }
  
  drawSprites();
}
function createBananas(){
  if(World.frameCount % 80===0){
    banana=createSprite(610,random(100,400),200,200);
    banana.velocityX=-6;
    banana.scale=0.08;
    banana.addToGroup(bananas);
  }
}  

function createStones(){
  if(World.frameCount % 100==0){
    stone=createSprite(410,random(120,313.95),350,350);
    stone.velocityX=-7;
    stone.scale=0.1;
    stone.addToGroup(stones);
  }
}