/**
 * .otp <country> - Get a temp number for a country
 */
const config = require('../../config');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'otp',
  category: 'numbers',
  description: 'Get a temp phone number for a country',
  usage: '.otp <country>',

  async execute(sock, msg, args, extra) {
    try {
      if (!args[0]) {
        return extra.reply('❌ Usage: *.otp <country>*\nExample: *.otp Finland*\nSee *.countries* for full list.');
      }

      const country = args[0];
      const numbersDir = path.join(__dirname, '../../numbers');
      const files = fs.readdirSync(numbersDir).map(f => f.toLowerCase().replace('.js', ''));
      const match = files.find(f => f === country.toLowerCase());

      if (!match) {
        return extra.reply(`❌ Country *${country}* not found.\nUse *.countries* to see available ones.`);
      }

      const filePath = path.join(numbersDir, fs.readdirSync(numbersDir).find(f => f.toLowerCase().replace('.js','') === match));
      const content = fs.readFileSync(filePath, 'utf8');
      const numbers = content.split('\n').map(l => l.trim()).filter(l => l.startsWith('+'));

      if (numbers.length === 0) {
        return extra.reply(`⚠️ No numbers available for *${country}* right now.`);
      }

      // Pick a random number
      const picked = numbers[Math.floor(Math.random() * numbers.length)];
      // Format for API (remove +)
      const clean = picked.replace('+', '');

      const text = `╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣
┃
┃  📱 TEMP NUMBER
┃  🌍 Country : ${country}
┃  📞 Number  : ${picked}
┃
┃  *.tget ${clean}* — Check OTP
┃  *.cancel ${clean}* — Release number
┃
╰━━━━━━━━━━━━⬣
> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬`;

      await extra.reply(text);
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
