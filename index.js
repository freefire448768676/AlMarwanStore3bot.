import { Telegraf } from "telegraf";
import { registerAdmin, registerAdminTextHandlers } from "./workspace/admin.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

registerAdmin(bot);
registerAdminTextHandlers(bot);

bot.launch();
console.log('Bot started');
