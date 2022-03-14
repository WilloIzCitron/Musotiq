const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {

  const embed = new Discord.MessageEmbed()
  .setTitle("Here are my filters!")
  .setDescription("**3d**\n**bassboost**\n**crystalizer**\n**earwax**\n**echo**\n**flanger**\n**gate**\n**haas**\n**karaoke**\n**mcompound**\n**nightcore**\n**normalizer**\n**pitch**\n**reverse**\n**rickroll**\n**subboost**\n**surround**\n**tremolo**\n**vaporwave**")
  .addFields(
      {
          name: '**__Premium!__**',
          value: 'If you bought Musotiq Premium, You unlocked more Filters!\n**16d**\n**8d**\n**clear**\n**cursed**\n**earrape**\n**phaser**\n**pulsator**\n**purebass**\n**slowreverb**\n**vibrate**\n**treble**',
          inline: true
      }
  )
  .setColor('#2187b8')
  message.channel.send({ embeds: [embed] });
}

module.exports.config = {
  name: "filters",
  description: "Sends the user a bunch of sexy Filters this bot has",
  usage: "filters",
  aliases: ['f'],
  category: 'others',
}