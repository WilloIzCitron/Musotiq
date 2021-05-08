const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
	let percent = args[0];
	if(percent.endsWith('%')){
		percent = percent.replace('%', '');
	}
	if(isNaN(percent)) return message.delete();
	if(percent < 0 || percent > 300) return message.delete()
    if(percent > 300) {
        if(message.member.roles.cache.find(r => r.name === "Premium")){
	        distube.setVolume(message, percent);
            message.channel.send(embed)
        }else{
        message.channel.send("You need a Musotiq Premium for use this feature\nif you want buy a Musotiq Premium visit our support server for get a premium(1 premium per user)")}
    }else{
	distube.setVolume(message, percent)
	const embed = new Discord.MessageEmbed()
		.setDescription('Volume set to ' + percent + '%')
		.setColor(color)
		.setTimestamp()
		.setTitle('Done!')
	message.channel.send(embed)}
}

module.exports.config = {
	name: 'volume',
	aliases: ['vol']
}