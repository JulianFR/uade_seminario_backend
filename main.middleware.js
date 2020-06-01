"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = exports.manejadorDeErrores = void 0;
function manejadorDeErrores(err, req, res, next) {
    var _a, _b, _c, _d;
    var error = err.codigo ? err : (_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error;
    if (error) {
        console.log({ error: error });
        return res.status(error.codigo).json({ error: error });
    }
    return res.status(((_c = err.response) === null || _c === void 0 ? void 0 : _c.status) || 500).json(((_d = err.response) === null || _d === void 0 ? void 0 : _d.data) || err.message);
}
exports.manejadorDeErrores = manejadorDeErrores;
function cors(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
}
exports.cors = cors;
