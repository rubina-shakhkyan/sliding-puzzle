import {
  countInversions,
  isSolvable,
  shuffleTiles,
  isPuzzleSolved,
} from "../utils";

describe("countInversions", () => {
  it("returns the correct number of inversions for an array", () => {
    const tiles = [3, 5, 2, 8, 4, 1, 7, 6, 0];
    const numInversions = countInversions(tiles);
    expect(numInversions).toBe(12);
  });

  it("returns 0 for an already sorted array", () => {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    const numInversions = countInversions(tiles);
    expect(numInversions).toBe(0);
  });

  it("returns 0 for an empty array", () => {
    const tiles: number[] = [];
    const numInversions = countInversions(tiles);
    expect(numInversions).toBe(0);
  });
});

describe("isSolvable", () => {
  it("returns true for solvable puzzles", () => {
    const tiles = [1, 3, 5, 2, 4, 6, 8, 7, 0];
    const gapIndex = 8;
    expect(isSolvable(tiles, gapIndex)).toBe(true);
  });

  it("returns false for unsolvable puzzles", () => {
    const tiles = [1, 2, 3, 4, 5, 6, 8, 7, 0];
    const gapIndex = 8;
    expect(isSolvable(tiles, gapIndex)).toBe(false);
  });
});

describe("shuffleTiles", () => {
  it("should shuffle the tiles and return the gap index", () => {
    const initialTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const { shuffledTiles, gapIndex } = shuffleTiles(initialTiles);
    expect(shuffledTiles).not.toEqual(initialTiles);
    expect(gapIndex).not.toEqual(8);
  });

  it("should return the initial tiles and gap index if attempts > 5", () => {
    const initialTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const { shuffledTiles, gapIndex } = shuffleTiles(initialTiles, 6);
    expect(shuffledTiles).toEqual(initialTiles);
    expect(gapIndex).toBe(8);
  });
});

describe("isPuzzleSolved", () => {
  it("returns true for a solved puzzle", () => {
    const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(isPuzzleSolved(tiles)).toBe(true);
  });

  it("returns false for an unsolved puzzle", () => {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    expect(isPuzzleSolved(tiles)).toBe(false);
  });
});
