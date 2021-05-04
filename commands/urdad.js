const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`Self roles!`)
    .setDescription("Here are some roles you can get For free!\n\n🔊 **-** <@&838210787705094144>\n🤖 **-** <@&838211336315338774>\n⬆ **-** <@&838212402356158516>\n📊 **-** <@&838213289397059664>")
    .setColor(color)
    .setThumbnail(bot.user.avatarURL())
    let msgEmbed = await message.channel.send(embed)
    msgEmbed.react('🔊')
    msgEmbed.react('🤖')
    msgEmbed.react('⬆')
    msgEmbed.react('📊')
}

module.exports.config = {
  name: "urdadissusfromamogus",
  description: "Sends the invite link to add this bot",
  usage: "add",
  aliases: []
}