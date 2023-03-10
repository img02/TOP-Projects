import gameboardFactory from "../gameboard";

test("make new gameboard is empty", () => {
    const gameboard = gameboardFactory();
    expect(gameboard).toBeTruthy();
    // idk
});

test("place ship on free gameboard space", () => {
    const gameboard = gameboardFactory();
    const result = gameboard.placeShip(0, 0, 3);
    expect(result).toBeTruthy();
});

test("can't place ship on taken gameboard space", () => {
    const gameboard = gameboardFactory();
    gameboard.placeShip(0, 0, 3);
    const result = gameboard.placeShip(0, 0, 3);
    expect(result).toBeFalsy();
});

test("receive attack on empty space misses", () => {
    const gameboard = gameboardFactory();
    const result = gameboard.receiveAttack(0, 0);
    expect(result).toBeTruthy();
});

test("receive attack on ship space hits and updates ship hit count", () => {
    const gameboard = gameboardFactory();
    gameboard.placeShip(0, 0, 5, true);
    gameboard.receiveAttack(0, 0);
    // idk
    const result = gameboard.missedAttacks.length === 0;
    expect(result).toBeTruthy();
});

test("receive attack on already missed position returns false", () => {
    const gameboard = gameboardFactory();
    gameboard.receiveAttack(0, 0);
    const result = gameboard.receiveAttack(0, 0);
    expect(result).toBeFalsy();
});

test("receive attack on already hit position returns false", () => {
    const gameboard = gameboardFactory();
    gameboard.placeShip(0, 0, 1, true);
    gameboard.receiveAttack(0, 0);
    const result = gameboard.receiveAttack(0, 0);
    expect(result).toBeFalsy();
});

test("gameboard tracks missed attack spots", () => {
    const gameboard = gameboardFactory();
    gameboard.receiveAttack(0, 0);
    const result = gameboard.missedAttacks.length === 1;
    expect(result).toBe(1);
});

test("gameboard reports not all ships sunk when ships remaining", () => {
    const gameboard = gameboardFactory();
    gameboard.placeShip(0, 0, 5, false);
    const result = gameboard.gameOver();
    expect(result).toBeFalsy();
});

test("gameboard reports all ships sunk whena all ships sunk", () => {
    const gameboard = gameboardFactory();
    gameboard.placeShip(0, 0, 3);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);
    const result = gameboard.gameOver();
    expect(result).toBeTruthy();
});
