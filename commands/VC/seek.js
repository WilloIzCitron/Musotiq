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

    const wrongusage = new Discord.MessageEmbed()
    .setTitle("Musotiq Sent an error!")
    .setDescription("you must type the amount of seconds you want in order to seek through the current played song!")
    .setColor("#bb1414")
    .setTimestamp()
    if(!args[0]) return message.channel.send({ embeds: [wrongusage]})

	bot.distube.seek(message, Number(args[0]*1000));
    const skip = new Discord.MessageEmbed()
    .setTitle("Seeked!")
    .setDescription(`Seeked the song for **${args[0]}** Seconds!`)
    .setTimestamp()
    .setColor("#2187b8")
    message.channel.send({ embeds: [skip]})

}

module.exports.config = {
	name: 'seek',
	aliases: [],
  category: 'vc'
}