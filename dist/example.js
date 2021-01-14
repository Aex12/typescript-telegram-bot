"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("./client"));
if (typeof process.env.TELEGRAM_TOKEN !== 'string') {
    console.error('You need a token');
    process.exit(0);
}
var bot = new client_1.default({ token: process.env.TELEGRAM_TOKEN });
bot.getUpdates().then(console.log);
//# sourceMappingURL=example.js.map