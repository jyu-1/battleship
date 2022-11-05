/* eslint-disable import/prefer-default-export */
import { Player, Gameboard } from "./scripts/ship";
import "./style.css";

const player = Player(true);
const npc = Player(false);
const playerBoard = Gameboard(player);
const npcBoard = Gameboard(npc);

const getComputerMove = () => {
    playerBoard.hit();
};

const hitNpc = (num) => {
    npc.ships[num].hit();
};

const checkWin = (isPlayer) => {
    if (isPlayer === true) {
        if (npc.checkState() === true) {
            const modal = document.querySelector(".modal");
            const content = document.querySelector(".modal-content");
            content.textContent = "Player Wins";
            modal.style.display = "block";
        }
    } else if (isPlayer === false) {
        if (player.checkState() === true) {
            const modal = document.querySelector(".modal");
            const content = document.querySelector(".modal-content");
            content.textContent = "AI Wins";
            modal.style.display = "block";
        }
    }
};

export { getComputerMove, hitNpc, checkWin };
