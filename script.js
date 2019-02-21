window.onload = function() {
    document.getElementById("start").onclick = function() {
        Game.init("game-board")
        document.getElementById("start").style.display = "none"
        document.getElementById("header").style.display = "none"
        document.getElementById("instructions").style.display = "none"
    }
}