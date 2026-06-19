/**
 * .buy <number> - Mark/reserve a number for use
 */
const config = require('../../config');
const fs = require('fs');
const path = require('path');

// Simple in-memory reservation store (persists per session)
const reserved = new Set();

module.exports = {
  name: 'buy',
  category: 'numbers',
  description: 'Reserve/mark a temp number as yours',
  usage: '.buy <number>',

  async execute(sock, msg, args, extra) {
    try {
      if (!args[0]) {
        return extra.reply('❌ Usage: *.buy <number>*\nGet a number first with *.otp <country>*');
      }

      const number = args[0].replace('+', '');

      if (reserved.has(number)) {
        return extra.reply(`⚠️ Number *+${number}* is already reserved.\nUse *.cancel ${number}* to release it first.`);
      }

      reserved.add(number);

      const text = `╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣
┃
┃  ✅ NUMBER RESERVED
┃  📞 Number : +${number}
┃  👤 By     : @${extra.sender.split('@')[0]}
┃
┃  *.tget ${number}* — Check OTP
┃  *.cancel ${number}* — Release
┃
╰━━━━━━━━━━━━⬣
> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬`;

      await sock.sendMessage(extra.from, { text, mentions: [extra.sender] }, { quoted: msg });
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  },

  reserved
};
