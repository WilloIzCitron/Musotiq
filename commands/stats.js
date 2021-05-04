const Discord = require('discord.js');

module.exports.run = async (bot, message, args, color, distube) => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Info!')
    .setDescription(`im in ${bot.guilds.cache.size} servers, used by ${bot.users.cache.size} users`)
    
    .setTimestamp()
    .setColor(color)
  message.channel.send(embed)
}

module.exports.config = {
  name: "stats",
  description: "Shows the servercount and usage for Musotiq",
  accessableby: "Members",
  usage: "servers",
  aliases: []
}