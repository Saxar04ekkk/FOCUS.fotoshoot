const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '8154630817:AAFqi9kG-Pr5KnzXnKQcLmAqrhiIZ5GFZ4I';
const CHAT_ID = '997411409';

app.post('/send', async (req, res) => {
  const { fio, phone, sessionType } = req.body;

  if (!fio || !phone || !sessionType) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  const message = `
<b>Новая заявка</b>%0A
<b>ФИО:</b> ${fio}%0A
<b>Телефон:</b> ${phone}%0A
<b>Тип сессии:</b> ${sessionType}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}&parse_mode=HTML`;

  try {
    const tgRes = await fetch(url);
    const data = await tgRes.json();

    if (data.ok) {
      res.json({ message: 'Отправлено в Telegram' });
    } else {
      res.status(500).json({ message: 'Ошибка при отправке' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Серверная ошибка' });
  }
});

app.listen(10000, () => {
  console.log('Сервер работает на порту 10000');
});
