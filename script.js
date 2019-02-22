window.onload = function() {
    // document.getElementById("game-board").style.display = "none"
    // document.getElementById("gameover").style.display = "none"
    document.getElementById("start").onclick = function() {
        //   document.getElementById("game-board").style.display = "block"
        Game.init("game-board")
            // document.getElementById("gameover").style.display = "block"
            // document.getElementById("start").style.display = "none"
        document.getElementsByClassName("gamePage")[0].style.display = "none"
            // document.body.style.backgroundImage = "none"
            // document.getElementById("instructions").style.display = "none"
    }
}