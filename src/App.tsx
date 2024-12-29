import "./App.css";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { invoke } from '@tauri-apps/api/core';

function App() {

const trafficLightPort: string = '/dev/cu.usbmodem141101';

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
      <AwesomeButton onPress={() => sendCommand('G')} type="primary">
        Green
      </AwesomeButton>
      <AwesomeButton onPress={() => sendCommand('Y')} type="primary">
        Yellow
      </AwesomeButton>
      <AwesomeButton onPress={() => sendCommand('R')} type="primary">
        Red
      </AwesomeButton>
    </main>
  );
}

export default App;
