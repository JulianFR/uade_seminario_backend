"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atraparErroresAsincronos = exports.lanzarError = void 0;
function lanzarError(codigo, mensajeUsuario, mensajeDesarrollador) {
    if (codigo === void 0) { codigo = 500; }
    throw { codigo: codigo, mensajeUsuario: mensajeUsuario, mensajeDesarrollador: mensajeDesarrollador };
}
exports.lanzarError = lanzarError;
function atraparErroresAsincronos(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Promise.resolve(fn.apply(void 0, args)).catch(args[2]);
    };
}
exports.atraparErroresAsincronos = atraparErroresAsincronos;
