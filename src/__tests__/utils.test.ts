import { isSolvable, shuffleTiles, isPuzzleSolved } from "../utils";

describe("isSolvable", () => {
  it("returns true if number of inversions is even", () => {
    const tiles = [1, 2, 3, 4, 5, 6, 0, 7, 8];
    expect(isSolvable(tiles)).toBe(true);
  });

  it("returns false if number of inversions is odd", () => {
    const tiles = [1, 2, 3, 4, 5, 6, 0, 8, 7];
    expect(isSolvable(tiles)).toBe(false);
  });
});

describe("shuffleTiles", () => {
  it("returns shuffled tiles if the puzzle is solvable", () => {
    const initialTiles = [1, 2, 3, 4, 5, 6, 0, 7, 8];
    const shuffledTiles = shuffleTiles(initialTiles);
    expect(shuffledTiles).not.toEqual(initialTiles);
    expect(isSolvable(shuffledTiles)).toBe(true);
  });

  it("retries shuffling if the puzzle is not solvable", () => {
    const initialTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
    jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
    jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
    jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
    const shuffledTiles = shuffleTiles(initialTiles);
    expect(shuffledTiles).not.toEqual(initialTiles);
    expect(isSolvable(shuffledTiles)).toBe(true);
  });
});

describe("isPuzzleSolved", () => {
  it("returns true if all tiles are in their correct positions", () => {
    const moves = 5;
    const puzzleSize = 3;
    const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(isPuzzleSolved(moves, puzzleSize, tiles)).toBe(true);
  });

  it("returns false if some tiles are not in their correct positions", () => {
    const moves = 10;
    const puzzleSize = 3;
    const tiles = [0, 1, 2, 3, 4, 5, 6, 8, 7];
    expect(isPuzzleSolved(moves, puzzleSize, tiles)).toBe(false);
  });

  it("returns false if number of moves is less than minimum required", () => {
    const moves = 3;
    const puzzleSize = 3;
    const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(isPuzzleSolved(moves, puzzleSize, tiles)).toBe(false);
  });
});
