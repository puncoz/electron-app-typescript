import { BrowserWindow } from "electron";

interface WindowSettings {
    width: number,
    height: number
}

export default class Window extends BrowserWindow {
    constructor(props: WindowSettings) {
        super(props)
    }
}