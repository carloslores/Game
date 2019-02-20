function Bullet(game, x, y) {
    this.game = game;

    this.x = this.game.player1.positionX + game.player1.w / 2;
    this.y = this.game.player1.positionY + game.player1.h / 2.5;
    this.img = new Image
    this.img.src = "img/dagger.png"

    this.r = 5;
    this.w = 80
    this.h = 65

    this.vx = 10;
    this.vy = 1;

    this.gravity = 0.25;
}

Bullet.prototype.paint = function() {
    // this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        //  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        //  this.game.ctx.fill();
        //  this.game.ctx.closePath();
}

Bullet.prototype.move = function() {
    this.x += this.vx;

    // this.vy += this.gravity;
    // this.y += this.vy;

    // if (this.y > this.game.player1.y0 + this.game.player1.h) {
    //     this.vy *= -1;
    // }
};
Bullet.prototype.paintLaser = function() {
    this.x = this.game.finalenemy.x + game.finalenemy.w;
    this.y = this.game.finalenemy.y
    this.img = new Image
    this.img.src = "img/laser.jpg"
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}
Bullet.prototype.moveLaser = function() {
    this.x -= this.dx;
}