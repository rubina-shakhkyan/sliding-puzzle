import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Container } from "./WelcomeForm.styles";
import { Title, VerticalSpacer } from "../shared/shared.styles";

interface WelcomeFormProps {
  onSubmit(puzzleSize: number): void;
}
export const WelcomeForm = ({ onSubmit }: WelcomeFormProps) => {
  const [puzzleSize, setPuzzleSize] = useState(0);

  return (
    <Container>
      <Title>Welcome To The Sliding Puzzle Challenge!</Title>
       {/* ToDo: Wrap the form in a nice div with a background  */}
      <TextField
        type="number"
        label="Number of tiles"
        InputProps={{
          inputProps: {
            max: 12,
            min: 3,
          },
        }}
        value={puzzleSize}
        onChange={(event) => setPuzzleSize(parseInt(event.target.value))}
      />
      <VerticalSpacer />
      <Button
        onClick={() => onSubmit(puzzleSize)}
        disabled={!puzzleSize}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </Container>
  );
};
