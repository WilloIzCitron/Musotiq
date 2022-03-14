const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, color, distube) => {
	const title = 'Here is this invite link to add Musotiq';
	const description = [
		'Musotiq team: Thanks for adding Musotiq! We really hope you enjoy to our 24/7 bot :3, Enjoy!',
		'Regards.',
		'The Musotiq Team.'
	].join('\n');
	const options = {
		dynamic: true,
		size: 4096,
	};

	const embed = new MessageEmbed()
		.setTitle(title)
		.setURL(`https://discord.com/oauth2/authorize?client_id=927231336119427112&scope=bot&permissions=15797784`)
		.setDescription(description)
		.setColor(color)
		.setThumbnail(bot.user.displayAvatarURL({ ...options }));
	message.channel.send({ embeds: [embed] })
};

module.exports.config = {
	name: 'add',
	description: 'Sends the invite link to add this bot',
	aliases: ['invite'],
  category: 'others',
};