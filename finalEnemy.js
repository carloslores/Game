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

    setTimeout(function() { return this.shoot() }.bind(this), 100)

}

Finalenemy.prototype.paint = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    this.lasers = this.bullet.filter(function(laser) {
        return laser.x < this.game.canvas.width;
    }.bind(this));

    this.lasers.forEach(function(bullet) {
        bullet.paint();
        bullet.move();
        // this.shoot()
    }.bind(this));
    //this.shoot()
    // this.move()

}
Finalenemy.prototype.shoot = function() {

    var laser = new Bullet(this.game, this.y, this.x + this.h / 2, "img/laser.jpg")

    this.bullet.push(laser)
}
Finalenemy.prototype.move = function() {
    this.x -= this.dx;
}