import React from "react";
import { Button } from "@mui/material";
import { Container, Gap, PuzzleGrid, Tile } from "./SliderPuzzle.styles";
import { useShuffledTiles } from "../../hooks";
import { Title, VerticalSpacer } from "../shared/shared.styles";

export const SlidingPuzzle: React.FC<{ puzzleSize: number }> = ({
  puzzleSize = 4,
}) => {
  const { emptyIndex, tiles, moveTile, shuffle } = useShuffledTiles(puzzleSize);
  // ToDo: add a timer & feedback when the puzzle is solved
  // ToDo: Make the grid look nice when many tiles
  return (
    <Container>
      <Title> {`Let's Solve It: A ${puzzleSize}x${puzzleSize} Sliding Puzzle Challenge`}</Title>
      <PuzzleGrid puzzleSize={puzzleSize}>
        {tiles.map((value, index) =>
          index === emptyIndex ? (
            <Gap key={index} />
          ) : (
            <Tile key={index} onClick={() => moveTile(index)}>
              {value + 1}
            </Tile>
          )
        )}
      </PuzzleGrid>
      <VerticalSpacer />
      <Button onClick={shuffle} variant="contained" color="primary">
        Shuffle
      </Button>
    </Container>
  );
};
