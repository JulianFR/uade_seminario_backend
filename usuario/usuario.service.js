"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUsuario = exports.postUsuario = exports.getUsuarios = exports.getUsuario = void 0;
var usuario_model_1 = require("./usuario.model");
function getUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var usuario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usuario_model_1.Usuario.buscarUsuarioPorId(req.params.id)];
                case 1:
                    usuario = _a.sent();
                    if (!usuario)
                        return [2 /*return*/, res.status(404).json({
                                error: {
                                    codigo: 404,
                                    mensajeDesarrollador: "No puede obtenerse el usuario, _id no encontrado"
                                }
                            })];
                    return [2 /*return*/, res.status(200).json({ data: { usuario: usuario } })];
            }
        });
    });
}
exports.getUsuario = getUsuario;
function getUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, usuarios, cantidadUsuarios, usuario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.query.email;
                    return [4 /*yield*/, usuario_model_1.Usuario.buscarUsuarioPorEmail(email)];
                case 1:
                    usuarios = _a.sent();
                    cantidadUsuarios = usuarios.length;
                    if (cantidadUsuarios === 0)
                        return [2 /*return*/, res.status(404).send({
                                error: {
                                    codigo: 404,
                                    mensajeDesarrollador: "No puede obtenerse el usuario, email no encontrado"
                                }
                            })];
                    if (cantidadUsuarios > 1)
                        throw { codigo: 500, mensajeDesarrollador: "No puede obtenerse el usuario, más de un usuario con el mismo email." };
                    usuario = usuarios[0];
                    return [2 /*return*/, res.status(200).json({ data: { usuario: usuario } })];
            }
        });
    });
}
exports.getUsuarios = getUsuarios;
function postUsuario(_a, res) {
    var body = _a.body;
    return __awaiter(this, void 0, void 0, function () {
        var usuario;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, usuario_model_1.Usuario.crearUsuario(body)];
                case 1:
                    usuario = _b.sent();
                    return [2 /*return*/, res.status(200).json({ data: { usuario: usuario } })];
            }
        });
    });
}
exports.postUsuario = postUsuario;
function putUsuario(_a, res) {
    var _b;
    var body = _a.body;
    return __awaiter(this, void 0, void 0, function () {
        var usuarios, reservas, usuario;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, usuario_model_1.Usuario.buscarUsuarioPorEmail(body.email)];
                case 1:
                    usuarios = _c.sent();
                    reservas = ((_b = usuarios[0]) === null || _b === void 0 ? void 0 : _b.reservas) || [];
                    return [4 /*yield*/, usuario_model_1.Usuario.sobreescribirUsuario(__assign(__assign({}, body), { reservas: reservas }))];
                case 2:
                    usuario = _c.sent();
                    if (usuario) {
                        return [2 /*return*/, res.status(201).json({ data: { usuario: usuario } })];
                    }
                    else {
                        return [2 /*return*/, res.status(204).send()];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.putUsuario = putUsuario;
