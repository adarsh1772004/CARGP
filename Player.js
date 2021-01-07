class Player
{
    constructor()
    {
     this.name=null
     this.distance=0
     this.position=0 
     this.rank=null  
    }
    readPlayerCount()
    {
        var gameState=database.ref("playerCount")
        gameState.on("value",function(data){
          Count=data.val()  
        })
    }
    writePlayerCount(A){
        database.ref("/")
        .update({
            "playerCount":A
            
        }) 
    }
    updateName(name)
    {
        var C="Allplayers/player"+this.position
        database.ref(C)
        .set({
            "name":this.name,
            "distance":this.distance,
            "rank":this.rank,
        })
    }
    readAllPlayers()
    {
        var cars=database.ref("Allplayers")
        cars.on("value",function(data){
          Allplayers=data.val()  
        })
    }
    readCarsAtTheEnd()
    {
        var gameState=database.ref("carAtTheEnd")
        gameState.on("value",function(data){
          carAtTheEnd=data.val()  
        })
    }
    static writeCarsAtEnd(A){
        database.ref("/")
        .update({
            "carAtTheEnd":A
            
        }) 
    }
}