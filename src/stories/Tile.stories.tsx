import React from "react";
import { storiesOf } from "@storybook/react";
import { Tile } from "../components/SlidingPuzzle/SliderPuzzle.styles";

storiesOf("Components/Tile", module).add("default", () => (
  <Tile onClick={() => {}}>{1}</Tile>
));
