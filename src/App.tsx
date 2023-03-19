import React, { useState } from "react";
import { SlidingPuzzle, WelcomeForm } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./design-system";

const App = () => {
  // ToDo: Should be able to get back to the form
  const [puzzleSize, setPuzzleSize] = useState<string>("");
  return(<ThemeProvider theme={theme}>
    { puzzleSize ? 
    <SlidingPuzzle puzzleSize={parseInt(puzzleSize)} />
  : 
    <WelcomeForm onSubmit={setPuzzleSize} />}
  </ThemeProvider>
  )
};

export default App;
