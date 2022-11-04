/* eslint-disable import/prefer-default-export */
import { Gameboard, Player } from "./scripts/ship";
import "./style.css";

const player = Player(true);
const npc = Player(false);
const playerBoard = Gameboard(player);
const npcBoard = Gameboard(npc);

const getComputerMove = () => {
    playerBoard.hit();
};

export { getComputerMove };
