var database;
var State=0
var Count=0
var game
var player
var form
var carAtTheEnd=0
var car1, car2, car3, car4;
var Allplayers
var cars=[]
function preload(){
carImg1=loadImage("car1.png")
carImg2=loadImage("car2.png")
carImg3=loadImage("car3.png")
carImg4=loadImage("car4.png")
trackImg=loadImage("track.jpg")
trackImg2=loadImage("track.png")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database()
   game=new Game()
   game.readGameState()
   game.startTheGame()
}

function draw(){
    background("white");
   if(Count==4)
   {
       game.writeGameState(1)
   }
   if(State==1)
   {
       game.playGame()
   }
}
