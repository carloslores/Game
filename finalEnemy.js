function Finalenemy(game) {
    this.game = game
    this.x = this.game.canvas.width;
    this.y = this.game.canvas.height - 200;
    this.img = new Image
    this.img.src = "img/Vader.png"

    this.dx = 5
    this.w = 120
    this.h = 190
    this.bullet = []

    this.shootlaser()

}

Finalenemy.prototype.paint = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

Finalenemy.prototype.shootlaser = function() {

    var laser = new EnemyBullet(this.game, this.x, this.y + this.h / 2)
    this.bullet.push(laser)
}
Finalenemy.prototype.move = function() {
    var movIn
    movIn = this.x -= this.dx;
}