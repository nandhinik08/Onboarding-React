import Stepper from "../src/components/stepper";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Inter from "../font/Inter.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#644ce4",
    },
    // typography: {
    //   fontFamily: "Inter",
    // },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: `
    //       @font-face {
    //         font-family: 'Inter';
    //         font-style: normal;
    //         font-display: swap;
    //         font-weight: 400;
    //         src: local('Inter'), local('Inter-Regular'), url(${Inter}) format('ttf');
    //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //       }
    //     `,
    //   },
    // },
  },
});

export default function OnBoarding() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Box sx={{ margin: 2, paddingBottom: 6 }}>
            <Image src="/logo.png" alt="me" width="250" height="70" />
          </Box>
          <Stepper></Stepper>
        </main>
      </div>
    </ThemeProvider>
  );
}
