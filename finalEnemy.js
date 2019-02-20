function Finalenemy(game) {
    this.game = game
    this.x = this.game.canvas.width;
    this.y = this.game.canvas.height - 160;
    this.img = new Image
    this.img.src = "img/Vader.png"

    this.dx = 5
    this.w = 120
    this.h = 190

}

Finalenemy.prototype.paint = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

Finalenemy.prototype.move = function() {
    this.x -= this.dx;
}