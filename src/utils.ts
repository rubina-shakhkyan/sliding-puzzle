//   The puzzle is is solvable, if the number of inversions is even given that the gap is always in the last row initially
export const isSolvable = (tiles: number[]) => {
  const puzzleSize = Math.sqrt(tiles.length);
  const numInversions = tiles.reduce((acc, tile, index) => {
    if (tile === 0 || index >= puzzleSize * (puzzleSize - 1)) {
      return acc;
    }
    const numTilesAfter = tiles.slice(index + 1).filter((t) => t !== 0);
    const inv = numTilesAfter.reduce((a, t) => a + (tile > t ? 1 : 0), 0);
    return acc + inv;
  }, 0);

  return numInversions % 2 === 0;
};

export const shuffleTiles = (initialTiles: number[]): number[] => {
  let newTiles = [...initialTiles];
  newTiles.sort(() => Math.random() - 0.5);
  if (isSolvable(newTiles)) {
    return newTiles;
  } else return shuffleTiles(initialTiles);
};

export const isPuzzleSolved = (
  moves: number,
  puzzleSize: number,
  tiles: number[]
) => {
  const lastTileIndex = puzzleSize * puzzleSize - 1;
  const minMoves =
    puzzleSize % 2 === 0 ? (puzzleSize - 1) * 2 : (puzzleSize - 1) * 2 - 1;

  if (moves < minMoves) {
    return false;
  }

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }

  return tiles[lastTileIndex] === lastTileIndex;
};
