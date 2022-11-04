import { Ship, Gameboard, Player } from "./scripts/ship";
import "./style.css";

const player = Player(true);
const npc = Player(false);
const playerBoard = Gameboard(player);
const npcBoard = Gameboard(npc);
