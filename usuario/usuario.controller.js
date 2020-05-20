"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
var express_1 = __importDefault(require("express"));
var usuario_service_1 = require("./usuario.service");
var main_util_1 = require("../main.util");
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
        this.rutador = express_1.default.Router();
        this.rutador
            .get("/usuario/:id", main_util_1.atraparErroresAsincronos(usuario_service_1.getUsuario))
            .get("/usuarios", main_util_1.atraparErroresAsincronos(usuario_service_1.getUsuarios))
            .post("/usuarios", main_util_1.atraparErroresAsincronos(usuario_service_1.postUsuario));
    }
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
