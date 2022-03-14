const { MessageEmbed } = require('discord.js');
const db = require("quick.db")
const { admins, developers } = require('../../config');

module.exports.run = async (bot, message, args, color, distube) => {

    const providedId = args;
    const member = bot.users.fetch(args).catch(console.error);

    const errorMessage = new MessageEmbed()
        .setTitle("Musotiq sent an Error!")
        .setDescription("Only the developers and admins have access to use this command!")
        .setColor('#bb1414');

    if (
        !developers.includes(message.author.id) &&
        !admins.includes(message.author.id)
    ) {
        return message.reply({ embeds: [errorMessage]})
    }

    const notprovided = new MessageEmbed()
        .setTitle("Musotiq sent an Error!")
        .setDescription("You didnt provide a ``User id`` to activate this command!")
        .setColor('#bb1414');

    if (!args) return message.reply({ embeds: [notprovided]})

    const notanid = new MessageEmbed()
        .setTitle("Musotiq sent an Error!")
        .setDescription("not a valuble user id.")
        .setColor('#bb1414');

    // if(args != member.id) return message.reply({ embeds: [notanid]})

    db.delete(`blocked_${providedId}`, true);
    
    const success = new MessageEmbed()
    .setTitle('Success!')
    .setDescription(`**Succefully Banned:** \`\`${member.user}\`\`!\n**UserID:** \`${member.id}\``)
    .setColor(color)
    .setTimestamp()
    // .setThumbnail(member.user.displayAvatarURL({ size: 512, format: 'png' }))


    return message.channel.send({ embeds: [success]})

};

module.exports.config = {
    name: 'ban',
    description: "Bans a specific user from using the bot",
    aliases: [],
};