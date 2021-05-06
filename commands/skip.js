const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	distube.skip(message)
    const skip = new Discord.MessageEmbed()
    .setTitle("Skipped!")
    .setTimestamp()
    .setColor(color)
    message.channel.send(skip)
}

module.exports.config = {
	name: 'skip',
	aliases: ['s']
}