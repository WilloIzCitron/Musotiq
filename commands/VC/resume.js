const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {

    const error = new Discord.MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("You must be in a voice channel to use the command")
   .setColor("#bb1414")
   .setTimestamp()
   
    const vc = message.member.voice.channel;
    if(!vc) return message.channel.send({ embeds: [error]}).then(message.react("👎"))

	bot.distube.resume(message)
	const embed = new Discord.MessageEmbed()
		.setDescription('Resumed playing the queue')
		.setColor("#2187b8")
	message.channel.send({ embeds: [embed]})
}

module.exports.config = {
	name: 'resume',
	aliases: ['continue'],
  category: 'vc'
}