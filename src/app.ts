import { assert, Console } from 'console';
import {Telegraf} from 'telegraf'
import {GoogleSpreadsheet} from 'google-spreadsheet'
require('dotenv').config()

const tgToken = process.env["TG_BOT_TOKEN"]

assert(tgToken != null, "No TG_BOT_TOKEN enviroment variable found")
const bot = new Telegraf(tgToken as string);

const doc = new GoogleSpreadsheet("1ctJQZHqifcDq5BZMkhnmsHeBdirapieEG78zk-nbi4A/edit#gid=0")

const mgrEmail = process.env["MANAGER_EMAIL"]

const mgrKey = process.env["MANAGER_KEY"]

assert(mgrEmail != null, "No MANAGER_EMAIL enviroment variable found")
assert(mgrKey != null, "No MANAGER_KEY enviroment variable found")

// console.log(tgToken)
// console.log(mgrKey)
// console.log(mgrEmail)

start()

async function start() {
try {
    await doc.useServiceAccountAuth({client_email: mgrEmail!,
         private_key: mgrKey!.replace(/\\n/g, '\n')})

} catch (e) {
    console.error(e)
}

bot.start((ctx) => ctx.reply('Welcome'));
bot.on('text', (ctx) => {
    ctx.reply(ctx.message)
    console.info(ctx.message)
})
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('больше не пиши сюда.'));
// bot.hears('hi', (ctx) => ctx.reply('hey'));
bot.launch();
}

