var ScoreBoard = {
    update: function(score, ctx) {
        this.w = 50
        this.h = 40
            //this.dx = 10
        ctx.font = "30px sans-serif"
        ctx.fillStyle = "white"
        ctx.fillText("score:" + Math.floor(score), 50, 50)
            //ctx.fillText("score: 100");

    }


}