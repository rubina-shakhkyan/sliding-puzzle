import React, { useState } from "react";
import { SlidingPuzzle, WelcomeForm } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./design-system";

const App = () => {
  const [puzzleSize, setPuzzleSize] = useState<string>("");
  return (
    <ThemeProvider theme={theme}>
      {puzzleSize ? (
        <SlidingPuzzle
          puzzleSize={parseInt(puzzleSize)}
          onReset={() => setPuzzleSize("")}
        />
      ) : (
        <WelcomeForm onSubmit={setPuzzleSize} />
      )}
    </ThemeProvider>
  );
};

export default App;
