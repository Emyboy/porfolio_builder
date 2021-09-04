// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
    colors: {
        ...common.colors,
        background: "#acb5f3",
        accent_color: "#8da5dd",
        theme_color: "#02A499",
        text_color: "#6894BE",
    },
};

export { light };
