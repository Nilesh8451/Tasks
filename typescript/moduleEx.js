"use strict";
exports.__esModule = true;
exports.Vehical = void 0;
var Vehical = /** @class */ (function () {
    function Vehical(name, price) {
        this.name = name;
        this.price = price;
    }
    Vehical.prototype.run = function (speed) {
        console.log(this.name + " is running at speed of " + speed);
    };
    Vehical.prototype.stop = function () {
        console.log(this.name + " is stopped");
    };
    return Vehical;
}());
exports.Vehical = Vehical;
