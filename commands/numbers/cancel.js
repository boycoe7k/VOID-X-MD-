/**
 * .cancel <number> - Release a reserved temp number
 */
const config = require('../../config');
const buyCmd = require('./buy');

module.exports = {
  name: 'cancel',
  category: 'numbers',
  description: 'Release a reserved temp number',
  usage: '.cancel <number>',

  async execute(sock, msg, args, extra) {
    try {
      if (!args[0]) {
        return extra.reply('❌ Usage: *.cancel <number>*');
      }

      const number = args[0].replace('+', '');

      if (!buyCmd.reserved.has(number)) {
        return extra.reply(`⚠️ Number *+${number}* was not reserved.`);
      }

      buyCmd.reserved.delete(number);
      await extra.reply(`✅ Number *+${number}* has been released and is available again.`);
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
