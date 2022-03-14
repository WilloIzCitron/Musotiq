const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {

  /**
  * TODO Reformating this giant hardcoded embed, no leave me alone :)
  * TODO Dynamically search through commands if sets in a collection, uh 
  * TODO Give help page per each command, yes hardcode time
  **/

    const helpnotifier = args[0];

    if(helpnotifier === "music"){

    const embed = new Discord.MessageEmbed()
        .setTitle("Music Commands")
        .setDescription("Do you have any questions or need help?\nJoin our [Support Server](https://discord.gg/QUJaeCBeDv)")
        .addFields(
            {
                name: "** **",
                value: "`autoplay`\nEnable or disable autoplay mode.\n\n`filter`\nadd a filter to a song, you can find filters using the `M!filters` command\n\n`join`\njoins a voice channel.\n\n`leave`\nleaves the voice channel.\n\n`loop`\nenable or disable loop for the entire queue",
                inline: true,
            },
            {
                name: "** **",
                value: "`nowplaying`\nshows the current music being played\n\n`pause`\npauses the queue.\n\n`play`\nPlays a song in a voice channel.\n`playskip`\nskips the current played song and starts playing the song using this command\n\n`previous`\nstarts playing the previous song",
                inline: true,
            },
            {
                name: "** **",
                value: "`queue`\nshows the music that has been added to the queue\n\n`resume`\nresumes the queue.\n\n`seek`\nskips to a specific moment of the song.\n\n`shuffle`\nshuffles the queue.\n`skip`\nskips the song.\n\n`speed`\nchanges the song speed.\n\n`stop`\nstops the queue.",
                inline: true,
            },
        )
        .setColor("#2187b8")
        .setThumbnail(bot.user.avatarURL())
        message.channel.send({ embeds: [embed] })
    };
    



    if(helpnotifier === "others") {
        const embed = new Discord.MessageEmbed()
        .setTitle("Other Commands")
        .setDescription("Do you have any questions or need help?\nJoin our [Support Server](https://discord.gg/QUJaeCBeDv)")
        .addFields(
            {
                name: "** **",
                value: "`add/invite`\nsends the invite link to add musotiq\n\n`credits`\nshows the developers of musotiq\n\n`filters`\nshows a bunch of filters this bot has to offer\n\n`ping`\nshows the bot's respond time in milliseconds",
                inline: true,
            },
            {
                name: "** **",
                value: "`stats`\nShows the amount of servers the bot is in and the amount of users using it\n\n`suggestion`\nmake up a suggestion!\n\n`support`\nsends the support server for musotiq support\n\n`vote`\nvote for musotiq!",
                inline: true,
            }
        )
        .setColor("#2187b8")
        .setThumbnail(bot.user.avatarURL())
        message.channel.send({ embeds: [embed] })
    };
    



    if (helpnotifier === "admin") {
        const embed = new Discord.MessageEmbed()
        .setTitle("Admin Commands")
        .setDescription("Do you have any questions or need help?\nJoin our [Support Server](https://discord.gg/QUJaeCBeDv)")
        .addFields(
            {
                name: "** **",
                value: "`prefix`\nchanges the bot's server prefix",
                inline: true,
            }
        )
        .setColor("#2187b8")
        .setThumbnail(bot.user.avatarURL())
        message.channel.send({ embeds: [embed] })
    } 
    
    
    
    
    
    
    
    else if(!helpnotifier) {

    const embed = new Discord.MessageEmbed()
        .setTitle("**So, You need help right?**")
        .setDescription("**Here are my commands**\n\n**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**")
        .addFields(
            {
                name: "VC Commands",
                value: "**1.Add**\n**2.Play**\n**3.Pause**\n**4.Resume**\n**5.Skip**\n**6.Loop**\n**7.Stop**\n**8.queue**\n**9.volume**\n**10.filters**\n**11.autoplay**",
                inline: true,
            },
            {
                name: "Other Commands",
                value: "**1.Add**\n**2.Credits**\n**3.Filters**\n**4.Ping**\n**5.Stats**\n**5.suggestion**\n**6.supportserver**\n**7.vote**",
                inline: true,
            },
            {
                name: "Administrator Commands",
                value: "**1.prefix**",
                inline: true,
            }
        )
        .setColor(color)
        .setThumbnail(bot.user.avatarURL())


        
    message.channel.send("Please specify what type of help would you want.\neither `music`, `others` or `admin`")

    }
    




}

module.exports.config = {
  name: "help",
  description: "Sends the user a bunch of Commands this bot has",
  usage: "help",
  aliases: ['h']
}