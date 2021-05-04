"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramListener = exports.TelegramClient = void 0;
var client_1 = __importDefault(require("./client"));
exports.TelegramClient = client_1.default;
var listener_1 = require("./listener");
Object.defineProperty(exports, "TelegramListener", { enumerable: true, get: function () { return listener_1.TelegramListener; } });
//# sourceMappingURL=index.js.map