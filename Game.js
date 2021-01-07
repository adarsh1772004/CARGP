class Game
{
    constructor()
    {
        
    }
    readGameState()
    {
        var gameState=database.ref("gameState")
        gameState.on("value",function(data){
          State=data.val()  
        })
    }
    writeGameState(A){
        database.ref("/")
        .update({
            "gameState":A
            
        }) 
    }
    startTheGame()
    {
        if(State==0){
            player=new Player()
            player.readPlayerCount()
            form=new Form()
            form.display()
        }
        car1=createSprite(200, 100, 100, 100)
        car1.addImage(carImg1);
        car2=createSprite(300, 100, 100, 100)
        car2.addImage(carImg2)
        car3=createSprite(400, 100, 100, 100)
        car3.addImage(carImg3)
        car4=createSprite(500, 100, 100, 100)
        car4.addImage(carImg4)
        cars.push(car1)
        cars.push(car2)
        cars.push(car3)
        cars.push(car4)

    }
    playGame()
    {
        form.hide()
        image(trackImg,0,-displayHeight*4,displayWidth, displayHeight*10)
        var y=100
        var x=200
        var i=0
       player.readAllPlayers()
      player.readCarsAtTheEnd()
       for(var p in Allplayers) 
       {
        x=x+250
           y=displayHeight-Allplayers[p].distance
           cars[i].x=x
           cars[i].y=y
           if(i+1==player.position){
               camera.position.x=displayWidth/2
               camera.position.y=cars[i].y
           }
           i=i+1
       }
       drawSprites()
       
       
       if(keyIsDown(UP_ARROW))
       {
           player.distance=player.distance+10
           player.updateName()
       }
       if(player.distance>4150)
       {
         player.rank=carAtTheEnd+1
         player.updateName()
         Player.writeCarsAtTheEnd(player.rank)  
         State=2
       }
    }
    endGame(){
        console.log(player.rank)
    }
}