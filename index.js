import { Telegraf } from "telegraf";
import { registerAdmin, registerAdminTextHandlers, startPingScheduler } from "./workspace/admin.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

registerAdmin(bot);
registerAdminTextHandlers(bot);
startPingScheduler(bot); // ضفت هاد السطر

bot.launch();
console.log('تم تشغيل البوت. وحدة التحكم');
