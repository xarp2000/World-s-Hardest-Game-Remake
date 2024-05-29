var life = 0;
var enemy1, enemy2, enemy3, enemy4;
var boundary1, boundary2;
var bob;

function setup(){
boundary1 = createSprite(190, 120, 420, 3);
boundary1.shapeColor = "black";
boundary2 = createSprite(190, 260, 420, 3);
boundary2.shapeColor = "black";
enemy1 = createSprite(125, 130, 10, 10);
enemy2 = createSprite(175, 250, 10, 10);
enemy3 = createSprite(225, 130, 10, 10);
enemy4 = createSprite(275, 250, 10, 10);
bob = createSprite(50, 190, 10 ,10);
bob.shapeColor = "red"
enemy1.shapeColor = "blue"
enemy2.shapeColor = "blue"
enemy3.shapeColor = "blue"
enemy4.shapeColor = "blue"

enemy1.velocityY = 3;
enemy2.velocityY = -3;
enemy3.velocityY = 3;
enemy4.velocityY = -3;
}
function draw(){
background(200);
fill('lightgreen')
rect(0, 120, 52, 140)

fill('lightgreen')
rect(345, 120, 52, 140)
drawSprites()
enemy1.bounceOff(boundary1)
enemy1.bounceOff(boundary2)
enemy2.bounceOff(boundary1)
enemy2.bounceOff(boundary2)
enemy3.bounceOff(boundary1)
enemy3.bounceOff(boundary2)
enemy4.bounceOff(boundary1)
enemy4.bounceOff(boundary2)
bob.bounceOff(boundary1)
bob.bounceOff(boundary2)

if(keyDown("right")){
bob.x = bob.x + 2
}
if(keyDown("left")){
bob.x = bob.x - 2
}
if(keyDown("up")){
bob.y = bob.y - 2
}
if(keyDown("down")){
bob.y = bob.y + 2
}
if(bob.isTouching(enemy1)){
bob.x = 20;
bob.y = 190;
}
if(bob.isTouching(enemy2)){
bob.x = 20;
bob.y = 190;
}
if(bob.isTouching(enemy3)){
bob.x = 20;
bob.y = 190;
}
if(bob.isTouching(enemy4)){
bob.x = 20;
bob.y = 190;
}
}