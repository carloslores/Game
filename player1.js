function Player1(game) {
    this.game = game
    this.x = this.game.canvas.width * 0.08
    this.y0 = this.game.canvas.height * 0.08
    this.y = this.y0

    this.img = new Image
    this.img.src = "img/Jon.png"

    this.w = 100
    this.h = 200
    this.vy = 1
    this.positionY = 500
    this.positionX = 160

    this.setListerner()

}
Player1.prototype.paint = function() {

    this.game.ctx.drawImage(this.img, this.positionX, this.positionY, this.w, this.h)



}
Player1.prototype.setListerner = function() {

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case this.game.keys.top:
                this.jump()
                console.log("rqrqrqrqrqqr")
                break
            case this.game.keys.forward:
                this.moveF()
                break
            case this.game.keys.backward:
                this.moveB()
                break


        }

    }.bind(this)


}

Player1.prototype.jump = function() {

    this.positionY -= 80
    this.player1.gravity()
}
Player1.prototype.moveF = function() {
    if (this.positionX + 20 <= this.game.canvas.width - this.w) {


        this.positionX += 20
    }
}
Player1.prototype.moveB = function() {
    if (this.positionX - 20 <= this.game.canvas.width - this.w) {
        this.positionX -= 20
    }
}
Player1.prototype.gravity = function() {
    var gravity = 1.8


    if (this.positionY + gravity <= this.game.canvas.height - this.h) {
        this.positionY += gravity
    }
    console.log("odio a Newton")


}