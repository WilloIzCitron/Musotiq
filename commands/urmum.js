const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Verify`)
    .setDescription("Before accessing the server, please read the rules in <#797378862227914783> before accessing the chats, Happy Talking!")
    .setColor(color)
    .setThumbnail(bot.user.avatarURL())
  message.channel.send(embed)
}

module.exports.config = {
  name: "urmumissussyfromamogus",
  description: "Sends the invite link to add this bot",
  usage: "add",
  aliases: []
}