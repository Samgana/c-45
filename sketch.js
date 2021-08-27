var p1,p2,asteroid1, asteroid2, asteroid3; 
var blast,blastImage , space,spaceImage;
var spaceship,spaceshipImage, laserImage;
var shoot = 0;
var score=0;
var laser, asteroidGroup, laserGroup;
var explosionSound,laserSound, laserGroup;
var explosionImage;
var instruction = 0;
var play = 1;
var end = 2;
var gameState = instruction;
var endline, canvas;

function preload(){
spaceImage = loadImage("space.png");
spaceshipImage = loeadImage("spaceship.png");
laserImage = loadImage("laser.png");
asteroid1 = loadImage("as1.png");
asteroid2 = loadImage("as2.png");
asteroid3 = loadImage("as3.png");
blastImage = loadImage("blast.png");

}
