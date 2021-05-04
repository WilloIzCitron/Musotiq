const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	let percent = args[0];
	if(percent.endsWith('%')){
		percent = percent.replace('%', '');
	}
	if(isNaN(percent)) return message.delete();
	if(percent < 0 || percent > 200) return message.delete()
	distube.setVolume(message, percent)
	const embed = new Discord.MessageEmbed()
		.setDescription('Volume set to ' + percent + '%')
		.setColor(color)
		.setTimestamp()
		.setTitle('Done!')
	message.channel.send(embed)
}

module.exports.config = {
	name: 'volume',
	aliases: ['vol']
}