/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

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
            else if (array[key] === "ship")
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

            if (array[key] === "empty") square.textContent = "";
            else if (array[key] === "hit")
                square.style.backgroundColor = "pink";
            else if (array[key] === "ship")
                square.style.backgroundColor = "lightblue";
            else if (array[key] === "miss") square.disabled = true;

            square.addEventListener("click", () => {
                if (array[key] === "ship") array[key] = "hit";
                else if (array[key] === "empty") array[key] = "miss";
                domGrid(array, player);
            });

            gameGrid.appendChild(square);
        });
    }
};

export { domGrid };
