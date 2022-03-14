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
    const queue = bot.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing in the queue right now!`)


    const song = queue.previous()
	  const embed = new Discord.MessageEmbed()
		.setDescription(`Now playing:\n${song.name}`)
		.setColor("#2187b8")
    message.channel.send({ embeds: [embed]}).then(message.react("◀"))
}

module.exports.config = {
	name: 'previous',
	aliases: [],
  category: 'vc'
}