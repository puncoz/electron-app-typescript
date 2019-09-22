"use strict";
exports.__esModule = true;
var Window_1 = require("./Window");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    };
    Main.onClose = function () {
        Main.mainWindow = null;
    };
    Main.onReady = function () {
        Main.mainWindow = new Window_1["default"]({
            width: 800,
            height: 600
        });
        Main.mainWindow.loadFile("../index.html");
        Main.mainWindow.on("closed", Main.onClose);
    };
    Main.main = function (app) {
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowAllClosed);
        Main.application.on("ready", Main.onReady);
    };
    return Main;
}());
exports["default"] = Main;
//# sourceMappingURL=Main.js.map