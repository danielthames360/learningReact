import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { greenTheme } from "./greenTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={greenTheme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
