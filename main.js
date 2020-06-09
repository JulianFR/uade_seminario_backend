"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var main_middleware_1 = require("./main.middleware");
var credenciales_controller_1 = require("./credenciales/credenciales.controller");
var usuario_controller_1 = require("./usuario/usuario.controller");
var hoteles_controller_1 = require("./hoteles/hoteles.controller");
express_1.default()
    .use(morgan_1.default("dev"))
    .use(express_1.default.json())
    .use(main_middleware_1.cors)
    .use('/api/v1.0/', new credenciales_controller_1.CredencialesController().rutador)
    .use('/api/v1.0/', new usuario_controller_1.UsuarioController().rutador)
    .use('/api/v1.0/', new hoteles_controller_1.HotelesController().ruta)
    .use(main_middleware_1.manejadorDeErrores)
    .listen(process.env.PORT || 3000);
