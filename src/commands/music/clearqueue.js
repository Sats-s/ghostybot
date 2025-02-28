module.exports = {
  name: "clearqueue",
  description: "Clear the music playlist",
  aliases: ["cq"],
  category: "music",
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    if (!message.member.voice.channel) {
      return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
    }

    bot.player.clearQueue(message);
    message.channel.send(lang.MUSIC.QUEUE_CLEARED);
  },
};
