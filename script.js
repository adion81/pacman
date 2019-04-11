var world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
var mapping = {
    0: 'brick',
    1: 'coin',
    2: 'empty',
}
var pacman = {
    x: 1,
    y: 1
}
var score = 0;

function displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += '\n<div class="row">\n';
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 0) {
                output += "<div class='brick'></div>";
            }
            if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            if (world[i][j] == 2) {
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}
displayWorld();

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 30 + "px";
    document.getElementById('pacman').style.left = pacman.x * 30 + "px";
}
displayWorld();
displayPacman();

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

function winGame(){
    if(score === 152){
        alert("!!!!YOU WON THE GAME!!!!");
        window.location.reload();
    }
} 

document.onkeydown = function (e) {
    console.log(e);

    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] !== 0) {// LEFT
        if (pacman.x <= 0) {
            pacman.x = 30;
        }
        pacman.x--;
    }
    else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] !== 0) {//UP
        pacman.y--;
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] !== 0) {//Right
        if (pacman.x > 28) {
            pacman.x = -1;
        }
        pacman.x++;
    }
    else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] !== 0) {//DOWN
        pacman.y++;
    }
    if (e.keyCode == 37) {
        document.getElementById('pacman').style.transform = 'rotate(180deg)';
    }
    else if (e.keyCode == 38) {
        document.getElementById('pacman').style.transform = 'rotate(270deg)';
    }
    else if (e.keyCode == 39) {
        document.getElementById('pacman').style.transform = 'rotate(0deg)';
    }
    else if (e.keyCode == 40) {
        document.getElementById('pacman').style.transform = 'rotate(90deg)';
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 2;
        score += 1;
        displayWorld();
        displayScore();
    }
    displayPacman();
}

function gameLoop() {
    console.log("Game loop is running!");
    displayPacman();
    displayWorld();
    winGame();

}
setInterval(gameLoop, 1000);