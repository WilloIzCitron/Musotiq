const { MessageEmbed } = require('discord.js');
const { admins, developers } = require('../../config');

module.exports.run = async (bot, message, args, color, distube) => {

    const [providedId] = args;

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
        .setDescription("You didnt provide a ``server ID`` to activate this command!")
        .setColor('#bb1414');

    if (!args) return message.reply({ embeds: [notprovided]})



    const targetServer = bot.guilds.cache.find(guild => guild.id === providedId)
    targetServer.leave().then(guild => {
      const success = new MessageEmbed()
        .setTitle('Success!')
        .setDescription(`Succefully left: \`\`${guild.name}\`\`!\nServerID: ${guild.id}`)
        .setColor(color)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true }))
      return message.channel.send({ embeds: [success]})
    }).catch(e => {
      console.log(e)
    }) 

    console.log(targetServer)
};

module.exports.config = {
    name: 'removeguild',
    description: "Makes the bot leave a specific guild/server through the server's id. only admins have access",
    aliases: ['rg', 'guildleave', 'gl'],
};