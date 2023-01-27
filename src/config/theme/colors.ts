export const colors = {
  cultured: "#F7F6F4",
  isabeline: "#EFEDE7",
  salsa: "#FF5359",
  international: "#BF0603",
  citron: "#FFCF4F",
  blueMunsell: "#508CA4",
  slateGreen: "#374B4A",
  independence: "#464C5D",
  gunmetal: "#30343F",
  blackChocolate: "#221F1B",
  xiketic: "#0D0221",
};

export const colorPalettes = {
  earth: {
    50: colors.cultured,
    100: colors.isabeline,
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
  background: colorPalettes.earth[50],
  text: colorPalettes.earth[900],
};
