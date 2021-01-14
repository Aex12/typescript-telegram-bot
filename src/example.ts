import TelegramBot from './client';

if (typeof process.env.TELEGRAM_TOKEN !== 'string') {
	console.error('You need a token');
	process.exit(0);
}

const bot = new TelegramBot({ token: process.env.TELEGRAM_TOKEN });

bot.getUpdates().then(console.log);
