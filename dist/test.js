const TgBot = require('./client').default;


const bot = new TgBot({ token: '228356864:AAFi-fjVPP74yLPMqxTrVKPBuQpkuBnonFs' });

bot.getUpdates()
	.then(console.log);
