import { Ship, Gameboard, Player } from "./ship";

describe("Ship Object", () => {
    test("Ship hit", () => {
        expect(Ship(5).hit()).toBe(4);
        expect(Ship(1).hit()).toBe(0);
    });

    test("Ship sunk?", () => {
        expect(Ship(5).isSunk()).toBe(false);
        expect(Ship(0).isSunk()).toBe(true);
        expect(Ship(1).isSunk()).toBe(false);
    });
});

describe("Gameboard", () => {
    test("Gameboard", () => {
        expect(Gameboard().board.length).toBe(100);
        expect(Gameboard().receiveAttack()).toBe(false);
    });
});

describe("Player", () => {
    test("Check Status", () => {
        expect(Player().checkState()).toBe(false);
    });
});
