import { BrowserWindow } from "electron"
import Window from "./Window";

export default class Main {
    static application: Electron.App
    static mainWindow: Electron.BrowserWindow

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit()
        }
    }

    private static onClose() {
        Main.mainWindow = null
    }

    private static onReady() {
        Main.mainWindow = new Window({
            width: 800,
            height: 600
        })
        Main.mainWindow.loadFile("../index.html")
        Main.mainWindow.on("closed", Main.onClose)
    }

    static main(app: Electron.App) {
        Main.application = app
        Main.application.on("window-all-closed", Main.onWindowAllClosed)
        Main.application.on("ready", Main.onReady)
    }
}