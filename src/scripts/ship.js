/* eslint-disable import/prefer-default-export */
import { domGrid } from "./dom";

function checkValid(array, length, orientation, randomX, randomY) {
    if (orientation === 0) {
        for (let i = 0; i < length; i += 1) {
            if (array[[randomX + i, randomY]] !== "empty") return false;
        }
        return true;
    }

    for (let i = 0; i < length; i += 1) {
        if (array[[randomX, randomY + i]] !== "empty") return false;
    }
    return true;
}

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

    return { hit, isSunk, length };
};

const Gameboard = (player) => {
    const board = [];

    for (let i = 0; i < 10; i += 1) {
        for (let k = 0; k < 10; k += 1) {
            board[[i, k]] = "empty";
        }
    }

    let shipCount = 0;

    while (shipCount < 5) {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        const orientation = Math.floor(Math.random() * 2);

        const temp = checkValid(
            board,
            player.ships[shipCount].length,
            orientation,
            randomX,
            randomY
        );
        if (temp === true) {
            if (orientation === 0) {
                for (let i = 0; i < player.ships[shipCount].length; i += 1) {
                    board[[randomX + i, randomY]] = "ship";
                }

                shipCount += 1;
            } else {
                for (let i = 0; i < player.ships[shipCount].length; i += 1) {
                    board[[randomX, randomY + i]] = "ship";
                }

                shipCount += 1;
            }
        }
    }

    if (player.isPlayer === true) domGrid(board, player.isPlayer);
    else domGrid(board, player.isPlayer);

    const receiveAttack = (coord) => {
        if (board[coord] === true) {
            return true;
        }
        return false;
    };

    return { board, receiveAttack };
};

const Player = (isPlayer) => {
    const ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

    const checkState = () => {
        if (
            ships[0].isSunk() === true &&
            ships[1].isSunk() === true &&
            ships[2].isSunk() === true &&
            ships[3].isSunk() === true &&
            ships[4].isSunk() === true
        ) {
            return true;
        }
        return false;
    };

    const hit = () => {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        return [randomX, randomY, ships];
    };

    return { hit, checkState, ships, isPlayer };
};

export { Ship, Gameboard, Player };
