const { MessageEmbed } = require('discord.js');
const DisTube = require('distube');
const { premium, developers } = require('../../config.js');

module.exports.run = async (bot, message, args) => {
  const errorMessage = new MessageEmbed()
      .setTitle("Error!")
      .setDescription("You need a Musotiq Premium for use this feature!\nif you want to buy Musotiq Premium, visit our support server to get it (1 subscription per user)")
      .setFooter("psst here, wanna know how to join musotiq support? type M!support")
      .setColor("#bb1414");

    const error = new MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("You must be in a voice channel to use the command")
   .setColor("#bb1414")
   .setTimestamp()

    const nonumber = new MessageEmbed()
   .setTitle("Musotiq sent an Error!")
   .setDescription("You must include the volume percentage to activate this command!")
   .setColor("#bb1414")
   .setTimestamp()
   
    const vc = message.member.voice.channel;
    if(!vc) return message.channel.send(error)

        
	let percent = args[0];

    if(!percent){
        return message.reply(nonumber)
    }
	if(percent.endsWith('%')){
		percent = percent.replace('%', '');
	}

	if (
        percent < 0 || percent > 300 &&
        !developers.includes(message.author.id) &&
        !premium.includes(message.author.id)
    ) {
    return message.reply(errorMessage)
  };


	const embed = new MessageEmbed()
    	.setTitle('Done!')
		.setDescription('Volume set to ' + percent + '%')
		.setColor(color)
		.setTimestamp()
    
	distube.setVolume(message, percent)


	message.channel.send({ embeds: [embed]})
}

module.exports.config = {
	name: 'volume',
	aliases: ['vol'],
  category: 'premium'
}