/**
 * .countries - List available temp number countries
 */
const config = require('../../config');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'countries',
  category: 'numbers',
  description: 'List available temp number countries',
  usage: '.countries',

  async execute(sock, msg, args, extra) {
    try {
      const numbersDir = path.join(__dirname, '../../numbers');
      const files = fs.readdirSync(numbersDir).filter(f => f.endsWith('.js'));
      const countryList = files.map((f, i) => `┃ ${i + 1}. ${f.replace('.js', '')}`).join('\n');

      const text = `╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣
┃
┃  📱 AVAILABLE COUNTRIES
┃
${countryList}
┃
╰━━━━━━━━━━━━⬣

> Use *.otp <country>* to get a number
> Example: *.otp Finland*
> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬`;

      await extra.reply(text);
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
