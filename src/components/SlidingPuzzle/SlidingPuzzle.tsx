import React, { useEffect, useMemo, useState } from "react";
import { Button, useTheme } from "@mui/material";
import { Gap, PuzzleGrid, Tile } from "./SliderPuzzle.styles";
import { useShuffledTiles } from "../../hooks";
import {
  Container,
  PrimaryTitle,
  SecondaryTitle,
  VerticalSpacer,
} from "../../design-system/shared.styles";
import { config, useSpring } from "react-spring";
import { SOLVED_PUZZLE, START_SOLVING } from "../../constants";

interface SlidingPuzzleProps {
  puzzleSize: number;
  onReset(): void;
}

export const SlidingPuzzle: React.FC<SlidingPuzzleProps> = (props) => {
  const { puzzleSize, onReset } = props;
  const theme = useTheme();
  const { gapIndex, isSolved, moves, tiles, moveTile, shuffle } =
    useShuffledTiles(puzzleSize);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const tileColor = useMemo(
    () => `#${Math.random().toString(16).substr(-6)}`,
    []
  );

  const puzzleGridAnimation = useSpring({
    transform: shouldAnimate ? "rotate(5deg)" : "rotate(0deg)",
    config: config.default,
  });

  useEffect(() => {
    if (isSolved) {
      setShouldAnimate(true);
      setTimeout(() => {
        setShouldAnimate(false);
      }, 1000);
    }
  }, [isSolved]);

  return (
    <Container>
      <PrimaryTitle theme={theme}>
        {`${
          isSolved ? SOLVED_PUZZLE : START_SOLVING
        } ${puzzleSize}x${puzzleSize} Sliding Puzzle Challenge`}
      </PrimaryTitle>
      <SecondaryTitle theme={theme}>Moves: {moves}</SecondaryTitle>
        <PuzzleGrid puzzleSize={puzzleSize} style={puzzleGridAnimation}>
          {tiles.map((value, index) =>
            index === gapIndex ? (
              <Gap key={index} />
            ) : (
              <Tile
                key={index}
                puzzleSize={puzzleSize}
                backgroundColor={tileColor}
                onClick={() => !isSolved && moveTile(index)}
              >
                {value + 1}
              </Tile>
            )
          )}
        </PuzzleGrid>
      <VerticalSpacer />
      {/* As an improvement, an option to restart the existing puzzle can be added in the future*/}
      <Button onClick={shuffle} variant="contained" color="primary">
        Shuffle
      </Button>
      <VerticalSpacer />
      <Button onClick={onReset} variant="outlined">
        Choose Puzzle Size
      </Button>
    </Container>
  );
};
