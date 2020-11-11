var Jungle;
var stonesGroup;
var bananasGroup;
var count;
var monkey;
var backdrop;
var stone;
var banana;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var j;
var b;
var s;



function preload(){
  m1 = loadImage("Monkey_01.png");
  m2 = loadImage("Monkey_02.png");
  m3 = loadImage("Monkey_03.png");
  m4 = loadImage("Monkey_04.png");
  m5 = loadImage("Monkey_05.png");
  m6 = loadImage("Monkey_06.png");
  m7 = loadImage("Monkey_07.png");
  m8 = loadImage("Monkey_08.png");
  m9 = loadImage("Monkey_09.png");
  m10 = loadImage("Monkey_10.png");
  j = loadImage("jungle.png");
  b = loadImage("banana.png");
  s = loadImage("stone.png");
  
}
function setup() {
  createCanvas(400, 400);
  backdrop = createSprite(200, 200);
  backdrop.velocityX = -3;
  backdrop.addImage("background",j);
  monkey = createSprite(60, 355, 20, 20);
  monkey.addAnimation("monkey",m1,m2,m3,m4,m5,m6,m7,m8,m9,m10);
  monkey.scale = 0.2;
  monkey.setCollider("circle", 0, 0, 300);
  bananasGroup = createGroup();
  stonesGroup = createGroup();
  count = 0;


}

function draw() {
  background(255);



  if (backdrop.x < 50) {
    backdrop.x = backdrop.width / 2;
  }

  if (keyDown("SPACE") && monkey.y > 200) {
    monkey.velocityY = -15;
  }

  monkey.velocityY = monkey.velocityY + 0.5;


  createEdgeSprites();
  monkey.bounceOff(topEdge, leftEdge, rightEdge);

  if (monkey.isTouching(bananasGroup)) {
    count++;
  }

  if (monkey.isTouching(stonesGroup)) {
    count--;
  }


  monkey.collide(bottomEdge);
  spwanBananas();
  spwanStones();
  drawSprites();


  textSize(20);
  textFont("Georgia");
  textStyle(BOLD);
  stroke("black");
  fill("black");
  text("Survival rate:" + count, 200, 175);

}

function spwanBananas() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(300, 370, 20, 20);
    banana.setAnimation("Banana",b);
    banana.scale = 0.1;
    banana.velocityX = -10;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth+ 0.5;
    banana.lifetime = 40;

    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

    bananasGroup.add(banana);


  }

}

function spwanStones() {
  if (World.frameCount % 300 === 0) {
    stone = createSprite(300, 345, 20, 20);
    stone.setAnimation("Stone",s);
    stone.scale = 0.3;
    stone.velocityX = -9.5;

    stone.lifetime = 42.1;

    stone.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    stone.setCollider("circle", 0, 0, 200);

    stonesGroup.add(stone);



  }
}