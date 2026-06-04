import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('✅ البوت شغال'));
bot.command('admin', (ctx) => ctx.reply('ارسل كلمة المرور'));

bot.launch();
console.log('Bot started successfully');
