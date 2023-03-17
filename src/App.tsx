import React, { useState } from "react";
import { SlidingPuzzle, WelcomeForm } from "./components";

const App = () => {
  const [puzzleSize, setPuzzleSize] = useState<number>(0);
  return puzzleSize ? (
    <SlidingPuzzle puzzleSize={puzzleSize} />
  ) : (
    <WelcomeForm onSubmit={setPuzzleSize} />
  );
};

export default App;
