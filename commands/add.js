const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Here is this invite link to add Musotiq`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=837275998907138058&scope=bot&permissions=15797784`)
    .setDescription("Musotiq team: Thanks for adding Musotiq! We really hope you enjoy to our 24/7 bot :3, Enjoy!\nRegards.\n\nThe Musotiq Team.")
    .setColor(color)
    .setThumbnail(bot.user.avatarURL())
  message.channel.send(embed)
}

module.exports.config = {
  name: "add",
  description: "Sends the invite link to add this bot",
  aliases: ['invite']
}