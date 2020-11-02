//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
// var ghost, asterisk;

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const ground = 550;
let bg;
let Lh;
let LhAnim;
let doggy;
let coffee;
let bird; 
let dog2;
let cat;
let rabbit;


//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

  const LhSpritesheet = loadSpriteSheet("img/32littleHeart.png", 32, 32, 6);
  LhAnim = loadAnimation(LhSpritesheet);
  Lh = createSprite(CANVAS_WIDTH / 2, ground, 32, 32);
  Lh. moveSpeed = 5;
  Lh.scale = (2.0)

  const doggySpritesheet = loadSpriteSheet("img/littleWhite!.png", 96, 96, 6);
  doggy = loadAnimation(doggySpritesheet)

  const coffeeSpritesheet = loadSpriteSheet("img/coffee.png", 64, 64, 6);
  coffee = loadAnimation(coffeeSpritesheet)

  const BirdSpriteSheet = loadSpriteSheet("img/Bird.png", 32, 32, 6);
  bird = loadAnimation(BirdSpriteSheet)

  const dog2SpriteSheet = loadSpriteSheet("img/dog2.png", 96, 96, 6);
  dog2 = loadAnimation(dog2SpriteSheet)
  
  const catSpriteSheet = loadSpriteSheet("img/cat.png", 96, 96, 6);
  cat = loadAnimation(catSpriteSheet)

  const rabbitSpriteSheet = loadSpriteSheet("img/rabbit.png", 64,64, 6);
  rabbit = loadAnimation(rabbitSpriteSheet)

  bg= loadImage('img/Room.jpg')
  //create an animation from a sequence of numbered images

  
    

  //pass the first and the last file name and it will try to find the ones in between
//   ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');

//   //create an animation listing all the images files
//   asterisk = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  Lh. addAnimation("move", LhAnim);
  Lh. addImage("still", loadImage("img/Lh.png"));
  Lh. setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  Lh.limitSpeed(Lh.moveSpeed);
  drawSprite(object);
}



function draw() {
  background(bg);
  update(Lh);
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
//   animation(ghost, 300, 150);
//   animation(asterisk, 500, 150);
    animation(doggy, 150, 500);
    animation(coffee, 500, 400);
    animation(bird, 500, 200);
    animation(dog2, 220, 550);
    animation(cat, 120, 350);
    animation(rabbit, 50, 530);
}
