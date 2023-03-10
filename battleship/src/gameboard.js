import shipFactory from "./battleship";

const gameboardFactory = () => {
    const takenSpots = [];
    const ships = [];
    const missedAttacks = [];

    function shipSpotFree(coords) {
        const startPositionTaken = takenSpots.some(
            (coord) => coord[0] === coords[0][0] && coord[1] === coords[0][1]
        );

        const endPositionTaken = takenSpots.some(
            (coord) =>
                coord[0] === coords[coords.length - 1][0] &&
                coord[1] === coords[coords.length - 1][1]
        );

        return !startPositionTaken && !endPositionTaken;
    }

    function addTakenSpots(coords) {
        coords.forEach((coord) => {
            takenSpots.push(coord);
        });
    }

    function getShipCoordinates(x, y, length, horizontal) {
        const coords = [];
        for (let i = 0; i < length; i += 1) {
            if (horizontal) coords.push([x + i, y]);
            else coords.push([x, y + i]);
        }
        return coords;
    }

    function placeShip(x, y, length, horizontal = true) {
        const coords = getShipCoordinates(x, y, length, horizontal);
        if (!shipSpotFree(coords)) return false;

        const ship = shipFactory(length);
        const shipInfo = { ship, coords };
        this.ships.push(shipInfo);
        addTakenSpots(coords);
        return true;
    }

    /*
    *
    Gameboards should have a receiveAttack function that takes a pair of coordinates, 
    determines whether or not the attack hit a ship and 
    then sends the ‘hit’ function to the correct ship, 
    or records the coordinates of the missed shot.
     */

    // function receiveAttack(x, y) {}
    return { missedAttacks, takenSpots, ships, placeShip };
};

export default gameboardFactory;
