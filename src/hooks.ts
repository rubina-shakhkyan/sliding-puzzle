import { useState, useEffect } from "react";
import { isPuzzleSolved, shuffleTiles } from "./utils";

export const useShuffledTiles = (puzzleSize: number) => {
  const [tiles, setTiles] = useState<number[]>(
    Array.from(Array(puzzleSize ** 2).keys())
  );
  const [gapIndex, setGapIndex] = useState(puzzleSize * puzzleSize);
  const [isSolved, setIsSolved] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const { shuffledTiles, gapIndex } = shuffleTiles(
      Array.from(Array(puzzleSize ** 2).keys())
    );
    setTiles(shuffledTiles);
    setGapIndex(gapIndex);
  }, [puzzleSize]);

  const shuffle = () => {
    const { shuffledTiles, gapIndex } = shuffleTiles(tiles);
    setGapIndex(gapIndex);
    setTiles(shuffledTiles);
    setMoves(0);
  };

  const isAdjacent = (index: number) => {
    const row = Math.floor(index / puzzleSize);
    const col = index % puzzleSize;
    const gapRow = Math.floor(gapIndex / puzzleSize);
    const gapCol = gapIndex % puzzleSize;
    const rowDiff = Math.abs(row - gapRow);
    const colDiff = Math.abs(col - gapCol);
    return rowDiff + colDiff === 1;
  };

  const moveTile = (index: number) => {
    if (isAdjacent(index)) {
      const newTiles = [...tiles];
      newTiles[gapIndex] = newTiles[index];
      newTiles[index] = puzzleSize * puzzleSize - 1;
      setTiles(newTiles);
      setGapIndex(index);
      setIsSolved(isPuzzleSolved(tiles));
      setMoves(moves + 1);
    }
  };

  return {
    gapIndex,
    isSolved,
    moves,
    tiles,
    shuffle,
    moveTile,
  };
};
