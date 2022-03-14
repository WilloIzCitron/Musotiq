  const Discord = require('discord.js');
  const DisTube = require('distube');
  
  module.exports.run = async (bot, message, args, color, distube) => {
  
      const error = new Discord.MessageEmbed()
     .setTitle("Musotiq sent an Error!")
     .setDescription("You must be in a voice channel to use the command")
     .setColor("#bb1414")
     .setTimestamp()
     
      const vc = message.member.voice.channel;
      if(!vc) return message.channel.send({ embeds: [error]}).then(message.react("👎"))
      
      let speed_amount = args[0] ? Number(args[0]) : 1;
      let CustomFilters = bot.distube.filters
  
      CustomFilters.customspeed = `atempo=${speed_amount}`;
      bot.distube.filters = CustomFilters;
  
      const newQueue = bot.distube.getQueue(message.guildId || interaction.guildId);
  
      newQueue.setFilter("customspeed");

      const embed = new Discord.MessageEmbed()
      .setTitle("Done!")
      .setDescription(`Speed has been set to ${speed_amount}%`)
      .setColor("#2187b8")
    message.channel.send({ embeds: [embed]})
  }
  
  module.exports.config = {
    name: 'speed',
    aliases: [],
    category: 'vc'
  }