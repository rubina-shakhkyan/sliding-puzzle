import React from "react";
import { storiesOf } from "@storybook/react";
import { Tile } from "../components/SlidingPuzzle/SliderPuzzle.styles";
import { Color } from "../design-system/Color";

const commonProps = {
  backgroundColor: Color.PURPLE1,
  onClick: () => {},
};

storiesOf("Components/Tile", module)
  .add("Tile in a 3x3 puzzle", () => (
    <Tile puzzleSize={3} {...commonProps}>
      {1}
    </Tile>
  ))
  .add("Tile in a 12x12 puzzle", () => (
    <Tile puzzleSize={12} {...commonProps}>
      {1}
    </Tile>
  ));
