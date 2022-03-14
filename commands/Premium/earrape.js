const { MessageEmbed } = require('discord.js'); 
const DisTube = require('distube'); 
const { premium, developers } = require('../../config.js');

module.exports.run = async (bot, message, args, color, distube) => {
  const { channel } = message;
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
   
    const vc = message.member.voice.channel;
    if(!vc) return message.channel.send(error)

  if (
    !developers.includes(message.author.id) 
    && !premium.includes(message.author.id)
    ) {
    return message.reply(errorMessage)
  };

  const filter = distube.setFilter(message, "earrape");
  const embed = new MessageEmbed()
  .setTitle(`Filter Set!\nCurrent Filter: ${filter ? filter : "Off"}`)
  .setColor("#ffff00");
  message.channel.send({ embeds: [embed]})
};

module.exports.config = {
	name: 'earrape',
	aliases: ['er'],
  category: 'premium'
};