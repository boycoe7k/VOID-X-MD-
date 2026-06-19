/**
 * .tget <number> - Receive OTP/SMS from Quackr API
 */
const config = require('../../config');

module.exports = {
  name: 'tget',
  category: 'numbers',
  description: 'Receive SMS/OTP for a temp number',
  usage: '.tget <number>',

  async execute(sock, msg, args, extra) {
    try {
      if (!args[0]) {
        return extra.reply('❌ Usage: *.tget <number>*\nExample: *.tget 3584573997700*');
      }

      const number = args[0].startsWith('+') ? args[0] : '+' + args[0];
      await extra.reply(`⏳ Fetching messages for *${number}*...`);

      const fetch = require('node-fetch');
      const url = `${config.quackrBaseUrl}/receive-sms?phoneNumber=${encodeURIComponent(number)}`;
      const res = await fetch(url, {
        headers: { 'x-api-key': config.quackrApiKey }
      });

      const data = await res.json();

      if (!res.ok) {
        return extra.reply(`❌ API Error: ${data.message || 'Unknown error'}`);
      }

      const messages = data.messages || data.sms || data || [];

      if (!messages.length) {
        return extra.reply(`📭 No messages received yet for *${number}*.\nTry again in a few seconds.`);
      }

      let text = `╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣\n┃\n┃  📨 MESSAGES FOR ${number}\n┃\n`;
      messages.slice(0, 5).forEach((m, i) => {
        text += `┃ [${i + 1}] From: ${m.sender || m.from || 'Unknown'}\n`;
        text += `┃     ${m.text || m.message || m.body || JSON.stringify(m)}\n┃\n`;
      });
      text += `╰━━━━━━━━━━━━⬣\n> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬`;

      await extra.reply(text);
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
