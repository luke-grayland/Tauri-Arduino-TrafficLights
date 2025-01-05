import { Button } from "@chakra-ui/react"
import { ButtonTheme, GetButtonThemeByColour } from "./functions/themeFunctions";

interface LightButtonProps {
    handleLedChange: (colour: string) => void,
    colourName: string,
    label: string,
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
