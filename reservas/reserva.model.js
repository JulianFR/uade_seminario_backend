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
exports.Reserva = void 0;
var mongo = __importStar(require("../mongodb/mongodb.service"));
var mongodb_1 = require("mongodb");
var usuario_model_1 = require("../usuario/usuario.model");
var hotel_model_1 = require("../hoteles/hotel.model");
var Reserva = /** @class */ (function () {
    function Reserva() {
    }
    Reserva.buscarReservaPorId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, cliente, reserva;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            throw { codigo: 400, mensajeDesarrollador: "No puede obtenerse la reserva, id nulo." };
                        _id = new mongodb_1.ObjectID(id);
                        return [4 /*yield*/, mongo.obtenerCliente()];
                    case 1:
                        cliente = _a.sent();
                        return [4 /*yield*/, cliente.db().collection("reservas").find({ _id: _id }).next()];
                    case 2:
                        reserva = _a.sent();
                        mongo.cerrarCliente(cliente);
                        return [2 /*return*/, reserva];
                }
            });
        });
    };
    Reserva.crearReserva = function (datos) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, huesped, hotel, numeracionReserva, numeroReserva, resultado, _id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mongo.obtenerCliente()];
                    case 1:
                        cliente = _a.sent();
                        return [4 /*yield*/, usuario_model_1.Usuario.buscarUsuarioPorEmail(datos.huesped)];
                    case 2:
                        huesped = (_a.sent())[0];
                        return [4 /*yield*/, hotel_model_1.Hotel.buscarHotelPorEmail(datos.hotel)];
                    case 3:
                        hotel = (_a.sent())[0];
                        return [4 /*yield*/, cliente.db().collection("numeracion").findOne({ numeracion: "reservas" })];
                    case 4:
                        numeracionReserva = _a.sent();
                        if (!!numeracionReserva) return [3 /*break*/, 6];
                        return [4 /*yield*/, cliente.db().collection("numeracion").insertOne({ numeracion: "reservas", numero: numeroReserva })];
                    case 5:
                        _a.sent();
                        numeroReserva = 1;
                        return [3 /*break*/, 8];
                    case 6:
                        console.log(numeracionReserva.numero);
                        numeroReserva = numeracionReserva.numero + 1;
                        return [4 /*yield*/, cliente.db().collection("numeracion").findOneAndReplace({ numeracion: "reservas" }, { numeracion: "reservas", numero: numeroReserva })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [4 /*yield*/, cliente.db().collection("reservas").insertOne(__assign(__assign({}, datos), { numero: numeroReserva }))];
                    case 9:
                        resultado = _a.sent();
                        _id = resultado.insertedId;
                        if (!huesped.reservas) {
                            huesped.reservas = [];
                        }
                        if (!hotel.reservas) {
                            hotel.reservas = [];
                        }
                        huesped.reservas.push({ _id: _id, numero: numeroReserva, hotel: datos.hotel, checkIn: datos.checkIn, cantHuespedes: datos.cantHuespedes });
                        hotel.reservas.push({ _id: _id, numero: numeroReserva, huesped: datos.huesped, checkIn: datos.checkIn, cantHuespedes: datos.cantHuespedes });
                        return [4 /*yield*/, usuario_model_1.Usuario.sobreescribirUsuario(huesped)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, hotel_model_1.Hotel.sobreescribirHotel(hotel)];
                    case 11:
                        _a.sent();
                        mongo.cerrarCliente(cliente);
                        return [2 /*return*/, __assign({ _id: _id }, datos)];
                }
            });
        });
    };
    return Reserva;
}());
exports.Reserva = Reserva;
