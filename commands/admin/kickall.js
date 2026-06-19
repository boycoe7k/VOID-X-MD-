/**
 * Kickall Command - Kick all non-admin members (250-300 max)
 */
const config = require('../../config');

module.exports = {
  name: 'kickall',
  category: 'admin',
  description: 'Kick all non-admin members (250–300 max per run)',
  usage: '.kickall',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  async execute(sock, msg, args, extra) {
    try {
      const chatId = extra.from;
      const metadata = await sock.groupMetadata(chatId);
      const participants = metadata.participants || [];

      const botId = sock.user?.id || '';
      const botPhone = botId.includes(':') ? botId.split(':')[0] : botId.split('@')[0];

      const ownerJids = (config.ownerNumber || []).map(n => n + '@s.whatsapp.net');

      // Collect non-admin, non-bot, non-owner members
      const toKick = participants.filter(p => {
        const phone = p.id.split('@')[0].split(':')[0];
        if (p.admin === 'admin' || p.admin === 'superadmin') return false;
        if (phone === botPhone) return false;
        if (ownerJids.includes(p.id)) return false;
        return true;
      }).map(p => p.id);

      if (toKick.length === 0) {
        return extra.reply('✅ No regular members to kick.');
      }

      // Enforce 250–300 cap
      const MIN = 250;
      const MAX = 300;
      const batch = toKick.slice(0, MAX);

      if (toKick.length < MIN) {
        return extra.reply(`⚠️ Only *${toKick.length}* kickable members found. Minimum is ${MIN} for .kickall to run.\n\nUse *.kick @user* to remove individuals.`);
      }

      await extra.reply(`⚠️ Kicking *${batch.length}* members (cap: ${MAX})...\nAdmins & bot are safe.`);

      let kicked = 0;
      for (const jid of batch) {
        try {
          await sock.groupParticipantsUpdate(chatId, [jid], 'remove');
          kicked++;
          // Small delay to avoid rate-limit
          await new Promise(r => setTimeout(r, 300));
        } catch (_) { /* skip if can't kick */ }
      }

      await extra.reply(`✅ Done! Kicked *${kicked}* members.\n${toKick.length > MAX ? `⚠️ ${toKick.length - MAX} remaining — run .kickall again.` : ''}`);
    } catch (error) {
      await extra.reply(`❌ kickall failed: ${error.message}`);
    }
  }
};
