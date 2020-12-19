var car;
var wall;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400,1500));
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "grey";
  car.velocityX = speed;
  wall = createSprite(1400, 600, 60, 200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255);  
  text("ALINA SUCKS", 50, 50)
  drawSprites();
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;
    if(deformation < 100){
      car.shapeColor = "green";
    }
    else if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car.shapeColor = "blue";
    }
  }
}