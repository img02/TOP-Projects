import gameboardFactory from "./gameboard";

const player = (playerName, boardSize) => {
    const game = {};

    function newGame() {
        this.game = gameboardFactory(boardSize);
    }

    function attack(x, y, opponent) {
        return opponent.game.receiveAttack(x, y);
    }

    function randomAttack(opponent) {
        let x = 0;
        let y = 0;
        // generate random coordinate number between 0 and boardsize-1
        do {
            x = Math.floor(Math.random() * (boardSize - 1));
            y = Math.floor(Math.random() * (boardSize - 1));
        } while (
            !opponent.game.receiveAttack(x, y) &&
            !opponent.game.gameOver()
        );
    }

    return { playerName, boardSize, game, newGame, attack, randomAttack };
};

export default player;
