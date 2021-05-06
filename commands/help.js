const Discord = require('discord.js')

module.exports.run = async (bot, message, args, color, distube) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("**So, You need help right?**")
    .setDescription("**Here are my commands**\n\n**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**\n\n **1.Play {Music}or{youtube video link}** - Plays the music you choosed!\n\n **2.Pause** - it will pause the current music that is being Played.\n\n**3.Resume** - Resumes the music after running the pause command\n\n**4.Skip** - Skips to the next song. (NOTE: We added a nice feature that makes the bot autoplay by it self)\n\n**5.Loop** - Makes the song that is being played never stopped unless you type run the command again\n\n**6.Stop** - Stops the current Music being played\n\n**7.queue** - shows the Playlist of some music you added to play after each song\n\n**8.volume** - Makes you choose how high and low the volume of the bot to be\n\n**9.filters** - Shows bunch of filters you can use while listening to music, for example (nightcore, bassboost, etc.)\n\n**10.autoplay** - since we added this feature to random music once there is nothing left from the , you can type this command to disable the autoplay by typing this command\n\n\n**Other Commands** \n\n\n**1.Add** - Shows the Invite link to add the bot to different servers\n\n**2.stats** - Shows how many servers is the bot\n\n**3.credits** - Shows the creators of this bot\n\n**4.stats** - shows how many servers this bot in and the amount of people using it\n\n**5.suggestion** - use this command to suggest something and send it to our support server (you can find our support server by typing ``M!support``)\n\n**6.supportserver** - this will send the our support server to join for announcments, help, and so on\n\n**7.vote** - this will send a link to vote for the bot and increase its popularity")
    .setColor(color)
    .setThumbnail(bot.user.avatarURL())
  message.channel.send(embed)
}

module.exports.config = {
  name: "help",
  description: "Sends the user a bunch of Commands this bot has",
  usage: "add",
  aliases: ['h']
}