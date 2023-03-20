import styled from "styled-components";
import { animated } from "react-spring";
import { Color } from "../../design-system";

export const PuzzleGrid = styled(animated.div)<{ puzzleSize: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.puzzleSize}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.puzzleSize}, minmax(0, 1fr));
  gap: 1%;
  max-width: 80%;
  aspect-ratio: 1;
  margin: 0 auto;
  background-color: ${Color.WHITE};
  padding: 1%;
  border: 1px solid ${Color.GREY1};

  @media (max-width: 600px) {
    padding: 2%;
    gap: 2%;
  }
`;

export const Tile = styled.div<{ puzzleSize: number; backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) =>
    props.puzzleSize <= 4 ? "30px" : `calc(100vw / (${props.puzzleSize} * 5))`};
  font-weight: bold;
  color: ${Color.WHITE};
  background-color: ${(props) => props.backgroundColor}};
  border: 1px solid ${Color.GREY1};
  cursor: pointer;
  padding: ${(props) =>
    props.puzzleSize <= 4
      ? "10px"
      : `calc(100vw / (${props.puzzleSize} * 10))`};
`;

export const Gap = styled.div`
  background-color: transparent;
  border: none;
`;
