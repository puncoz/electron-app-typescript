import { app, BrowserWindow } from "electron"
import { AppConfig } from "./config"
import { ElectronIsDev } from "./helpers"
import { URL } from "url"

class App {
    private static window?: BrowserWindow

    public static bootstrap() {
        // This method will be called when Electron has finished
        // initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        app.on("ready", App.createWindow)

        // Quit when all windows are closed.
        app.on("window-all-closed", App.onWindowClosed)

        app.on("activate", App.onActivate)
    }

    private static onWindowClosed() {
        // On macOS it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== "darwin") {
            app.quit()
        }
    }

    private static onActivate() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (App.window === null) {
            App.createWindow()
        }
    }

    private static createWindow() {
        // Create the browser window.
        // Keep a global reference of the window object, if you don't, the window will
        // be closed automatically when the JavaScript object is garbage collected.
        App.window = new BrowserWindow(AppConfig.window)

        // load the index.html of the app.
        App.window.loadFile("../index.html")

        if (ElectronIsDev) {
            App.window.webContents.openDevTools()
        }

        // Emitted when the window is closed.
        App.window.on("closed", () => {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            App.window = null
        })
    }
}

export default App