use std::time::Duration;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![send_to_arduino])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn send_to_arduino(port_name: &str, command: &str) -> Result<(), String> {
    println!("Attempting to open port");
    let port = serialport::new(port_name, 9600)
        .timeout(Duration::from_millis(500))
        .open();

    println!("Pausing to allow port to reset...");
    std::thread::sleep(Duration::from_millis(2000));

    println!("Attempting to send command: {}", command);
    match port {
        Ok(mut port) => {
            println!("Port opened successfully");
            if let Err(e) = port.write(command.as_bytes()) {
                println!("Failed to send command: {}", command);
                return Err(format!("Failed to write to port: {}", e));
            }
            println!("Success sending command: {}", command);
            Ok(())
        }
        Err(e) => {
            println!("Failed to open port: {}", e);
            Err(format!("Failed to open port: {}", e))
        }
    }
}
