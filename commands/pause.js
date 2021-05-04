const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	distube.pause(message)
	const embed = new Discord.MessageEmbed()
		.setDescription('Paused the queue')
		.setColor(color)
	message.channel.send(embed)
}

module.exports.config = {
	name: 'pause',
	aliases: []
}