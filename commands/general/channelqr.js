/**
 * Channel QR Command - Send VOID-X-MD channel QR code
 */
const fs = require('fs');
const path = require('path');
const config = require('../../config');

module.exports = {
  name: 'channelqr',
  aliases: ['channel'],
  category: 'general',
  description: 'Get the QR code to join the VOID-X-MD WhatsApp channel',
  usage: '.channelqr',

  async execute(sock, msg, args, extra) {
    try {
      const qrPath = path.join(__dirname, '../../utils/channel_qr.png');

      if (!fs.existsSync(qrPath)) {
        return extra.reply(`📢 Join our channel: ${config.newsletterLink}`);
      }

      const buffer = fs.readFileSync(qrPath);
      await sock.sendMessage(extra.from, {
        image: buffer,
        caption: `╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣\n┃\n┃  📢 Scan to join our\n┃     WhatsApp Channel!\n┃\n╰━━━━━━━━━━━━⬣\n${config.newsletterLink}`
      }, { quoted: msg });
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
