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

const checkWin = () => {
    console.log(npc.checkState());
};

export { getComputerMove, hitNpc, checkWin };
