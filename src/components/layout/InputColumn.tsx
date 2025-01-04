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
            <Flex direction="column" gap="4" height="100%" justifyContent="space-around">
                <Text color="black" fontWeight="medium" textStyle="2xl">Controller v1.0</Text>
                <Box>
                    <Flex direction="column" gap="4" height="100%" justifyContent={"space-between"}>
                        <Text textStyle="md">Input Selector</Text>
                        <LightButton label="Input 1" handleLedChange={handleLedChange} colourName={ColourNames.Green}/>
                        <LightButton label="Input 2" handleLedChange={handleLedChange} colourName={ColourNames.Yellow}/>
                        <LightButton label="Input 3" handleLedChange={handleLedChange} colourName={ColourNames.Red}/>
                    </Flex>
                </Box>
                <Box marginBottom={20}>
                    <Text textStyle="md">LP/HP Filter</Text>
                    <Slider width="200px" defaultValue={[30, 60]} margin="auto"/>
                </Box>
            </Flex>
        </Box>
    )
}

export default InputColumn