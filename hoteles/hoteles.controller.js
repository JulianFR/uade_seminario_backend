"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelesController = void 0;
var express_1 = __importDefault(require("express"));
var main_util_1 = require("../main.util");
var hotel_service_1 = require("./hotel.service");
var HotelesController = /** @class */ (function () {
    function HotelesController() {
        this.ruta = express_1.default.Router();
        this.ruta
            .get("/hotel/:id", main_util_1.atraparErroresAsincronos(hotel_service_1.getHotel))
            .get("/hoteles", main_util_1.atraparErroresAsincronos(hotel_service_1.getHoteles))
            .post("/hoteles", main_util_1.atraparErroresAsincronos(hotel_service_1.postHotel))
            .put("/hoteles", main_util_1.atraparErroresAsincronos(hotel_service_1.putHotel));
    }
    return HotelesController;
}());
exports.HotelesController = HotelesController;
