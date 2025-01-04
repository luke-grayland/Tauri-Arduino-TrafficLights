import LightButton from "../../LightButton.tsx";
import { ColourNames } from "../../Constants.ts"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Slider } from "../ui/slider.tsx";

type InputColumnProps = {
    handleLedChange: () => void
}

const InputColumn: React.FC<InputColumnProps> = ({handleLedChange}) => {
    return (
        <Box background="tomato" width="50%" height="100%" padding="4" margin="auto" >
            <Flex direction="column" gap="4" height="100%">
                <LightButton label="Input 1" handleLedChange={handleLedChange} colourName={ColourNames.Green}/>
                <LightButton label="Input 2" handleLedChange={handleLedChange} colourName={ColourNames.Yellow}/>
                <LightButton label="Input 3" handleLedChange={handleLedChange} colourName={ColourNames.Red}/>
                <Text textStyle="md">LP/HP Filter</Text>
                <Slider width="200px" defaultValue={[30, 60]} margin="auto"/>
            </Flex>
        </Box>
    )
}

export default InputColumn