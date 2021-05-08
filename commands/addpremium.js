const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args, color, distube) => {
        if (!bot.config.developers.includes(message.author.id))
            return message.reply("Only **Developer** can use this command");
        message.channel.send("WIP")
}

module.exports.config = {
    name: "addpremium",
    aliases: ['addprm']
}