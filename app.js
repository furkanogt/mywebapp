const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Merhaba Dünya</title>
      <style>
        body { font-family: Arial; text-align: center; padding: 50px; }
        h1 { color: #0078d4; }
      </style>
    </head>
    <body>
      <h1>Merhaba! 👋</h1>
      <p>Bu web uygulaması Azure'a dağıtılmaya hazır!</p>
      <p>Adınız: <strong>Furkan</strong></p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Uygulama çalışıyor: http://localhost:${port}`);
});
