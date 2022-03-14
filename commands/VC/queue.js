const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {

    const error = new Discord.MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("You must be in a voice channel to use the command")
   .setColor("#bb1414")
   .setTimestamp()
   
    const vc = message.member.voice.channel;
    if(!vc) return message.channel.send(error).then(message.react("👎"))
    
	const queue = bot.distube.getQueue(message)
	const embed = new Discord.MessageEmbed()
		.setTitle('Current queue')
		.setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n'))
		.setColor("#2187b8")
		.setTimestamp()
	message.channel.send({ embeds: [embed]})
}

module.exports.config = {
	name: 'queue',
	aliases: ['q'],
  category: 'vc'
}