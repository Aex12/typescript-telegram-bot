import { TelegramClient, TelegramListener } from './index';

if (typeof process.env.TELEGRAM_TOKEN !== 'string') {
	console.error('You need a token');
	process.exit(0);
}

const client = new TelegramClient({ token: process.env.TELEGRAM_TOKEN });
const listener = new TelegramListener({ client });

client.getMe().then(console.log);

listener.onUpdate((update) => {
	if (update.message && update.message.text && update.message.text === 'google') {
		client.sendMessage({ 
			chat_id: update.message.chat.id,
			text: update.message.text,
			parse_mode: 'Markdown',
			reply_markup: { inline_keyboard: [[{ text: 'Google', url: 'https://www.google.es/' }]] },
		});
	}
});

listener.startPolling();
