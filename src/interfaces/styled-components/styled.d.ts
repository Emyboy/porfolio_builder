// #region Global Imports
import "styled-components";
// #endregion Global Imports
type CommonColors = "transparent" | "darkGrey" | "blackGrey" | "white";

type ExtendedColors =
    | CommonColors
    | "accent_color"
    | "background"
    | "theme_color"
    | "text_color"
declare module "styled-components" {
    export interface BaseTheme {
        colors: Record<CommonColors, string>;
    }

    export interface DefaultTheme extends BaseTheme {
        colors: Record<ExtendedColors, string>;
    }
}
