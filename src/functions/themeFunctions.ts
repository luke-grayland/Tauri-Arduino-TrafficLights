import { ColourNames } from ".././Constants"

export interface ButtonTheme {
    Colour: String,
    Text: String
}

export const GetButtonThemeByColour = (colour: String): ButtonTheme => {
    let hex: String = '';
    let text: String = '';

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