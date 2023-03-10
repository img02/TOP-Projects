import shipFactory from "./battleship";

const gameboardFactory = () => {
    const takenSpots = [];
    const ships = [];
    const missedAttacks = [];

    function shipSpotFree([x, y], length, horizontal) {
        const startPositionTaken = takenSpots.some(
            (coord) => coord[0] === x && coord[1] === y
        );

        const endPositionTaken = horizontal
            ? takenSpots.some(
                  (coord) => coord[0] === x + length - 1 && coord[1] === y
              )
            : takenSpots.some(
                  (coord) => coord[0] === x && coord[1] === y + length - 1
              );

        return !startPositionTaken && !endPositionTaken;
    }

    function addTakenSpots([x, y], length, horizontal) {
        for (let i = 0; i < length; i += 1) {
            if (horizontal) takenSpots.push([x + i, y]);
            else takenSpots.push([x, y + i]);
        }
    }

    function placeShip(x, y, length, horizontal = true) {
        if (!shipSpotFree([x, y], length, horizontal)) return false;

        const ship = shipFactory(length);
        this.ships.push(ship);
        addTakenSpots([x, y], length, horizontal);
        return true;
    }

    return { missedAttacks, takenSpots, ships, placeShip };
};

export default gameboardFactory;
