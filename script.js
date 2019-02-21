window.onload = function() {
    document.getElementById("game-board").style.display = "none"
    document.getElementById("start").onclick = function() {
        document.getElementById("game-board").style.display = "block"
        Game.init("game-board")
        document.getElementById("start").style.display = "none"
        document.getElementById("header").style.display = "none"
        document.getElementById("instructions").style.display = "none"
    }
}