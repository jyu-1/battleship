/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import { getComputerMove, hitNpc, checkWin } from "../index";

const domGrid = (array, player) => {
    if (player === true) {
        const gameGrid = document.querySelector(".player-grid");
        gameGrid.textContent = "";

        Object.keys(array).forEach((key) => {
            const square = document.createElement("div");
            square.classList.add("squares");

            if (array[key] === "empty") square.textContent = "";
            else if (array[key] === "hit")
                square.style.backgroundColor = "pink";
            else if (
                array[key] === 0 ||
                array[key] === 1 ||
                array[key] === 2 ||
                array[key] === 3 ||
                array[key] === 4
            )
                square.style.backgroundColor = "lightblue";
            else if (array[key] === "miss")
                square.style.backgroundColor = "#E1E1E1";

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
                    } else if (array[key] === 1) {
                        array[key] = "hit";
                        hitNpc(1);
                    } else if (array[key] === 2) {
                        array[key] = "hit";
                        hitNpc(2);
                    } else if (array[key] === 3) {
                        array[key] = "hit";
                        hitNpc(3);
                    } else if (array[key] === 4) {
                        array[key] = "hit";
                        hitNpc(4);
                    } else if (array[key] === "empty") array[key] = "miss";
                    domGrid(array, player);
                    checkWin();
                    getComputerMove();
                    console.log(array);
                });
            } else if (array[key] === "hit")
                square.style.backgroundColor = "pink";
            else if (array[key] === "miss") square.disabled = true;

            gameGrid.appendChild(square);
        });
    }
};

export { domGrid };
