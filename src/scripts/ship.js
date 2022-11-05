/* eslint-disable import/prefer-default-export */
import { domGrid, statusMessage } from "./dom";

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
                    board[[randomX + i, randomY]] = shipCount;
                }

                shipCount += 1;
            } else {
                for (let i = 0; i < player.ships[shipCount].length; i += 1) {
                    board[[randomX, randomY + i]] = shipCount;
                }

                shipCount += 1;
            }
        }
    }

    if (player.isPlayer === true) domGrid(board, player.isPlayer);
    else domGrid(board, player.isPlayer);

    const hit = () => {
        let randomX = Math.floor(Math.random() * 10);
        let randomY = Math.floor(Math.random() * 10);

        while (
            board[[randomX, randomY]] !== "empty" &&
            board[[randomX, randomY]] !== 0 &&
            board[[randomX, randomY]] !== 1 &&
            board[[randomX, randomY]] !== 2 &&
            board[[randomX, randomY]] !== 3 &&
            board[[randomX, randomY]] !== 4
        ) {
            randomX = Math.floor(Math.random() * 10);
            randomY = Math.floor(Math.random() * 10);
        }

        if (board[[randomX, randomY]] === 0) {
            board[[randomX, randomY]] = "hit";
            player.ships[0].hit();
            statusMessage(0, player.isPlayer);
        } else if (board[[randomX, randomY]] === 1) {
            board[[randomX, randomY]] = "hit";
            player.ships[1].hit();
            statusMessage(1, player.isPlayer);
        } else if (board[[randomX, randomY]] === 2) {
            board[[randomX, randomY]] = "hit";
            player.ships[2].hit();
            statusMessage(2, player.isPlayer);
        } else if (board[[randomX, randomY]] === 3) {
            board[[randomX, randomY]] = "hit";
            player.ships[3].hit();
            statusMessage(3, player.isPlayer);
        } else if (board[[randomX, randomY]] === 4) {
            board[[randomX, randomY]] = "hit";
            player.ships[4].hit();
            statusMessage(4, player.isPlayer);
        } else if (board[[randomX, randomY]] === "empty")
            board[[randomX, randomY]] = "miss";

        domGrid(board, player.isPlayer);
    };

    return { board, hit };
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

    return { checkState, ships, isPlayer };
};

export { Ship, Gameboard, Player };
