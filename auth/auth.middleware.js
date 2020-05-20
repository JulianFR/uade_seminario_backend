"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarEscritura = exports.autorizarToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var main_util_1 = require("../main.util");
var auth_configuration_json_1 = require("./auth.configuration.json");
function autorizarToken(req, res, next) {
    var credenciales = req.headers.authorization;
    if (credenciales) {
        var token = jsonwebtoken_1.default.decode(credenciales.split(" ")[1]);
        var tiempo = token.exp < Math.floor(new Date().getTime() / 1000);
        if (tiempo) {
            main_util_1.lanzarError(401, "No autorizado", "Token inv\u00E1lido, tiempo expirado: " + tiempo);
        }
        if (token.iss !== auth_configuration_json_1.proveedor) {
            main_util_1.lanzarError(401, "No autorizado", "Token inv\u00E1lido, proveedor inv\u00E1lido: " + token.iss);
        }
        if (token.client_id !== auth_configuration_json_1.cliente) {
            main_util_1.lanzarError(401, "No autorizado", "Token inv\u00E1lido, cliente inv\u00E1lido: " + token.client_id);
        }
        Object.assign(req, { tokenFront: token });
        return next();
    }
    main_util_1.lanzarError(401, "No autorizado", "Token inv\u00E1lido, sin encabezado de autenticacion");
}
exports.autorizarToken = autorizarToken;
;
function verificarEscritura(req, res, next) {
    if (req.tokenFront) {
        if (!req.tokenFront.scope.includes('aerodromosCovid19Escritura')) {
            main_util_1.lanzarError(401, "No autorizado", "Token inv\u00E1lido, alcance inv\u00E1lido: " + req.tokenFront.scope);
        }
        return next();
    }
}
exports.verificarEscritura = verificarEscritura;
;
