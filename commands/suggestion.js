const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, color, distube) => {

    var reportbug = message.content.split(" ").slice(1).join(" ")
    if(!reportbug) return message.channel.send(nosuggestion);
    let embedrushe = new Discord.MessageEmbed()
    .setTitle('Sent!') 
    .setDescription(`thanks for the suggestion!, The developers will check the suggestion and see if they will accept, thanks ;)`)
    .setFooter(`suggestion sent by ${message.author.username}`)
    .setColor(color)

    message.channel.send(embedrushe)
    let suggestionembedgay = new Discord.MessageEmbed()
    .setTitle('New Suggestion!')
    .setDescription(`**User ID:** ${message.author.id}\n**Server ID:** ${message.guild.id}\n**Suggestion:** ${reportbug}`)
    .setColor(color)
    .setTimestamp()
    bot.channels.cache.get('837498640301162536').send(suggestionembedgay)
}

module.exports.config = {
  name: 'suggestion',
  aliases: []
}