"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var moduleEx_1 = require("./moduleEx");
var MyCar = /** @class */ (function (_super) {
    __extends(MyCar, _super);
    function MyCar(name, price, color) {
        var _this = _super.call(this, name, price) || this;
        _this.color = color;
        return _this;
    }
    MyCar.prototype.power = function (pow) {
        console.log("power of " + this.name + " is now " + pow + " times");
    };
    return MyCar;
}(moduleEx_1.Vehical));
var nileshCar = new MyCar("BMW", 23232323, "black");
nileshCar.run(200);
nileshCar.power(3);
nileshCar.stop();
