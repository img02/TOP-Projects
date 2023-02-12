/* eslint-disable no-plusplus */

// const gameBoard = ["", "", "", "", "", "", "", "", ""];
/**
 *  HTML elements class names / Ids
 */
const gameSquareClass = "game_square";

const gameBoardId = "game_board_grid";
const playButtonID = "play_button";
const winnerTextId = "winner_text";

const playButtonPlayText = "Play Game";
const playButtonRestartText = "Restart";

/**
 *  game states
 */

const wonState = "won";
const playingState = "playing";

const playerFactory = (name, piece) => ({ name, piece });

const game = (() => {
    // state
    const gameBoard = ["", "", "", "", "", "", "", "", ""];
    let state = playingState; // playing, won
    const playerOne = playerFactory("Player One", "X");
    const playerTwo = playerFactory("Player Two", "O");
    let currentPlayer = playerOne;
    // functions for starting a game
    const clearBoard = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = "";
        }
    };
    const newGame = () => {
        state = playingState;
        clearBoard();
    };
    const newGameWithPlayerNames = (nameOne, nameTwo) => {
        playerOne.name = nameOne;
        playerTwo.name = nameTwo;
        currentPlayer = playerOne;
        state = playingState;
        clearBoard();
    };

    // making moves
    const validateMove = (move) => {
        if (move < 0 || move > gameBoard.length - 1) return false;
        if (gameBoard[move] !== "") return false;
        return true;
    };
    function hasGameWon(move, piece) {
        // check squares around placed piece
        // corners are 0, 2, 6, 8
        if (move === 0) {
            if (gameBoard[1] === piece && gameBoard[2] === piece) return true; // +1 +2
            if (gameBoard[3] === piece && gameBoard[6] === piece) return true;
            if (gameBoard[4] === piece && gameBoard[8] === piece) return true;
            return false;
        }
        if (move === 2) {
            if (gameBoard[0] === piece && gameBoard[1] === piece) return true;
            if (gameBoard[5] === piece && gameBoard[8] === piece) return true;
            if (gameBoard[4] === piece && gameBoard[6] === piece) return true;
            return false;
        }
        if (move === 6) {
            if (gameBoard[0] === piece && gameBoard[3] === piece) return true;
            if (gameBoard[7] === piece && gameBoard[8] === piece) return true;
            if (gameBoard[4] === piece && gameBoard[2] === piece) return true;
            return false;
        }
        if (move === 8) {
            if (gameBoard[6] === piece && gameBoard[7] === piece) return true;
            if (gameBoard[5] === piece && gameBoard[2] === piece) return true;
            if (gameBoard[4] === piece && gameBoard[0] === piece) return true;
            return false;
        }

        // mid-sides are 1, 3, 5, 7
        // checking through middle
        if (move === 1 || move === 7) {
            if (
                gameBoard[1] === piece &&
                gameBoard[4] === piece &&
                gameBoard[7] === piece
            )
                return true;
        }
        if (move === 3 || move === 5) {
            if (
                gameBoard[3] === piece &&
                gameBoard[4] === piece &&
                gameBoard[5] === piece
            )
                return true;
        }

        // checking through sides
        if (move === 1 || move === 7 || move === 4) {
            if (gameBoard[move - 1] === piece && gameBoard[move + 1] === piece)
                return true; // +-1
        }
        if (move === 3 || move === 5 || move === 4) {
            if (gameBoard[move - 3] === piece && gameBoard[move + 3] === piece)
                return true; // +- 3
        }
        return false;
    }
    // returns true if winning move
    const makeMove = (move) => {
        if (state === wonState) return true;
        console.log(`placing ${currentPlayer.piece} to position ${move}`);
        if (!validateMove(move)) return false;
        // place players piece and change current player
        gameBoard[move] = currentPlayer.piece;

        if (hasGameWon(move, currentPlayer.piece)) {
            state = wonState;
            return true;
        }

        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        return false;
    };

    const getCurrentPlayer = () => currentPlayer;
    const getGameState = () => state;

    return {
        newGame,
        newGameWithPlayerNames,
        makeMove,
        getGameState,
        getCurrentPlayer,
        gameBoard
    };
})();

/*
     display game on web page
*/

const display = (() => {
    // html elements
    const body = document.getElementsByTagName("body")[0];
    const playButton = document.createElement("button");

    // update game state
    const updateGameBoard = () => {
        // todo, update html grid values
        const grid = document.getElementById(gameBoardId);
        for (let i = 0; i < game.gameBoard.length; i++) {
            grid.childNodes[i].textContent = game.gameBoard[i];
        }

        // check if winner
    };

    /* draw game board grid and button */

    function drawGameBoard() {
        const grid = document.createElement("grid");
        grid.id = gameBoardId;
        body.appendChild(grid);
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
        playButton.id = playButtonID;
        playButton.textContent = playButtonPlayText;
        body.appendChild(playButton);
    }

    /**
     *  Winner Text add/update
     */
    const winnerText = document.createElement("div");
    function updateWinnerText(player) {
        if (game.getGameState() === wonState) {
            winnerText.textContent = `${player.name} wins! with piece ${player.piece}`;
            winnerText.style.visibility = "visible";
        } else {
            winnerText.textContent = "";
            winnerText.style.visibility = "hidden";
        }
    }
    function addWinnerText(player) {
        winnerText.id = winnerTextId;
        winnerText.style.visibility = "hidden";
        updateWinnerText(player);
        body.appendChild(winnerText);
    }

    /* 
    Subscribe to the click events on the game board / grid + button
 */
    function subscribeGameboardClicks() {
        const board = document.getElementsByClassName(gameSquareClass);
        for (let i = 0; i < board.length; i++) {
            board[i].addEventListener("click", (e) => {
                e.preventDefault();
                if (game.makeMove(i)) {
                    updateWinnerText(game.getCurrentPlayer());
                    playButton.textContent = playButtonPlayText;
                }
                updateGameBoard();
            });
        }
    }
    function subscribePlayButton() {
        playButton.addEventListener("click", () => {
            playButton.textContent = playButtonRestartText;
            // hide button ?
            // game.newGame() // starts new game with default names
            game.newGameWithPlayerNames("Player One", "Player Two"); // hardcoded player names
            updateWinnerText(game.getCurrentPlayer());
            updateGameBoard();
        });
    }
    // set up the page
    const setup = () => {
        drawGameBoard();
        addPlayButton();
        addWinnerText();
        subscribeGameboardClicks();
        subscribePlayButton();
    };

    return { setup, updateGameBoard };
})();

// startup code

display.setup();
