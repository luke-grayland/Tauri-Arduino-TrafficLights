import { Button } from "@chakra-ui/react"
import { ColourNames } from "./Constants"

type LightButtonProps = {
    handleLedChange: (colour: String) => void,
    colourName: String
}

interface ButtonTheme {
    Hex: String
}

const GetButtonThemeByColour = (colour: String): ButtonTheme => {

    let hex: String = '';

    if(colour == ColourNames.Green)
        hex = "#123"

    return {
        Hex: hex
    }
}

const LightButton: React.FC<LightButtonProps> = ({handleLedChange, colourName}) => {

    let x = GetButtonThemeByColour(colourName);

    return (
        <>
            {/* <AwesomeButton onPress={() => handleLedChange(colourName)}
            style={{ 
                marginLeft: '5rem', 
                marginRight: '5rem',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                }}>
            {colourName}
            </AwesomeButton> */}

            <Button onClick={() => handleLedChange(colourName)}>{colourName}</Button>

        </>
    )
}

export default LightButton
