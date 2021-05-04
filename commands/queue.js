const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	const queue = distube.getQueue(message)
	const embed = new Discord.MessageEmbed()
		.setTitle('Current queue')
		.setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n'))
		.setColor(color)
		.setTimestamp()
	message.channel.send(embed)
}

module.exports.config = {
	name: 'queue',
	aliases: ['q']
}