const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
    let filter = distube.setFilter(message, "haas");
		const embed = new Discord.MessageEmbed()
			.setTitle(`Filter Set!\nCurrent Filter: ${filter || "Off"}`)
			.setColor(color);
		message.channel.send(embed);
};

module.exports.config = {
	name: 'haas',
	aliases: []
};