import { ThemeProvider } from '@mui/material/styles';
import { PrimaryTitle, SecondaryTitle } from '../components/shared/shared.styles';
import { theme } from '../design-system';

export const PrimaryTitleStory = () => (
  <ThemeProvider theme={theme}>
    <PrimaryTitle>This is a primary title</PrimaryTitle>
  </ThemeProvider>
);

export const SecondaryTitleStory = () => (
  <ThemeProvider theme={theme}>
    <SecondaryTitle>This is a secondary title</SecondaryTitle>
  </ThemeProvider>
);