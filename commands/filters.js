const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Music Filters!")
    .setDescription("**here are my Filters!**\n\n**1.3d**\n\n**2.bassboost**\n\n**3.echo**\n\n**4.karaoke**\n\n**5.nightcore**\n\n**6.vaporwave**\n\n**7.flanger**\n\n**8.gate**\n\n**9.haas**\n\n**10.reverse**\n\n**11.surround**\n\n**12.mcompound**\n\n**13.phaser**\n\n**14.tremolo**\n\n**15.earwax**")
    .setColor(color)
    .setThumbnail(bot.user.avatarURL())
  message.channel.send(embed)
}

module.exports.config = {
  name: "filters",
  description: "Sends the user a bunch of filter Commands this bot has",
  usage: "filters",
  aliases: []
}