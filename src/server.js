const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { fio, phone, sessionType } = req.body;

  if (!fio || !phone || !sessionType) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: '6tvoy.devil9@gmail.com',
    pass: 'xcpmhudxwcnsxvwx', 
  },
  tls: {
    rejectUnauthorized: false
  }
});

  const mailOptions = {
    from: '',
    to: '6tvoy.devil9@gmail.com',
    subject: 'Новая заявка на фотосессию',
    text: `ФИО: ${fio}\nТелефон: ${phone}\nТип фотосессии: ${sessionType}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Заявка успешно отправлена' });
  } catch (error) {
    console.error('Ошибка при отправке почты:', error.response || error);
    res.status(500).json({ message: 'Ошибка при отправке заявки' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});