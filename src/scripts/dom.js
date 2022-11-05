/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import { getComputerMove, hitNpc, checkWin } from "../index";

const statusMessage = (num, player) => {
    let ship = "";

    switch (num) {
        case 0:
            ship = "Carrier";
            break;
        case 1:
            ship = "Battleship";
            break;
        case 2:
            ship = "Cruiser";
            break;
        case 3:
            ship = "Submarine";
            break;
        case 4:
            ship = "Destroyer";
            break;
        default:
    }

    if (player === true) {
        const playerStatus = document.querySelector(".player-status");
        playerStatus.textContent = `AI hits your ${ship}`;
    } else {
        const computerStatus = document.querySelector(".computer-status");
        computerStatus.textContent = `You hit AI's ${ship}`;
    }
};

const domGrid = (array, player) => {
    if (player === true) {
        const gameGrid = document.querySelector(".player-grid");
        gameGrid.textContent = "";

        Object.keys(array).forEach((key) => {
            const square = document.createElement("div");
            square.classList.add("squares");

            if (array[key] === "empty") square.textContent = "";
            else if (array[key] === "hit") square.style.backgroundColor = "red";
            else if (
                array[key] === 0 ||
                array[key] === 1 ||
                array[key] === 2 ||
                array[key] === 3 ||
                array[key] === 4
            )
                square.style.backgroundColor = "blue";
            else if (array[key] === "miss")
                square.style.backgroundColor = "grey";

            gameGrid.appendChild(square);
        });
    } else {
        const gameGrid = document.querySelector(".computer-grid");
        gameGrid.textContent = "";

        Object.keys(array).forEach((key) => {
            const square = document.createElement("button");
            square.classList.add("squares");

            if (
                array[key] === "empty" ||
                array[key] === 0 ||
                array[key] === 1 ||
                array[key] === 2 ||
                array[key] === 3 ||
                array[key] === 4
            ) {
                square.textContent = "";
                square.addEventListener("click", () => {
                    if (array[key] === 0) {
                        array[key] = "hit";
                        hitNpc(0);
                        statusMessage(0, player);
                    } else if (array[key] === 1) {
                        array[key] = "hit";
                        hitNpc(1);
                        statusMessage(1, player);
                    } else if (array[key] === 2) {
                        array[key] = "hit";
                        hitNpc(2);
                        statusMessage(2, player);
                    } else if (array[key] === 3) {
                        array[key] = "hit";
                        hitNpc(3);
                        statusMessage(3, player);
                    } else if (array[key] === 4) {
                        array[key] = "hit";
                        hitNpc(4);
                        statusMessage(4, player);
                    } else if (array[key] === "empty") array[key] = "miss";
                    domGrid(array, player);
                    checkWin(true);
                    getComputerMove();
                    checkWin(false);
                    console.log(array);
                });
            } else if (array[key] === "hit")
                square.style.backgroundColor = "red";
            else if (array[key] === "miss") square.disabled = true;

            gameGrid.appendChild(square);
        });
    }
};

export { domGrid, statusMessage };
