const { MessageEmbed } = require('discord.js');
const { admins, developers } = require('../../config');
const MusotiqError = require('../../MusotiqError.js')

module.exports.run = async (bot, message, args, color, distube) => {
	if(message.member.id !== '906526930998800435') return;
	const toEval = message.content.split(" ").slice(1).join(" ");
	const evaled = eval(toEval)
	const embed = new MessageEmbed()
		.setTitle('Evaluation Complete')
		.addField('Code to evaluate', `\`\`\`${toEval}\`\`\``)
		.addField('Result', `\`\`\`${evaled}\`\`\``)
		.setColor(color)
	message.channel.send(embed)
};

module.exports.config = {
	name: 'removeguild',
	description: "Makes the bot leave a specific guild/server through the server's id",
    //teamOnly: true,
	aliases: ['ls'],
  category: 'admin'
};