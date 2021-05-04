const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
    let mode = distube.toggleAutoplay(message);
		const embed = new Discord.MessageEmbed()
			.setTitle(`Autoplay Set!\nCurrent Autoplay: ${mode ? "On" : "Off"}`)
			.setColor(color);
		message.channel.send(embed);
};

module.exports.config = {
	name: 'autoplay',
	aliases: ['ap']
};