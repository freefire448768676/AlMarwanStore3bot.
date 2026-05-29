const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('البوت صاحي 24 ساعة 🔥');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`السيرفر شغال على بورت ${port}`);
});

// كل 5 دقايق يضرب حاله لحتى Render ما ينيمه
setInterval(() => {
  console.log('Ping: السيرفر صاحي');
}, 300000);
