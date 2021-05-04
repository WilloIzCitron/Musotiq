const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Here are the creators of Musotiq`)
    .setDescription(`**[Derpxdxz](https://www.youtube.com/derpxdxz?sub_confirmation=1)**\nThe Creator of this Music bot \n\n **[BraceGD](https://www.youtube.com/channel/UCFWmlWB2yWiGGo4TSEvBM9A?sub_confirmation=1)**\nBug Fixing, etc.\n\n **[WilloIzCitron](https://github.com/WilloIzCitron)**\nAdding Filters, Adding the option to disable or enable autoplay, etc.`)
    .setColor(color)
    .setThumbnail(bot.user.avatarURL())
  message.channel.send(embed)
}

module.exports.config = {
  name: "credits",
  description: "Shows who made Musotiq",
  usage: "credits",
  aliases: []
}