class Player{

    constructor(){

        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getCount(){
        var pcref = database.ref('playerCount');
        pcref.on("value",function(data){
            playerCount = data.val();
            })
         }

         updateCount(count){
            database.ref('/').update({
                playerCount : count
            })
         }

         update(){
             var playerIndex = "players/player"+this.index;
             database.ref(playerIndex).set({
                 name : this.name,
                 distance : this.distance
             })
         }

        static getPlayerInfo(){
            var pi = database.ref('players');
            pi.on("value",function(data){
                allPlayers = data.val();
            })
         }



}