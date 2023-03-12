import player from "../player";

test("pc randomAttacks different positions until game won", () => {
    const pc = player("computer", 10);
    const player1 = player("player one", 10);
    player1.newGame();
    player1.game.placeShip(2, 3, 2, true);

    while (!player1.game.gameOver()) {
        pc.randomAttack(player1);
    }
    expect(player1.game.gameOver()).toBeTruthy();
});
