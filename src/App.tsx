import "./App.css";
import 'react-awesome-button/dist/styles.css';
import { invoke } from '@tauri-apps/api/core';
import { useState } from "react";
import LightButton from "./LightButton";
import { ColourNames } from "./Constants.ts"

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
    <main className="container">
      <h1>Traffic Lights v1</h1>

      <LightButton handleLedChange={handleLedChange} colourName={ColourNames.Green}/>
      <LightButton handleLedChange={handleLedChange} colourName={ColourNames.Yellow}/>
      <LightButton handleLedChange={handleLedChange} colourName={ColourNames.Red}/>
    
    </main>
  );
}

export default App;
