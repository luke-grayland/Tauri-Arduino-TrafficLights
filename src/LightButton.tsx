import { Button } from "@chakra-ui/react"
import { ColourNames } from "./Constants"

type LightButtonProps = {
    handleLedChange: (colour: String) => void,
    colourName: String,
    label: String
}

interface ButtonTheme {
    Colour: String,
    Text: String
}

const GetButtonThemeByColour = (colour: String): ButtonTheme => {
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

const LightButton: React.FC<LightButtonProps> = ({handleLedChange, colourName, label}) => {

    let buttonTheme: ButtonTheme = GetButtonThemeByColour(colourName);

    return (
        <>
            <Button bgColor={`${buttonTheme.Colour}`} color={`${buttonTheme.Text}`} onClick={() => handleLedChange(colourName)}>
                {label}
            </Button>
        </>
    )
}

export default LightButton
