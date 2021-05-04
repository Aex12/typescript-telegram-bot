"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
if (typeof process.env.TELEGRAM_TOKEN !== 'string') {
    console.error('You need a token');
    process.exit(0);
}
const client = new index_1.TelegramClient({ token: process.env.TELEGRAM_TOKEN });
const listener = new index_1.TelegramListener({ client });
client.getMe().then(console.log);
listener.onUpdate((update) => {
    if (update.message && update.message.text) {
        client.sendMessage({
            chat_id: update.message.chat.id,
            text: update.message.text,
            parse_mode: 'Markdown',
        });
    }
});
listener.startPolling();
