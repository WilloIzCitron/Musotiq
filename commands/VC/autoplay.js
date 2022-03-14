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
    
    let mode = bot.distube.toggleAutoplay(message);
		const embed = new Discord.MessageEmbed()
			.setTitle(`Autoplay Set!\nCurrent Autoplay: ${mode ? "On" : "Off"}`)
			.setColor("#2187b8");
      message.channel.send({ embeds: [embed]}).then(message.react("👍"));
};

module.exports.config = {
	name: 'autoplay',
	aliases: ['ap'],
  category: 'vc'
};