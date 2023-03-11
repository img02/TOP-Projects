import gameboardFactory from "./gameboard";

const player = (playerName, boardSize) => {
    let game = null;

    function startGame() {
        game = gameboardFactory(boardSize);
    }
    function attack(x, y) {
        return game.receiveAttack(x, y);
    }

    function randomAttack() {
        let x = 0;
        let y = 0;
        // generate random coordinate number between 0 and boardsize-1
        do {
            x = Math.floor(Math.random() * (boardSize - 1));
            y = Math.floor(Math.random() * (boardSize - 1));
        } while (!game.receiveAttack(x, y));
    }

    return { playerName, boardSize, game, startGame, attack, randomAttack };
};

export default player;
