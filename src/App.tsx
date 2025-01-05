import "./App.css";
import 'react-awesome-button/dist/styles.css';
import { useState } from "react";
import { Provider } from "./components/ui/provider"
import { Box } from "@chakra-ui/react"
import InputColumn from "./components/layout/InputColumn.tsx";
import ChannelColumn from "./components/layout/ChannelColumn.tsx";
import MasterColumn from "./components/layout/MasterColumn.tsx";
import {SendCommand} from "./functions/commands.ts"

function App() {
const [greenLedOn, setGreenLedOn] = useState<boolean>(false);
const [yellowLedOn, setYellowLedOn] = useState<boolean>(false);
const [redLedOn, setRedLedOn] = useState<boolean>(false);
const [panValue, setPanValue] = useState<number>(0);
const trafficLightPort: string = '/dev/cu.usbmodem141101';

const handleLedChange = (colour: string): void => {

  console.log('test');

  if(colour.toLowerCase() == 'green') {
    SendCommand((greenLedOn ? 'g' : 'G'), trafficLightPort);
    setGreenLedOn(!greenLedOn);
  }
  if(colour.toLowerCase() == 'yellow') {
    SendCommand((yellowLedOn ? 'y' : 'Y'), trafficLightPort);
    setYellowLedOn(!yellowLedOn);
  }
  if(colour.toLowerCase() == 'red') {
    SendCommand((redLedOn ? 'r' : 'R'), trafficLightPort);
    setRedLedOn(!redLedOn);
  }
}

const temp = (): void => console.log('test3');

  return (
    <Provider>
      <Box as="main" className="container" height="100vh" display="flex" flexDirection="row" justifyContent="center" alignItems="center" bg="gray.50" padding="0">
        <ChannelColumn panValue={panValue} setPanValue={setPanValue}/>
        <InputColumn handleLedChange={handleLedChange}/>
        <MasterColumn/>        
      </Box>
    </Provider>
  );
}

export default App;
