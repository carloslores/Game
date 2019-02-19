function Player1(game) {
    this.game = game
    this.x = this.game.canvas.width * 0.08
    this.y0 = this.game.canvas.height * 0.08
    this.y = this.y0

    this.img = new Image
    this.img.src = "img/Jon.png"

    this.w = 70
    this.h = 140
    this.vy = 1
    this.positionY = 335
    this.positionX = 150
    this.bullets = []

    this.setListerner()

}
Player1.prototype.paint = function() {

    this.game.ctx.drawImage(this.img, this.positionX, this.positionY, this.w, this.h);


    this.bullets = this.bullets.filter(function(bullet) {
        return bullet.x < this.game.canvas.width;
    }.bind(this));

    this.bullets.forEach(function(bullet) {
        bullet.paint();
        bullet.move();
    });


}
Player1.prototype.setListerner = function() {

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case this.game.keys.top:
                this.jump()
                console.log("rqrqrqrqrqqr")
                break;
            case this.game.keys.forward:
                this.moveF()
                break;
            case this.game.keys.backward:
                this.moveB()
                break;
            case this.game.keys.shoot:
                this.shoot()
                break;


        }

    }.bind(this)


}

Player1.prototype.gravity = function() {
    var gravity = 1.8


    if (this.positionY + gravity <= this.game.canvas.height - this.h) {
        this.positionY += gravity
    }

}


Player1.prototype.jump = function() {
    if (this.positionY - 140 > 0 && this.positionY - 140 >= this.h) {
        this.positionY -= 140
        this.gravity()

    }
}
Player1.prototype.moveF = function() {
    if (this.positionX + 20 <= this.game.canvas.width - this.w) {


        this.positionX += 20
    }
}
Player1.prototype.moveB = function() {
    if (this.positionX - 20 > 0) {
        this.positionX -= 20
    }
}
Player1.prototype.shoot = function() {
    console.log("paso por aquí")
    var bullet = new Bullet(this.game, this.positionX + 300, this.positionY + this.h / 2)

    this.bullets.push(bullet)
    console.log("hahahaha")
}


/*Player1.prototype.shoot = function() {
    /* this.img = new Image()
     this.img.src = "img/espada.png"
     var sword = this.img.src
    sword = new Sword(this.game, this.x + this.w, this.y + this.h / 2)
    this.swords.push(sword)

}
*/

// hacer una function creadora de armas