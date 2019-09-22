"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var electron_1 = require("electron");
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(props) {
        return _super.call(this, props) || this;
    }
    return Window;
}(electron_1.BrowserWindow));
exports["default"] = Window;
//# sourceMappingURL=Window.js.map