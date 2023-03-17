import { useState, useEffect } from "react";
import { isPuzzleSolved, shuffleTiles } from "./utils";

export const useShuffledTiles = (puzzleSize: number) => {
  const [tiles, setTiles] = useState<number[]>(
    shuffleTiles(Array.from(Array(puzzleSize ** 2 - 1).keys()))
  );
  const [emptyIndex, setEmptyIndex] = useState(puzzleSize * puzzleSize - 1);
  const [isSolved, setIsSolved] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const newTiles = shuffleTiles(
      Array.from(Array(puzzleSize ** 2 - 1).keys())
    );
    setTiles(newTiles);
  }, [puzzleSize]);

  const shuffle = () => {
    const newTiles = shuffleTiles(tiles);
    setEmptyIndex(puzzleSize * puzzleSize - 1);
    setTiles(newTiles);
  };

  const isAdjacent = (index: number) => {
    const row = Math.floor(index / puzzleSize);
    const col = index % puzzleSize;
    const gapRow = Math.floor(emptyIndex / puzzleSize);
    const gapCol = emptyIndex % puzzleSize;
    const rowDiff = Math.abs(row - gapRow);
    const colDiff = Math.abs(col - gapCol);
    return rowDiff + colDiff === 1;
  };

  const moveTile = (index: number) => {
    if (isAdjacent(index)) {
      const newTiles = [...tiles];
      newTiles[emptyIndex] = newTiles[index];
      newTiles[index] = puzzleSize * puzzleSize - 1;
      setTiles(newTiles);
      setEmptyIndex(index);
      setIsSolved(isPuzzleSolved(moves + 1, puzzleSize, tiles));
      setMoves(moves + 1);
    }
  };

  return {
    emptyIndex,
    isSolved,
    tiles,
    shuffle,
    moveTile,
  } as const;
};
