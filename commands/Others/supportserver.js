const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  
    const embed = new Discord.MessageEmbed()
    .setTitle("Support Server!")
    .setDescription("Here is our support channel where announcements and help for the bot is held there")
    .setColor(color)
    message.channel.send({ embeds: [embed] })
    message.channel.send("https://discord.gg/QUJaeCBeDv")
}

module.exports.config = {
    name: "supportserver",
    aliases: ['support'],
    category: 'others',
}
