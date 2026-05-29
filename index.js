const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// هاد السطر بحل مشكلة 404
app.get('/', (req, res) => {
  res.status(200).send('Bot is alive');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// تصحية كل 5 دقايق
setInterval(() => {
  fetch(`http://localhost:${PORT}/`).catch(() => {});
}, 300000);
