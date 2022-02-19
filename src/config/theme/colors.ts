export const colors = {
  cultured: "#F7F6F4",
  darkSlate: "#374B4A",
  salsa: "#FF5359",
  citron: "#FFCF4F",
  blackChocolate: "#221F1B",
  blueMunsell: "#508CA4",
};

export const colorPalettes = {
  earth: {
    50: colors.cultured,
    100: "#EEECE7",
    200: "#DED9CF",
    300: "#CDC6B6",
    400: "#BDB49E",
    500: "#8E8167",
    600: "#72685A",
    700: "#50493F",
    800: "#39342D",
    900: colors.blackChocolate,
  },
};

export const colorKeys = {
  background: colorPalettes.earth[100],
  text: colorPalettes.earth[900],
};
