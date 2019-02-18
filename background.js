function Background(game) {
    this.game = game
    this.img = new Image()
    this.img.src = "img/wall.jpg"

    this.x = 0
    this.y = 0


}
Background.prototype.paint = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height)
}