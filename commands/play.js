const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	distube.play(message, message.content.split(" ").slice(1).join(" "));
}

module.exports.config = {
	name: 'play',
	aliases: ['p']
}