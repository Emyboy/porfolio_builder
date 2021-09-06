// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
    colors: {
        ...common.colors,
        background: "#e6e9fe",
        accent_color: "#cde9f2",
        theme_color: "#02A499",
        text_color: "#6894BE",
    },
};

export { light };
