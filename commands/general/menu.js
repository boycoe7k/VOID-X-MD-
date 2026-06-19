/**
 * Menu Command - VOID-X-MD Style
 */

const config = require('../../config');
const os = require('os');

module.exports = {
  name: 'menu',
  aliases: ['help', 'commands'],
  category: 'general',
  description: 'Show all available commands',
  usage: '.menu',

  async execute(sock, msg, args, extra) {
    try {
      const uptime = process.uptime();
      const h = Math.floor(uptime / 3600);
      const m = Math.floor((uptime % 3600) / 60);
      const s = Math.floor(uptime % 60);
      const uptimeStr = `${h}h ${m}m ${s}s`;
      const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
      const now = new Date();
      const runtime = now.toTimeString().split(' ')[0];
      const date = now.toLocaleDateString('en-GB');

      const menu = `╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣
┃
┃        ◦ • ───── • ◦
┃
┃ 👤 User      : @${extra.sender.split('@')[0]}
┃ 🕒 Runtime   : ${runtime}
┃ 📆 Date      : ${date}
┃ ⚙️ Prefix    : [ ${config.prefix} ]
┃ 💾 RAM       : ${ram} MB
┃ ⏱ Uptime    : ${uptimeStr}
┃ 🖥 Platform  : ${os.platform()}
┃ 🔖 Version   : 2.1.0
┃ 👑 Owner     : ${config.ownerNumber[0]}
┃
╰━━━━━━━━━━━━⬣

╭━━〔 👑 GROUP COMMANDS 〕━━⬣
┃➤ .ban
┃➤ .unban
┃➤ .promote
┃➤ .demote
┃➤ .mute
┃➤ .unmute
┃➤ .kick
┃➤ .kickall
┃➤ .gcstatus
┃➤ .lockgroup
┃➤ .unlockgroup
┃➤ .setname
┃➤ .setdesc
┃➤ .revoke
┃➤ .welcome
┃➤ .goodbye
┃➤ .tag
┃➤ .tagadmins
┃➤ .warn
┃➤ .warnings
┃➤ .groupinfo
╰━━━━━━━━━━━━⬣

╭━━〔 📢 CHANNEL 〕━━⬣
┃➤ .channelqr
╰━━━━━━━━━━━━⬣

╭━━〔 📱 TEMP NUMBERS 〕━━⬣
┃➤ .countries
┃➤ .otp <country>
┃➤ .tget <number>
┃➤ .buy <number>
┃➤ .cancel <number>
╰━━━━━━━━━━━━⬣

╭━━〔 🤖 AI MENU 〕━━⬣
┃➤ .gpt
┃➤ .imagine
┃➤ .dalle
╰━━━━━━━━━━━━⬣

╭━━〔 🎀 DOWNLOADER 〕━━⬣
┃➤ .play
┃➤ .ytmp3
┃➤ .ytmp4
┃➤ .tiktok
┃➤ .instagram
┃➤ .facebook
╰━━━━━━━━━━━━⬣

╭━━〔 🔎 SEARCH 〕━━⬣
┃➤ .image
┃➤ .wiki
┃➤ .weather
┃➤ .translate
┃➤ .define
╰━━━━━━━━━━━━⬣

╭━━〔 🎮 FUN ZONE 〕━━⬣
┃➤ .joke
┃➤ .dare
┃➤ .truth
┃➤ .ship
┃➤ .flirt
╰━━━━━━━━━━━━⬣

╭━━〔 🎨 DESIGN 〕━━⬣
┃➤ .metallic
┃➤ .ice
┃➤ .neon
┃➤ .matrix
┃➤ .fire
┃➤ .glitch
╰━━━━━━━━━━━━⬣

╭━━〔 🔐 CRYPTO TOOLS 〕━━⬣
┃➤ .encode
┃➤ .decode
┃➤ .hash
┃➤ .binary
┃➤ .qr
╰━━━━━━━━━━━━⬣

╭━━〔 🛠 UTILITY 〕━━⬣
┃➤ .calc
┃➤ .sticker
┃➤ .tts
┃➤ .translate
╰━━━━━━━━━━━━⬣

╭━━〔 📊 BOT STATS 〕━━⬣
┃➤ .ping
┃➤ .uptime
┃➤ .botinfo
╰━━━━━━━━━━━━⬣

╭━━〔 ⚙️ SETTINGS 〕━━⬣
┃➤ .autoread <on/off>
┃➤ .autoreact <on/off>
┃➤ .autostatusview <on/off>
┃➤ .autostatuslike <on/off>
┃➤ .selfmode <on/off>
╰━━━━━━━━━━━━⬣

╭━━〔 👑 OWNER ONLY 〕━━⬣
┃➤ .broadcast
┃➤ .restart
┃➤ .shutdown
┃➤ .eval
┃➤ .setprefix
┃➤ .block
┃➤ .unblock
╰━━━━━━━━━━━━⬣

╭━━━━━━━━━━━━⬣
┃      Fast • Smooth • Powerful
┃ 📢 ${config.newsletterLink}
╰━━━━━━━━━━━━⬣
> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬`;

      const fs = require('fs');
      const path = require('path');
      const imagePath = path.join(__dirname, '../../utils/bot_image.jpg');

      if (fs.existsSync(imagePath)) {
        const imageBuffer = fs.readFileSync(imagePath);
        await sock.sendMessage(extra.from, {
          image: imageBuffer,
          caption: menu,
          mentions: [extra.sender],
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: config.newsletterJid || '120363161513685998@newsletter',
              newsletterName: config.botName,
              serverMessageId: -1
            }
          }
        }, { quoted: msg });
      } else {
        await sock.sendMessage(extra.from, {
          text: menu,
          mentions: [extra.sender]
        }, { quoted: msg });
      }
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
