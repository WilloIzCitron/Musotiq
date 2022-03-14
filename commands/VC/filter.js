const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {

    const error = new Discord.MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("You must be in a voice channel to use the command")
   .setColor("#bb1414")
   .setTimestamp()
   const error2 = new Discord.MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("There is nothing in the queue right now!")
   .setColor("#bb1414")
   .setTimestamp()
   const error3 = new Discord.MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("Not a valid filter!")
   .setColor("#bb1414")
   .setTimestamp()
   
    const vc = message.member.voice.channel;
    if(!vc) return message.reply({ embeds: [error], ephemeral: true }).then(message.react("👎"))
    const queue = bot.distube.getQueue(message)
    if (!queue) return message.reply({ embeds: [error2], ephemeral: true })

    if (args[0] === "off" && queue.filters?.length) queue.setFilter(false)
    else if (Object.keys(bot.distube.filters).includes(args[0])) queue.setFilter(args[0])
    else if (args[0]) return message.reply({ embeds: [error3], ephemeral: true })

	const embed = new Discord.MessageEmbed()
	.setDescription(`Current Queue Filter: \`${queue.filters.join(", ") || "Off"}\``)
	.setColor("#2187b8")
	message.channel.send({ embeds: [embed]})
}

module.exports.config = {
	name: 'filter',
	aliases: ["filters"],
  category: 'vc'
}