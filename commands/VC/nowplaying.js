const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {

    const error = new Discord.MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("You must be in a voice channel to use the command")
   .setColor("#bb1414")
   .setTimestamp()

    const vc = message.member.voice.channel;
    if(!vc) return message.channel.send({ embeds: [error]}).then(message.react("👎"))
    const queue = bot.distube.getQueue(message);
    if (!queue) return message.channel.send(`${bot.emotes.error} | There is nothing in the queue right now!`)

    const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;
    let song = queue.songs[0];
    const embed = new Discord.MessageEmbed()
    .setTitle("Now Playing")
    .setDescription(`Playing \`\`${song.name}\`\``)
    .addFields(
      {
        name: "Song Formation:",
        value: `**${song.formattedDuration}**`,
        inline: true,
      },
      {
        name: "Song Requested By:",
        value: `${song.user}`,
        inline: true,
      },
      {
        name: "Current Status:",
        value: `${status(queue)}`,
        inline: true,
      }
    )
    .setColor("#2187b8");
    message.channel.send({ embeds: [embed]}).then(message.react("ℹ"))
}

module.exports.config = {
	name: 'nowplaying',
	aliases: ['np'],
  category: 'vc'
}