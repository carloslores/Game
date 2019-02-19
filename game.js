var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    score: undefined,
    keys: {
        top: 38,
        forward: 39,
        backward: 37,
        shoot: 32

    },

    init: function(id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.canvas.width = this.w
        this.canvas.height = this.h
        this._setDimensions()
        this.start()
        console.log("sywywywywy")

    },
    _setDimensions: function() {
        this.canvas.setAttribute("width", this.w)
        this.canvas.setAttribute("height", this.h)


    },


    start: function() {
        this.reset()
        this.interval = setInterval(function() {
            this.clear()
            this.framesCounter++
                if (this.framesCounter > 1000)
                    this.framesCounter = 0
            if (this.framesCounter % 50 === 0) {
                this.generateEnemy();
            }
            this.moveAll()
            this.paintAll()
            this.clearEnemy()
            if (this.youDied()) {
                console.log("YOU ARE DEAD")
                alert("YOU ARE DEAD")
            }
            if (this.youKill()) {
                console.log("YOU KILL")
            }
        }.bind(this), 1000 / this.fps);


    },
    reset: function() {
        this.background = new Background(this)
        this.player1 = new Player1(this)
        this.framesCounter = 0
        this.enemy = []
    },
    youDied: function() {
        return this.enemy.some(function(enem) {
            return (
                ((this.player1.positionX + this.player1.w - 60) >= enem.x &&
                    this.player1.positionX < (enem.x + enem.w) &&
                    this.player1.positionY + (this.player1.h) >= enem.y)

            )

        }.bind(this))

    },
    clearEnemy: function() {
        this.enemy = this.enemy.filter(function(enem) {
            return enem.x + enem.w >= 0;
        });
    },
    generateEnemy: function() {
        this.enemy.push(new Enemy(this))

    },
    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    paintAll: function() {
        this.background.paint()
        this.player1.paint()
        this.enemy.forEach(function(enem) { enem.draw(); });

    },
    moveAll: function() {
        this.player1.gravity()
        this.enemy.forEach(function(enem) { enem.move(); });
    }






}