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

	bot.distube.shuffle(message)
	const embed = new Discord.MessageEmbed()
    	.setTitle('Done!')
		.setDescription('Shuffled the queue 🔂')
		.setColor("#2187b8")
		.setTimestamp()
		message.channel.send({ embeds: [embed]}).then(message.react("🔂"))
}

module.exports.config = {
	name: 'shuffle',
	aliases: [],
  category: 'vc'
}