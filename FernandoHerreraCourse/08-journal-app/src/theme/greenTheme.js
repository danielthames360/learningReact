import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: green[100],
    },
    secondary: {
      main: green[200],
    },
    error: {
      main: red[300],
    },
  },
});
