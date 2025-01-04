import { Box, Flex, Text } from "@chakra-ui/react"
import { Slider } from "../../components/ui/slider.tsx";

const MasterColumn = () => {
    return (
        <Box background="tomato" width="50%" height="100%" padding="4" paddingBottom="10" margin="auto" >
            <Flex direction="column" gap="4" height="100%">
                <Text textStyle="md">Volume</Text>
                <Slider height="100%" orientation="vertical" defaultValue={[40]} />
            </Flex>
        </Box>
    )
}

export default MasterColumn