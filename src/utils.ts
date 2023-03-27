import { PuzzleState } from "./models";

export const countInversions = (tiles: number[]) => {
  let inversions = 0;
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] && tiles[j] && tiles[i] > tiles[j]) {
        inversions++;
      }
    }
  }
  return inversions;
};

export const isSolvable = (tiles: number[], gapIndex: number): boolean => {
  const puzzleSize = Math.sqrt(tiles.length);
  const numInversions = countInversions(tiles);
  if (puzzleSize % 2 === 1) {
    // Odd puzzle size, so solvable if even inversions
    return numInversions % 2 === 0;
  } else {
    // Even puzzle size
    // The blank row counting from the bottom
    const blankRow = puzzleSize - Math.floor(gapIndex / puzzleSize);
    if (blankRow % 2 === 0) {
      return numInversions % 2 === 1;
    } else {
      return numInversions % 2 === 0;
    }
  }
};

export const shuffleTiles = (
  initialTiles: number[],
  attempts: number = 0
): PuzzleState => {
  if (attempts > 5) {
    return { shuffledTiles: initialTiles, gapIndex: initialTiles.length - 1 };
  }
  let shuffledTiles = [...initialTiles];

  // Used Fisher-Yates algorithm to increase the probability that the Puzzle is solvable
  for (let i = shuffledTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
  }

  //   The gap is actually the element with the highest key
  const gapIndex = shuffledTiles.indexOf(shuffledTiles.length - 1);
  if (isSolvable(shuffledTiles, gapIndex)) {
    return { shuffledTiles, gapIndex };
  } else {
    attempts++;
    return shuffleTiles(initialTiles, attempts);
  }
};

export const isPuzzleSolved = (tiles: number[]) => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }
  return true;
};
