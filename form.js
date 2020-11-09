class Form{

    constructor(){

        this.input = createInput("Name")
        this.button = createButton('play')
        this.greeting = createElement('h3');
        this.title = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
        
    }

    display(){

        
        this.title.html("MuiltPlayer Car Racing Game");
        this.title.position(displayWidth/2-50,10);
       
        this.input.position(displayWidth/2-30,displayHeight/2-20)
       
       this.button.position(displayWidth/2+30,displayHeight/2+20);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("Hello" + name)
            this.greeting.position(displayWidth/2-30,displayHeight/2-60);

        })

    }

}