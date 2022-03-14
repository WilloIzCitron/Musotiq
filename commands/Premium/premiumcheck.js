const { MessageEmbed } = require('discord.js'); 
const DisTube = require('distube'); 
const { premium, developers } = require('../../config.js');

module.exports.run = async (bot, message, args, color, distube) => {
  const { channel } = message;
  const no = new MessageEmbed()
    .setTitle("Error")
    .setDescription("you dont have musotiq premium!\nif you want to buy Musotiq Premium, visit our support server to get it (1 subscription per user)")
    .setFooter("psst here, wanna know how to join musotiq support? type M!support")
    .setColor('#bb1414');

  if (
    !developers.includes(message.author.id) 
    && !premium.includes(message.author.id)
    ) {
    return message.reply(no)
  };

  const yes = new MessageEmbed()
  .setTitle("Success!")
  .setDescription("you have Musotiq premium!\nEnjoy the service!")
  .setColor("#FAFD0F")

  message.channel.send({ embeds: [yes]})
};

module.exports.config = {
	name: 'premiumcheck',
	aliases: ['pc'],
  category: 'premium'
};