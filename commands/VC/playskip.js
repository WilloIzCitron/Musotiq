module.exports = {
    name: "playskip",
    aliases: ["ps"],
    inVoiceChannel: true,
    run: async (bot, message, args) => {
        const string = args.join(" ")
        if (!string) return message.channel.send(`${bot.emotes.error} | Please enter a song url or query to search.`)
        bot.distube.play(message, string, { skip: true })
    }
}
