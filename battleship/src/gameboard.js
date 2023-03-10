import shipFactory from "./battleship";

const gameboardFactory = () => {
    const takenSpots = [];
    const ships = [];
    const missedAttacks = [];
    const hitAttacks = [];

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

    function positionAlreadyAttacked(x, y) {
        const coordTest = (coords) => coords[0] === x && coords[1] === y;
        const alreaydMissed = missedAttacks.some((coords) => coordTest(coords));
        const alreadyHit = hitAttacks.some((coords) => coordTest(coords));
        return alreaydMissed || alreadyHit;
    }

    function receiveAttack(x, y) {
        if (positionAlreadyAttacked(x, y)) return false;

        let shipFound = false;
        let hitShip = null;
        ships.forEach((shipInfo) => {
            if (
                shipInfo.coords.some(
                    (coord) => coord[0] === x && coord[1] === y
                )
            ) {
                shipFound = true;
                hitShip = shipInfo.ship;
            }
        });
        if (!shipFound) missedAttacks.push([x, y]);
        else {
            hitShip.hit();
            hitAttacks.push([x, y]);
        }
        return true;
    }

    return {
        missedAttacks,
        hitAttacks,
        takenSpots,
        ships,
        placeShip,
        receiveAttack
    };
};

export default gameboardFactory;
