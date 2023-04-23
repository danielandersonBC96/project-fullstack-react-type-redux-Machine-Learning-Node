
// eslint-disable-next-line

import { Palette, PaletteColor } from "@mui/material";

declare module  "@mui/material" {

    interface PaletteColor {
        [Key : number] : string
    }

    interface Palette {

        tertiary: PaletteColor

    }
}