import "./App.css";
import 'react-awesome-button/dist/styles.css';
import { invoke } from '@tauri-apps/api/core';
import { useState } from "react";
import LightButton from "./LightButton";
import { ColourNames } from "./Constants.ts"
import { Provider } from "./components/ui/provider"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Slider } from "./components/ui/slider.tsx";

function App() {
const [greenLedOn, setGreenLedOn] = useState<boolean>(false);
const [yellowLedOn, setYellowLedOn] = useState<boolean>(false);
const [redLedOn, setRedLedOn] = useState<boolean>(false);

const trafficLightPort: string = '/dev/cu.usbmodem141101';

const handleLedChange = (colour: String): void => {
  if(colour.toLowerCase() == 'green') {
    sendCommand(greenLedOn ? 'g' : 'G');
    setGreenLedOn(!greenLedOn);
  }
  if(colour.toLowerCase() == 'yellow') {
    sendCommand(yellowLedOn ? 'y' : 'Y');
    setYellowLedOn(!yellowLedOn);
  }
  if(colour.toLowerCase() == 'red') {
    sendCommand(redLedOn ? 'r' : 'R');
    setRedLedOn(!redLedOn);
  }
}

const sendCommand = async (command: string) => {
  try {
    console.log(`Sending command ${command} to port ${trafficLightPort}`);
    await invoke('send_to_arduino', { portName: trafficLightPort, command });
  } catch (e){
    alert(`Error: ${e}`)
  }
}

  return (
    <Provider>
      <Box as="main" className="container" height="100vh" display="flex" flexDirection="row" justifyContent="center" alignItems="center" bg="gray.50" padding="0">
        <Box background="tomato" width="50%" height="100%" padding="4" margin="auto" >
          <Flex direction="column" gap="4" height="100%">
            <Text textStyle="md">Gain</Text>
            <Slider height="200px" orientation="vertical" defaultValue={[40]} />
          </Flex>
        </Box>
        <Box background="tomato" width="50%" height="100%" padding="4" margin="auto" >
          <Flex direction="column" gap="4" height="100%">
            <LightButton label="Input 1" handleLedChange={handleLedChange} colourName={ColourNames.Green}/>
            <LightButton label="Input 2" handleLedChange={handleLedChange} colourName={ColourNames.Yellow}/>
            <LightButton label="Input 3" handleLedChange={handleLedChange} colourName={ColourNames.Red}/>
            <Text textStyle="md">LP/HP Filter</Text>
            <Slider width="200px" defaultValue={[30, 60]} margin="auto"/>
          </Flex>
        </Box>
        <Box background="tomato" width="50%" height="100%" padding="4" margin="auto" >
          <Flex direction="column" gap="4" height="100%">
            <Text textStyle="md">Volume</Text>
            <Slider height="100%" orientation="vertical" defaultValue={[40]} />
          </Flex>
        </Box>  
      </Box>
    </Provider>
  );
}

export default App;
