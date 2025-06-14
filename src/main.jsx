import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import theme from "./Theme/Theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
);
