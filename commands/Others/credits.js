const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {

const embed = new Discord.MessageEmbed()
.setTitle("Credits!")
.setDescription("1- Derpxdxz\n2- BraceGD\n3- LeVonara\n4- WillolzCitron")

  message.channel.send({ embeds: [embed] })


}

module.exports.config = {
  name: "credits",
  description: "Sends the user the creators of this music bot",
  usage: "credits",
  aliases: []
}