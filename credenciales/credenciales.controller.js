"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredencialesController = void 0;
var express_1 = __importDefault(require("express"));
var main_util_1 = require("../main.util");
var credenciales_service_1 = require("./credenciales.service");
var CredencialesController = /** @class */ (function () {
    function CredencialesController() {
        this.rutador = express_1.default.Router();
        this.rutador
            .get("/credencial", main_util_1.atraparErroresAsincronos(credenciales_service_1.getCredencial))
            .post("/credenciales", main_util_1.atraparErroresAsincronos(credenciales_service_1.postCredenciales));
    }
    return CredencialesController;
}());
exports.CredencialesController = CredencialesController;
