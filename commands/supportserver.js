const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Support Server!")
    .setDescription("Here is our support channel where announcements and help for the bot is held there\n\nhttps://discord.gg/TQNXwYpn")
    .setColor(color)
    message.channel.send(embed)
}

module.exports.config = {
    name: "supportserver",
    aliases: []
}
