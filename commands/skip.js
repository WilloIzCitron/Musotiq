const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	distube.skip(message)
}

module.exports.config = {
	name: 'skip',
	aliases: ['s']
}