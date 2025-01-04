import { invoke } from '@tauri-apps/api/core';

export const SendCommand = async (command: string, port: string) => {
  try {
    console.log(`Sending command ${command} to port ${port}`);
    await invoke('send_to_arduino', { portName: port, command });
  } catch (e){
    alert(`Error: ${e}`)
  }
}