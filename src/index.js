/* eslint-disable import/prefer-default-export */
import { Player, Gameboard } from "./scripts/ship";
import "./style.css";

let player = Player(true);
let npc = Player(false);
let playerBoard = Gameboard(player);
let npcBoard = Gameboard(npc);

const getComputerMove = () => {
    playerBoard.hit();
};

const hitNpc = (num) => {
    npc.ships[num].hit();
};

const resetGame = () => {
    const modal = document.querySelector(".modal");
    const content = document.querySelector(".winner");
    const playerStatus = document.querySelector(".player-status");
    const computerStatus = document.querySelector(".computer-status");

    modal.style.display = "none";
    content.textContent = "";
    playerStatus.textContent = "Your Board";
    computerStatus.textContent = "AI's Board";

    player = Player(true);
    npc = Player(false);
    playerBoard = Gameboard(player);
    npcBoard = Gameboard(npc);
};

const checkWin = (isPlayer) => {
    if (isPlayer === true) {
        if (npc.checkState() === true) {
            const modal = document.querySelector(".modal");
            const content = document.querySelector(".winner");
            const restartBtn = document.querySelector(".restart");

            content.textContent = "Player Wins";
            modal.style.display = "block";
            restartBtn.addEventListener("click", resetGame);

            return true;
        }
        return false;
    }
    if (player.checkState() === true) {
        const modal = document.querySelector(".modal");
        const content = document.querySelector(".winner");
        const restartBtn = document.querySelector(".restart");

        content.textContent = "AI Wins";
        modal.style.display = "block";
        restartBtn.addEventListener("click", resetGame);

        return true;
    }
    return false;
};

export { getComputerMove, hitNpc, checkWin };
