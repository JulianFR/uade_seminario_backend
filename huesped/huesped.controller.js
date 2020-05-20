"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuespedController = void 0;
var express_1 = __importDefault(require("express"));
var huesped_service_1 = require("./huesped.service");
var HuespedController = /** @class */ (function () {
    function HuespedController() {
        this.rutador = express_1.default.Router();
        this.rutador.get("/huespedes", function (req, res) {
            huesped_service_1.prueba();
            res.status(200).send("OK");
        });
    }
    return HuespedController;
}());
exports.HuespedController = HuespedController;
