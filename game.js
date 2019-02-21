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
        this.vaderSound = new Audio("sound/Vader.mp3")
        this.mainSound = new Audio("sound/Main.mp3")
        this.screamSound = new Audio("sound/Scream.mp3")


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
                if (this.scor < 50) {
                    this.generateEnemy()
                } else {
                    this.generateFinalEnemy()
                    this.vaderSound.play()
                    this.pushEnemy = []
                }

            }

            this.mainSound.play()
            this.moveAll()
            this.paintAll()

            this.clearEnemy()
            if (this.youDied()) {
                this.scor -= 0.5
                    // alert("YOU ARE DEAD")
            }
            if (this.vaderShoot()) {
                // this.scor = -100
            }

            if (this.youKill()) {
                this.scor + 10

            }
        }.bind(this), 1000 / this.fps);


    },
    stop: function() {
        clearInterval(this.interval)
    },
    gameOver: function() {
        this.stop()
    },
    reset: function() {
        this.background = new Background(this)
        this.player1 = new Player1(this)
            //this.surpriseCharacter = new SurpriseCharacter(this)
            // this.finalenemy = new Finalenemy(this)
        this.framesCounter = 0
        this.score = ScoreBoard
        this.enemy = []
        this.vader = []
        this.scor = 0

    },
    youDied: function() {
        return this.enemy.some(function(enem) {
            return (
                ((this.player1.positionX + this.player1.w - 60) >= enem.x &&
                    this.player1.positionX < (enem.x + enem.w) &&
                    this.player1.positionY + (this.player1.h) >= enem.y &&
                    this.player1.positionY + (this.player1.h - 60) >= enem.y)

            )

        }.bind(this))


    },
    vaderShoot: function() {
        // if (this.vade.bullet !== undefined) {
        return this.vader.some(function(vade) {

                return vade.bullet.some(function(benem) {
                    return (
                        ((this.player1.positionX + this.player1.w - 60) >= benem.x &&
                            this.player1.positionX < (benem.x + benem.w) &&
                            this.player1.positionY + (this.player1.h) >= benem.y &&
                            this.player1.positionY + (this.player1.h - 60) >= benem.y)

                    )

                }.bind(this))
            }.bind(this))
            // }
        console.log("kill by vader")
    },

    youKill: function() {
        var kill = false;

        this.enemy.forEach(function(enemy, r) {
            this.player1.bullets.forEach(function(bullet, i) {
                if (bullet.x + bullet.w > enemy.x && bullet.y + bullet.w > enemy.y && bullet.x < (enemy.x + enemy.w)) {
                    this.player1.bullets.splice(i, 1);
                    this.enemy.splice(r, 1);
                    this.scor += 10
                    this.screamSound.play()
                    if (this.scor >= 50) {
                        this.generateFinalEnemy()
                            // this.game.init.vaderSound.play()
                        this.pushEnemy = []

                        // this.scor - 0.5

                    } //else if (this.scor >= 10) {
                    //  this.genetateSurpriseCharacter()

                    //}
                }

            }.bind(this))
        }.bind(this))
        this.vader.forEach(function(vade, r) {
            this.player1.bullets.forEach(function(bullet, i) {
                if (bullet.x + bullet.w > vade.x && bullet.y + bullet.h > vade.y && bullet.x < (vade.x + vade.w)) {
                    this.player1.bullets.splice(i, 1);
                    this.vader.splice(r, 1);
                    this.scor += 10

                }

            }.bind(this))
        }.bind(this))

        /*
                return this.enemy.some(function(enem) {
                    return this.player1.bullets.some(function(bullet) {

                        bullet.x + bullet.w > enem.x


                        return this.enemy.shift()


                    }.bind(this))


                }.bind(this))*/


    },

    clearEnemy: function() {
        this.enemy = this.enemy.filter(function(enem) {
            return enem.x + enem.w >= 0;
        });
    },
    generateEnemy: function() {


        function aleatirio(max, min) {
            return Math.round(Math.random(pushEnemy) * (max - min) + min)

        }

        var randomEnemy = aleatirio(6, 1)
        if (randomEnemy >= 3) {
            var pushEnemy = this.enemy.push(new Enemy(this))

        }
        if (this.scor >= 50) {
            this.generateFinalEnemy()
                // this.game.init.vaderSound.play()
            this.pushEnemy = []

            // this.scor - 0.5

        }
        return randomEnemy


    },
    generateFinalEnemy: function() {


        this.vader.push(new Finalenemy(this))

    },

    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    paintAll: function() {
        this.background.paint()
        this.player1.paint()
        this.vader.forEach(function(fenem) {
                fenem.paint();

                fenem.bullet.forEach(function(b) {

                    b.paint()
                })

            })
            // this.finalenemy.shoot()
            //this.finalenemy.shoot()
        this.enemy.forEach(function(enem) { enem.draw(); })


        this.paintScore()

    },
    moveAll: function() {
        // this.player1.gravity()
        this.player1.move()
        this.vader.forEach(function(fenem) { fenem.move(); })
            // this.finalenemy.shoot()
            // this.finalenemy.move()

        this.enemy.forEach(function(enem) { enem.move(); });


    },
    // genetateSurpriseCharacter: function() {
    // console.log("paso por enetateSurpriseCharacter ")
    //     this.surpriseCharacter.paint()
    //     this.surpriseCharacter.move()
    //     this.surpriseCharacter = new SurpriseCharacter(this)
    // },
    paintScore: function() {
        this.score.update(this.scor, this.ctx)
    }
}