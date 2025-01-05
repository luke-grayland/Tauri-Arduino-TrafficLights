import { ColourNames } from ".././Constants"

export interface ButtonTheme {
    Colour: string,
    Text: string
}

export const GetButtonThemeByColour = (colour: string): ButtonTheme => {
    let hex: string = '';
    let text: string = '';

    switch(colour) {
        case ColourNames.Green:
            hex = "green"; 
            text = "white";
            break;
        case ColourNames.Yellow:
            hex = "yellow";
            text = "black";
            break;

        case ColourNames.Red:
            hex = "red";
            text = "white";
            break;
    }

    return {
        Colour: hex,
        Text: text
    }
}