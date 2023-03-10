import shipFactory from "./battleship";

const ship = shipFactory(4);
console.log(JSON.parse(JSON.stringify(ship)));
console.log(`Sunk: ${ship.isSunk()}`);

ship.hit();
console.log(JSON.parse(JSON.stringify(ship)));
console.log(`Sunk: ${ship.isSunk()}`);

ship.hit();
console.log(JSON.parse(JSON.stringify(ship)));
console.log(`Sunk: ${ship.isSunk()}`);

ship.hit();
console.log(JSON.parse(JSON.stringify(ship)));
console.log(`Sunk: ${ship.isSunk()}`);

ship.hit();
console.log(JSON.parse(JSON.stringify(ship)));
console.log(`Sunk: ${ship.isSunk()}`);
