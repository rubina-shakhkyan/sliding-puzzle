import { createTheme } from "@mui/material/styles";
import { Color } from "./Color";

export const theme = createTheme({
  palette: {
    primary: {
      main: Color.PURPLE1,
    },
    secondary: {
      main: Color.PURPLE2,
    },
    background: {
      default: Color.WHITE,
    },
  },
});
