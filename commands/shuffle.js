const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	distube.shuffle(message)
	const embed = new Discord.MessageEmbed()
		.setDescription('Shuffled the queue')
		.setColor(color)
		.setTimestamp()
		.setTitle('Done!')
	message.channel.send(embed)
}

module.exports.config = {
	name: 'shuffle',
	aliases: []
}