import { renderHook, act } from "@testing-library/react-hooks";
import { useShuffledTiles } from "../hooks";

describe("useShuffledTiles", () => {
  it("should initialize with the correct number of tiles", () => {
    const puzzleSize = 3;
    const { result } = renderHook(() => useShuffledTiles(puzzleSize));
    expect(result.current.tiles.length).toBe(puzzleSize ** 2);
  });

  it("should shuffle the tiles when the puzzle size changes", () => {
    const { result, rerender } = renderHook(
      (props) => useShuffledTiles(props),
      {
        initialProps: 3,
      }
    );
    const initialTiles = result.current.tiles;

    rerender(4);
    const newTiles = result.current.tiles;

    expect(initialTiles).not.toEqual(newTiles);
  });
  it("should shuffle the tiles when the shuffle function is called", () => {
    const { result } = renderHook((props) => useShuffledTiles(props), {
      initialProps: 3,
    });
    const initialTiles = result.current.tiles;

    act(() => {
      result.current.shuffle();
    });
    const newTiles = result.current.tiles;

    expect(initialTiles).not.toEqual(newTiles);
  });

  it("should not move a tile if it is not adjacent to the gap", () => {
    const { result } = renderHook((props) => useShuffledTiles(props), {
      initialProps: 3,
    });

    const tileToMove = result.current.gapIndex - 2;
    const initialTiles = result.current.tiles;

    act(() => {
      result.current.moveTile(tileToMove);
    });

    expect(result.current.tiles).toEqual(initialTiles);
    expect(result.current.isSolved).toBe(false);
  });
});
