import shipFactory from "../battleship";

test("new ship not sunk", () => {
    const ship = shipFactory(5);
    expect(ship.isSunk()).toBeFalsy();
});

test("new ship length 3 needs 3 hits to sink", () => {
    const ship = shipFactory(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});

test("new ship length 3 not sunk with 2 hits", () => {
    const ship = shipFactory(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
});
