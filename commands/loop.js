const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	const mode = args[0];
	let a;
	if(mode === 'all'){
		a = 2;
	}
	else if(mode === 'current'){
		a = 1;
	}
	else if(mode === 'disable'){
		a = 0;
	}
	else{
		a = 1;
	}
	distube.setRepeatMode(message, a)
	const embed = new Discord.MessageEmbed()
		.setTitle('Done')
		.setDescription('Set on loop!')
		.setColor(color)
		.setTimestamp()
	const emb = new Discord.MessageEmbed()
		.setTitle('Done')
		.setDescription('Disabled looping!')
		.setColor(color)
		.setTimestamp()
	if(a == 0){
		message.channel.send(emb)
	}
	else{
		message.channel.send(embed)
	}
}

module.exports.config = {
	name: 'loop',
	aliases: ['l']
}