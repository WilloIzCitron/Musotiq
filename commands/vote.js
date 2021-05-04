const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Vote For Musotiq!")
    .setDescription("Thanks for steping by to vote for Musotiq! Lets Increase the popularity of this bot by voting through these links down below! ;)\n\n **discordbotlist.com**\n[Click here!](https://discordbotlist.com/bots/musotiq/upvote)")
    .setFooter("Thanks for voting ;), Enjoy Listening to this bot!")
    message.channel.send(embed)
}


module.exports.config = {
	name: 'vote',
	aliases: []
};