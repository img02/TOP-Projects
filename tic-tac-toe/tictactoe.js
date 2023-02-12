/* eslint-disable no-plusplus */

// const gameBoard = ["", "", "", "", "", "", "", "", ""];
/**
 *  HTML elements class names / Ids
 */
const gameBoardClass = "game_board_grid";
const gameSquareClass = "game_square";
const playButtonID = "play_button";

const playerFactory = (name, piece) => ({ name, piece });

const game = (() => {
    // state
    const gameBoard = ["x", "x", "X", "o", "o", "o", "X", "o", "x"];
    let state = "playing"; // playing, won
    let playerOne;
    let playerTwo;
    let currentPlayer;
    // functions for starting a game
    const clearBoard = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = "";
        }
    };
    const newGame = (nameOne, nameTwo) => {
        playerOne = playerFactory(nameOne, "X");
        playerTwo = playerFactory(nameTwo, "O");
        currentPlayer = playerOne;
        state = "playing";
        clearBoard();
    };

    // making moves
    const validateMove = (move) => {
        if (move < 0 || move > gameBoard.length - 1) return false;
        if (gameBoard[move] !== "") return false;
        return true;
    };
    function hasGameWon() {
        return false;
        // check squares around placed piece
        // corners are 0, 2, 6, 8

        // mid-sides are 1, 3, 5, 7

        // middle is 4

        //
    }
    // returns true if winning move
    const makeMove = (move) => {
        if (!validateMove(move)) return false;
        // place players piece and change current player
        gameBoard[move] = currentPlayer.piece;

        if (hasGameWon()) {
            state = "won";
            return true;
        }

        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        return false;
    };

    return { newGame, makeMove, state, gameBoard, currentPlayer };
})();

/*
     display game on web page
*/

const display = (() => {
    // update game state
    const updateGameBoard = () => {
        // todo, update html grid values
        // check if winner
    };

    /* draw game board grid and button */
    const body = document.getElementsByTagName("body");
    function drawGameBoard() {
        const grid = document.createElement("grid");
        grid.classList.add(gameBoardClass);
        body[0].appendChild(grid);
        for (let i = 0; i < game.gameBoard.length; i++) {
            const gameSquare = document.createElement("div");
            // set class and id
            gameSquare.classList.add(gameSquareClass);
            gameSquare.id = `game_square_${i}`;
            gameSquare.textContent = game.gameBoard[i];
            // append to board grid
            grid.appendChild(gameSquare);
        }
    }
    function addPlayButton() {
        const playButton = document.createElement("button");
        playButton.id = playButtonID;
        playButton.textContent = "Start Game";
        body[0].appendChild(playButton);
    }
    /* 
    Subscribe to the click events on the game board / grid + button
 */
    function subscribeGameboardClicks() {
        const board = document.getElementsByClassName(gameSquareClass);
        for (let i = 0; i < board.length; i++) {
            board[i].addEventListener("click", (e) => {
                e.preventDefault();
                game.makeMove();
                updateGameBoard();
                console.log(`square ${i} clicked`);
            });
        }
    }
    function subscribePlayButton() {
        const playButton = document.getElementById(playButtonID);
        playButton.addEventListener("click", (e) => {
            e.preventDefault();
            // hide button
            game.newGame();
            console.log(`play clicked`);
        });
    }
    // set up the page
    const setup = () => {
        drawGameBoard();
        addPlayButton();
        subscribeGameboardClicks();
        subscribePlayButton();
    };

    return { setup, updateGameBoard };
})();

// startup code

display.setup();
