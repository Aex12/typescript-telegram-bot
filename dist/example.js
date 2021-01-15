"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
if (typeof process.env.TELEGRAM_TOKEN !== 'string') {
    console.error('You need a token');
    process.exit(0);
}
var client = new index_1.TelegramClient({ token: process.env.TELEGRAM_TOKEN });
var listener = new index_1.TelegramListener({ client: client });
client.getMe().then(console.log);
listener.onUpdate(function (update) {
    if (update.message) {
        client.sendMessage({ chat_id: update.message.chat.id, text: 'pong' });
    }
});
listener.startPolling();
//# sourceMappingURL=example.js.map