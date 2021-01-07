class Form
{
    constructor()
    {
        this.heading=createElement("h2")
        this.inputBox=createInput("Enter the Name")
        this.button=createButton("Play")
        this.Greating=createElement("h2")
        this.resetButton= createButton("reset")
    }
    hide()
    {
        this.inputBox.hide()
        this.button.hide()
        this.Greating.hide()
    }
   display()
   {
       console.log("Hii")
  
  this.heading.html("Multiplayer Car Racing")   
  this.heading.position(displayWidth/2, 0)
  
  this.inputBox.position(displayWidth/2, displayHeight/2)
  
  this.button.position(displayWidth/2,displayHeight/2+30)
  this.button.mousePressed(()=>
  {
      player.name=this.inputBox.value()
      this.inputBox.hide()
      this.button.hide()
      Count=Count+1
      player.position=Count
      player.writePlayerCount(Count)
     
     this.Greating.html("Hii "+player.name)
     this.Greating.position(displayWidth/2-70,displayHeight/4)
      player.updateName()
  })
  this.resetButton.position(displayWidth-100,20)
  this.resetButton.mousePressed(()=>{
      player.writePlayerCount(0)
      var C=database.ref("Allplayers")
      C.remove()
      game.writeGameState(0)
  })
   }
}