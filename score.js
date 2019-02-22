var ScoreBoard = {
    update: function(score, ctx) {
        this.w = 50
        this.h = 40

        ctx.font = "30px sans-serif"
        ctx.fillStyle = "white"
        ctx.fillText("Score: " + Math.floor(score), 50, 50)


    }


}