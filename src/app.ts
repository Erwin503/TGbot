import {Telegraf} from 'telegraf'

const bot = new Telegraf("5399924741:AAGz4h0IRaamBk6UqVbIiLi4qzybJ1X_hO0");
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('пошёл в жопу'));
bot.hears('hi', (ctx) => ctx.reply('hey'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));