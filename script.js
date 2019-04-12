var world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
var mapping = {
    0: 'brick',
    1: 'coin',
    2: 'empty',
    3: 'superCoin'
}
var pacman = {
    x: 14,
    y: 7
}
var alive = true;

var superPac = false;

var enemies = [
    {
        x:13,
        y:3,
        name: "blinky"
    },
    {
        x:14,
        y:3,
        name: "inky"
    },
    {
        x:15,
        y:3,
        name: "orange"
    },
    {
        x:16,
        y:3,
        name: "pinky"
    }
];
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
            if (world[i][j] == 3) {
                output += "<div class='superCoin'></div>"
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

    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].x == pacman.x && enemies[i].y == pacman.y && superPac != true){
            alive = false;
            var message = '<h2>You DIED you ass clown!</h2><button onClick="newGame()">Play Again</button>';
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal').innerHTML = message;
        }
    }
}

function displayEnemies(){
    for(var i = 0; i < enemies.length; i++){
        document.getElementById(enemies[i].name).style.top = enemies[i].y * 30 + "px";
        document.getElementById(enemies[i].name).style.left = enemies[i].x * 30 + "px";
    }
}
function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
        
    }
    displayEnemies();
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}
function newGame(){
    window.location.reload();
}

function winGame(){
    if(score === 148){
        alive = false;
        // console.log("winning");
        var message = '<h2>WOW!!! What an accomplishment!</h2><button onClick="newGame()">Play Again</button>';
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modal').innerHTML = message;
    }
} 

document.onkeydown = function (e) {
    // console.log(e);

    if(alive === true){

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
        if (world[pacman.y][pacman.x] == 1 || world[pacman.y][pacman.x] == 3) {
            if(world[pacman.y][pacman.x] == 3){
                // console.log("!!!!SUPER!!!!");
                superPac = true;
            }
            world[pacman.y][pacman.x] = 2;
            score += 1;
            displayWorld();
            displayScore();
        }
        displayPacman();
    }

}

function gameLoop() {
    // console.log("Game loop is running!");
    displayPacman();
    displayEnemies();
    displayWorld();
    setInterval(moveEnemies, 1000);
    winGame();

}
if(alive === true){
    setInterval(gameLoop, 1000);
}