/* eslint-disable import/prefer-default-export */

const Ship = (length) => {
    let health = length;

    const hit = () => {
        if (health > 0) health -= 1;
        return health;
    };

    const isSunk = () => {
        if (health <= 0) return true;
        return false;
    };

    return { hit, isSunk };
};

const Gameboard = () => {
    const board = [];

    for (let i = 0; i < 10; i += 1) {
        for (let k = 0; k < 10; k += 1) {
            board.push([i, k]);
        }
    }

    const receiveAttack = (coord) => {
        if (board[coord] === true) {
            return true;
        }
        return false;
    };

    return { board, receiveAttack };
};

const Player = () => {
    const carrier = Ship(5);
    const battleship = Ship(4);
    const cruiser = Ship(3);
    const submarine = Ship(3);
    const destroyer = Ship(2);

    const checkState = () => {
        if (
            carrier.isSunk() === true &&
            battleship.isSunk() === true &&
            cruiser.isSunk() === true &&
            submarine.isSunk() === true &&
            destroyer.isSunk() === true
        ) {
            return true;
        }
        return false;
    };

    const hit = () => {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        return [randomX, randomY];
    };

    return { hit, checkState };
};

export { Ship, Gameboard, Player };
