import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
    @font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler-UltraLight.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler-UltraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}
@font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler-Medium.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler-Light.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler-Black.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}
@font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler-Bold.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler-ExtraBold.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}
@font-face {
    font-family: 'Butler';
    src: url('../../../assets/fonts/butler/Butler.woff2') format('woff2'),
        url('../../../assets/fonts/butler/Butler.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  `}
    />
  );
};

export default Fonts;
