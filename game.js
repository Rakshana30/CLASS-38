class Game{

    constructor(){}
    
    getState(){
        var gsref = database.ref('gameState');
        gsref.on("value",function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }

        car1 = createSprite(100,200,50,50);
        car2 = createSprite(300,200,50,50);
        car3 = createSprite(500,200,50,50);
        car4 = createSprite(700,200,50,50);

        cars = [car1,car2,car3,car4]
    }

    play(){
       form.hide();
        Player.getPlayerInfo()
        
        if(allPlayers !== undefined){
           // var y = 130
       
           var index = 0;
           var x = 0;
           var y ;
       
           for(var plr in allPlayers){

            index = index + 1;
            x = x + 200
            y = displayHeight - allPlayers[plr].distance
            cars[index - 1].x = x
            cars[index - 1].y = y

            if(index === player.index){
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index - 1].y 
                cars[index - 1].shapeColor = "red"
            }
            
           }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 30
            player.update();
        }
        drawSprites();
    }

    
}