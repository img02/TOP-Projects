/* eslint-disable no-plusplus */
const gameBoard = ["x", "x", "X", "o", "o", "o", "X", "o", "x"];
// const gameBoard = ["", "", "", "", "", "", "", "", ""];

// create gameboard factory or module?
// newBoard
// resetBoard
// checkIfWin() -> returns string winning piece, or returns bool, called after every move?
// makeMove(piece, position) -> bool -> checkValidMove(position)

// totalMoves
// state = playing, won

// or create a 'game' object that has a gameBoard and two players?
// basically a viewModel, with 2 models

function createPlayer(name, icon) {
    // name
    // piece / icon
    // wins
    // losses
}

///

/*
    Functions for playing the game
        and making moves
*/
function updateBoardInfo() {
    // update the html of the game info
    // current player to move..
    // current move..
    // etc.
}

function makeMove(player) {
    const move = getMove(player);
    gameBoard.makeMove(player.piece, move);
    updateBoardInfo();
    // return true if game won with this move.
    if (gameBoard.state === "won") return true;
    return false;
}

function getMove(player) {
    // validates and return the move...
}

function gameLoop() {
    if (makeMove(playerOne)) return;
    if (makeMove(playerTwo)) return;
}

function startGame() {
    while (gameBoard.state === "playing") {
        gameLoop();
    }
    showWinner();
    showPlayButton();
}

/* 
    Subscribe to the click evens on the game board / grid
 */
function subscribeGameboardClicks() {
    const board = document.getElementsByClassName("gameBoardSquare");
    board.forEach((square) => {
        square.addEventListener("click", (e) => {
            e.preventDefault();
            game.MakeMove();
        });
    });
}

/* draw game board grid */
function drawGameBoard() {
    const body = document.getElementsByTagName("body");
    const grid = document.createElement("grid");
    grid.textContent = "fdsafasd";
    grid.classList.add("game_board_grid");
    body[0].appendChild(grid);
    for (let i = 0; i < gameBoard.length; i++) {
        const gameSquare = document.createElement("div");
        // set class and id
        gameSquare.classList.add("game_square");
        gameSquare.id = `game_square_${i}`;
        gameSquare.textContent = gameBoard[i];
        // append to board grid
        grid.appendChild(gameSquare);
    }
}

function updateGameBoard() {}

// startup code

drawGameBoard();

const playButton = document.getElementById("play_button");
playButton.addEventListener("click", (e) => {
    e.preventDefault();
    // hide button
    startGame();
});

subscribeGameboardClicks();
