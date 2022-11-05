import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { teal } from "@mui/material/colors";

//! Material.Uı kullanılma nedenleri
//! Eski bir kütüphane olduğu için bilindik ve genel kullanım gördüğünden
//! Mobil cihazlarda kullanılabiliyor, react neativ ile uyumlu
//! Styling güzel olduğu için tercih sebebi.
const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#15cf34",
        dark: "#084712",
        light: "#74e887",
      },
      secondary: {
        main: teal[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
