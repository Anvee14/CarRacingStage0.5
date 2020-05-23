class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
     // player.getCount();
      var playerCountRef = await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
        playerCount  = playerCountRef.val()
        player.getCount()


      }
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide()
    text("Game Start",300,200)
    Player.getPlayersInfo()
    
  
    if(allPlayers!== undefined){
      var displayPos = 100
      for(var plr in allPlayers){
        if(plr =="player"+player.index){
          fill("red")
        }
       
       displayPos += 40
       text(allPlayers[plr].name+    allPlayers[plr].distance,200,displayPos)
    }
  }
    if(keyIsDown(UP_ARROW)&&player.index !== null){
         player.distance+=50
         player.update()
    }
    
    
       
    
      
  }
}

