import { Box, Flex, Text } from "@chakra-ui/react"
import { Slider } from "../ui/slider.tsx";
import { White } from 'react-dial-knob'

type ChannelColumnProps = {
    panValue: number,
    setPanValue: React.Dispatch<React.SetStateAction<number>>;
}

const ChannelColumn: React.FC<ChannelColumnProps> = ({panValue, setPanValue}) => {
    return (
        <Box background="tomato" width="50%" height="100%" padding="4" margin="auto" >
          <Flex direction="column" gap="4" height="100%">
            <Text textStyle="md">Gain</Text>
            <Slider height="200px" orientation="vertical" defaultValue={[40]} />
            <Box margin="auto">
              <White diameter={100} min={0} max={50} step={1} value={panValue} onValueChange={setPanValue} ariaLabelledBy={'pan-value'}
              theme={{ 
                activeNotchColor: 'red',
                defaultNotchColor: 'floralwhite'
                }}>
                <label id={'pan'}>Pan</label>
              </White>
            </Box>
          </Flex>
        </Box>
    )
}

export default ChannelColumn;