const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	distube.resume(message)
	const embed = new Discord.MessageEmbed()
		.setDescription('Resumed playing the queue')
		.setColor(color)
	message.channel.send(embed)
}

module.exports.config = {
	name: 'resume',
	aliases: ['continue']
}