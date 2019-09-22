import { BrowserWindowConstructorOptions } from "electron";

export default {
    window: <BrowserWindowConstructorOptions>{
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    }
}