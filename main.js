"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var main_middleware_1 = require("./main.middleware");
var huesped_controller_1 = require("./huesped/huesped.controller");
express_1.default()
    .use(morgan_1.default("dev"))
    .use(express_1.default.json())
    .use('/api/v1.0/', new huesped_controller_1.HuespedController().rutador)
    .use(main_middleware_1.manejadorDeErrores)
    .listen(process.env.PORT || 3000);
