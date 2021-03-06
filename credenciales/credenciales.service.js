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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.postCredenciales = exports.getCredencial = void 0;
var mongo = __importStar(require("../mongodb/mongodb.service"));
var usuario_model_1 = require("../usuario/usuario.model");
function getCredencial(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, contraseña, cliente, credencial;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = __assign({}, req.body), email = _a.email, contraseña = _a.contraseña;
                    if (!email)
                        throw { codigo: 400, mensajeDesarrollador: "No puede obtenerse la credencial, email nulo." };
                    if (!contraseña)
                        throw { codigo: 400, mensajeDesarrollador: "No puede obtenerse la credencial, contraseña nula." };
                    return [4 /*yield*/, mongo.obtenerCliente()];
                case 1:
                    cliente = _b.sent();
                    return [4 /*yield*/, cliente.db().collection("credenciales").find({ email: email, contraseña: contraseña }).next()];
                case 2:
                    credencial = _b.sent();
                    if (!credencial)
                        throw { codigo: 401, mensajeDesarrollador: "No puede obtenerse la credencial, credenciales inválidas." };
                    mongo.cerrarCliente(cliente);
                    return [2 /*return*/, res.status(200).json({ data: { usuario: credencial.usuario } })];
            }
        });
    });
}
exports.getCredencial = getCredencial;
function postCredenciales(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, contraseña, cliente, existeCredencial, usuario, resultado;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = __assign({}, req.body), email = _a.email, contraseña = _a.contraseña;
                    if (!email)
                        throw { codigo: 400, mensajeDesarrollador: "No puede crearse la credencial, email nulo." };
                    if (!contraseña)
                        throw { codigo: 400, mensajeDesarrollador: "No puede crearse la credencial, contraseña nula." };
                    return [4 /*yield*/, mongo.obtenerCliente()];
                case 1:
                    cliente = _b.sent();
                    return [4 /*yield*/, cliente.db().collection("credenciales").find({ email: email }).count()];
                case 2:
                    existeCredencial = _b.sent();
                    if (existeCredencial)
                        throw { codigo: 400, mensajeDesarrollador: "No puede crearse la credencial, email encontrado en credenciales." };
                    return [4 /*yield*/, usuario_model_1.Usuario.crearUsuario(req.body.email)];
                case 3:
                    usuario = _b.sent();
                    if (!usuario)
                        throw { codigo: 400, mensajeDesarrollador: "No puede crearse la credencial, usuario creado tiene id nulo." };
                    return [4 /*yield*/, cliente.db().collection("credenciales").insertOne({ email: email, contraseña: contraseña, usuario: usuario })];
                case 4:
                    resultado = _b.sent();
                    mongo.cerrarCliente(cliente);
                    return [2 /*return*/, res.status(200).send({ data: { usuario: usuario } })];
            }
        });
    });
}
exports.postCredenciales = postCredenciales;
