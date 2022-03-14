const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config');
const distube = require('distube');

module.exports = ('playSong', (message, queue, song) => {
		const embed = new MessageEmbed()
			.setTitle('Done!')
			.setDescription(
				`Playing [${song.name}](${
					song.url
				}) - \`${song.formattedDuration}\`\n\nRequested by: ${
					song.user
				}\n\n${status(queue)}`
			)
			.setColor(color)
			.setImage(song.thumbnail)
			.setTimestamp();
		message.channel.send(embed);
	})