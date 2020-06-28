"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasController = void 0;
var express_1 = require("express");
var main_util_1 = require("../main.util");
var reserva_service_1 = require("./reserva.service");
var ReservasController = /** @class */ (function () {
    function ReservasController() {
        this.ruta = express_1.Router();
        this.ruta
            .get("/:id", main_util_1.atraparErroresAsincronos(reserva_service_1.getReserva))
            .post("/", main_util_1.atraparErroresAsincronos(reserva_service_1.postReserva));
    }
    return ReservasController;
}());
exports.ReservasController = ReservasController;
