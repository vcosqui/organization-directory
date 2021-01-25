"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var server_json_1 = __importDefault(require("./config/server.json"));
var app = express_1.default();
var port = process.env.PORT || server_json_1.default.port;
routes_1.default(app);
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});
