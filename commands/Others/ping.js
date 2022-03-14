const Discord = require('discord.js');

module.exports.run = async (bot, message, args, color, distube) => {
    message.channel.send("Finding the bot ping...")
    .then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.delete()
       

        const embed = new Discord.MessageEmbed()
        .setTitle("🏓 Bot's Ping!")
    .setColor(color) 
    .setDescription(`The Bot's Ping is ${ping} ms`)
    message.channel.send("pong!")
    message.channel.send({ embeds: [embed] })            
    })
}
module.exports.config = {
    name: "ping",
    aliases: ['ms', 'latency'],
    description: ["give you the bot lantency in milliseconds"],
    perm: ['everyone'],
    usage: ["_ms"],
    category: 'others',
}