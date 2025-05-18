import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#62483A", // เปลี่ยนตามต้องการ
    },
    secondary: {
      main: "#EFD5C7",
    },
    background: {
      default: "#f2eee7",
    },
    text:{
        main: "#1e1e2f",
        secondary:"#1e1e2fbc"
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: "3rem",
    h2: "1.75rem",
    h3: "1.25rem",
  },
});

export default theme;