const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, [mode], color, distube) => {

	const error = new Discord.MessageEmbed()
		.setTitle('Musotiq sent an Error!')
		.setDescription('You must be in a voice channel to use the command')
		.setColor('#bb1414')
		.setTimestamp();

	const vc = message.member.voice.channel;

	if (!vc) return message.channel.send({ embeds: [error]});
  
	const modes = ['disable', 'current', 'all'];
	const repeatMode = modes.indexOf(mode);

	bot.distube.setRepeatMode(message, (mode) ? repeatMode : 1);

	const embedOnSetLoop = new Discord.MessageEmbed()
		.setTitle('Done')
		.setDescription('Set on loop!')
		.setColor("#2187b8")
		.setTimestamp();

	const embedOnDisableLoop = new Discord.MessageEmbed()
		.setTitle('Done')
		.setDescription('Disabled looping!')
		.setColor("#2187b8")
		.setTimestamp();

	const { channel } = message;

	(repeatMode === 0) ? channel.send({ embeds: [embedOnDisableLoop]}) : message.channel.send({ embeds: [embedOnSetLoop]}); // queue.textChannel.send({ embeds: [embed]});
};

module.exports.config = {
	name: 'loop',
	aliases: ['l'],
  category: 'vc'
};