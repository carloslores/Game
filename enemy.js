function Enemy(game) {
    this.game = game
    this.x = this.game.canvas.width;
    this.y = this.game.canvas.height - 130;
    this.img = new Image()
    this.img.src = "img/walker.png"

    this.dx = 5
    this.w = 150
    this.h = 140




}
Enemy.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

};

Enemy.prototype.move = function() {
    this.x -= this.dx;
};