"use strict";
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
exports.Usuario = void 0;
var mongo = __importStar(require("../mongodb/mongodb.service"));
var mongodb_1 = require("mongodb");
var Usuario = /** @class */ (function () {
    function Usuario(u) {
        this.email = u.email;
        this.nombre = u.nombre;
        this.apellido = u.apellido;
        this.correoElectronico = u.correoElectronico;
        this.fotoPerfil = u.fotoPerfil;
        this.tipo = u.tipo;
        this.documento = u.documento;
        this.pais = u.pais;
        this.estado = u.estado;
        this.ciudad = u.ciudad;
        this.codigoPostal = u.codigoPostal;
        this.direccion = u.direccion;
        this.compañia = u.compañia;
        this.perfil = u.perfil;
        this.reservas = u.reservas;
        this.tarjetas = u.tarjetas;
        this.servicios = u.servicios;
        this.comentarios = u.comentarios;
    }
    Usuario.crearUsuario = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, existeUsuario, resultado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!usuario.email)
                            throw { codigo: 400, mensajeDesarrollador: "No puede crearse el usuario, email nulo." };
                        return [4 /*yield*/, mongo.obtenerCliente()];
                    case 1:
                        cliente = _a.sent();
                        return [4 /*yield*/, cliente.db().collection("usuarios").find({ email: usuario.email }).count()];
                    case 2:
                        existeUsuario = _a.sent();
                        if (existeUsuario)
                            throw { codigo: 400, mensajeDesarrollador: "No puede crearse el usuario, ya existe." };
                        return [4 /*yield*/, cliente.db().collection("usuarios").insertOne({ usuario: usuario })];
                    case 3:
                        resultado = _a.sent();
                        mongo.cerrarCliente(cliente);
                        return [2 /*return*/, resultado.insertedId];
                }
            });
        });
    };
    Usuario.sobreescribirUsuario = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, resultado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!usuario.email)
                            throw { codigo: 400, mensajeDesarrollador: "No puede crearse el usuario, email nulo." };
                        return [4 /*yield*/, mongo.obtenerCliente()];
                    case 1:
                        cliente = _a.sent();
                        return [4 /*yield*/, cliente.db().collection("usuarios").replaceOne({ email: usuario.email }, usuario, { upsert: true })];
                    case 2:
                        resultado = _a.sent();
                        mongo.cerrarCliente(cliente);
                        return [2 /*return*/, resultado.upsertedId];
                }
            });
        });
    };
    Usuario.buscarUsuarioPorId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, cliente, usuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            throw { codigo: 400, mensajeDesarrollador: "No puede obtenerse el usuario, id nulo." };
                        _id = new mongodb_1.ObjectID(id);
                        return [4 /*yield*/, mongo.obtenerCliente()];
                    case 1:
                        cliente = _a.sent();
                        return [4 /*yield*/, cliente.db().collection("usuarios").find({ _id: _id }).next()];
                    case 2:
                        usuario = _a.sent();
                        mongo.cerrarCliente(cliente);
                        return [2 /*return*/, usuario];
                }
            });
        });
    };
    Usuario.buscarUsuarioPorEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!email)
                            throw { codigo: 400, mensajeDesarrollador: "No puede obtenerse el usuario, email nulo." };
                        return [4 /*yield*/, mongo.obtenerCliente()];
                    case 1:
                        cliente = _a.sent();
                        return [4 /*yield*/, cliente.db().collection("usuarios").find({ email: email }).toArray()];
                    case 2:
                        usuarios = _a.sent();
                        mongo.cerrarCliente(cliente);
                        return [2 /*return*/, usuarios];
                }
            });
        });
    };
    return Usuario;
}());
exports.Usuario = Usuario;
