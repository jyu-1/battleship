/* eslint-disable import/prefer-default-export */

const domGrid = (array, player) => {
    const gameGrid = document.querySelector(player);
    gameGrid.textContent = "";

    Object.values(array).forEach((element) => {
        const square = document.createElement("button");
        square.classList.add("squares");

        if (element === "empty") square.textContent = "";
        else if (element === "hit") square.textContent = "X";

        square.addEventListener("click", () => {
            console.log("placeholder");
            square.disabled = true;
        });

        gameGrid.appendChild(square);
    });
};

export { domGrid };
