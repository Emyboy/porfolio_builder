// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
    colors: {
        ...common.colors,
        background: "#252735",
        accent_color: "#2A3142",
        theme_color: "#02A499",
        text_color: "#6894BE",
    },
};

export { dark };
