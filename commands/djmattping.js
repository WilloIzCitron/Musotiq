const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  message.channel.send(`<@344325645687455754> guess who this is :eyes:`)
}

module.exports.config = {
  name: "matt",
  description: "pings the money waster",
  usage: "matt",
  aliases: ['matt']
}