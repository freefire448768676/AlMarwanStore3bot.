const Telegraf = require('telegraf');
const express = require('express');

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();
const PORT = process.env.PORT || 3000;

// اوامر البوت
bot.start((ctx) => ctx.reply('اهلا! البوت شغال ✅'));
bot.on('text', (ctx) => ctx.reply('وصلت رسالتك: ' + ctx.message.text));

// صفحة الويب عشان UptimeRobot
app.get('/', (req, res) => {
  res.status(200).send('Bot is alive');
});

// كود اعادة التشغيل التلقائي - هاد سر عدم التطفي
async function startBot() {
  try {
    await bot.launch();
    console.log('Bot started');
  } catch (err) {
    console.log('Bot error, restarting...', err);
    setTimeout(startBot, 5000);
  }
}

startBot();

// اعادة تشغيل البولينج كل ساعة عشان ما يعلق
setInterval(() => {
  console.log('Restarting bot polling...');
  bot.stop();
  startBot();
}, 60 * 60 * 1000);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
