const { MessageEmbed } = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {

  const error = new MessageEmbed()
    .setTitle("Musotiq sent an Error!")
    .setDescription("You must be in a voice channel to use the command")
    .setColor("#bb1414")
    .setTimestamp()
  const error2 = new MessageEmbed()
    .setTitle("Musotiq sent an Error!")
    .setDescription("Please enter a song url or query to search.")
    .setColor("#bb1414")
    .setTimestamp()

  const vc = message.member.voice.channel;
  if (!vc) return message.channel.send({ embeds: [error], ephemeral: true })

  const string = args.join(" ")
  if (!string) return message.channel.send({ embeds: [error2], ephemeral: true})

  bot.distube.play(message.member.voice.channel, string, {
    member: message.member,
    textChannel: message.channel,
    message
  }).then(message.react("👍"))
}

module.exports.config = {
  name: 'play',
  aliases: ['p'],
  category: 'vc'
}