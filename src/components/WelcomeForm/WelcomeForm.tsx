import React, { useState } from "react";
import {
  Container,
  PrimaryTitle,
  VerticalSpacer,
} from "../../design-system/shared.styles";
import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  useTheme,
} from "@mui/material";

interface WelcomeFormProps {
  onSubmit(puzzleSize: string): void;
}
export const WelcomeForm = ({ onSubmit }: WelcomeFormProps) => {
  const theme = useTheme();
  const [puzzleSize, setPuzzleSize] = useState("");
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit(puzzleSize);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPuzzleSize(event.target.value);
  };

  return (
    <Container>
      <PrimaryTitle theme={theme}>
        Welcome To The Sliding Puzzle Challenge!
      </PrimaryTitle>
      <VerticalSpacer size={36} />
      <FormControl component="form" onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            type="number"
            label="Number of tiles"
            helperText="Please enter a number between 3 and 20"
            required
            inputProps={{
              min: 2,
              max: 20,
            }}
            value={puzzleSize}
            onChange={handleInputChange}
          />
          <VerticalSpacer size={24} />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </FormControl>
    </Container>
  );
};
