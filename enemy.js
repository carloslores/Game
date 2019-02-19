function Enemy(game) {
    this.game = game
    this.x = this.game.canvas.width;
    this.y = this.game.player1.y + this.game.player1.h - this.h - 5;
    this.img = new Image()
    this.img.src = "img/walker.png"

    this.w = 70
    this.h = 140




}
Enemy.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
};