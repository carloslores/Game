window.onload = function() {


    document.getElementById("start").onclick = function() {

        Game.init("game-board")

        document.getElementsByClassName("gamePage")[0].style.display = "none"

    }

    document.getElementById("jon").onclick = function() {

        Game.init("game-board")

        document.getElementsByClassName("gamePage")[0].style.display = "none"


    }
}