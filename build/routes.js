"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var workers_json_1 = __importDefault(require("./worker/infrastructure/workers.json"));
exports.default = (function (app) {
    app.get('/', function (req, res) {
        res.json(workers_json_1.default);
    });
});
