import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const PuzzleGrid = styled.div<{ puzzleSize: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.puzzleSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.puzzleSize}, 1fr);
  gap: 10px;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  background-color: #eee;
  border: 1px solid #ddd;
  cursor: pointer;
`;

export const Gap = styled.div`
  background-color: transparent;
  border: none;
`;
