const Discord = require("discord.js");
const db = require("quick.db");
const { DisTube } = require("distube")
const keepAlive = require("./server");
const mySecret = process.env["token"];

const { readdirSync } = require("fs");
const bot = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ]
});
bot.distube = new DisTube(bot, {
    searchSongs: 0,
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    leaveOnEmpty: true,
    updateYouTubeDL: true,
    youtubeDL: false,
    savePreviousSongs: true,
    customFilters: {
        "earrape": "earwax,equalizer=f=1000:t=q:w=1:g=48,bass=g=40,dynaudnorm=f=400",
        "8d": "apulsator=hz=0.08",
        "bassboost": "bass=g=20,dynaudnorm=f=200",
        "purebass": "bass=g=20,dynaudnorm=f=200,asubboost,apulsator=hz=0.08",
        "cursed": "vibrato=f=6.5,tremolo,aresample=48000,asetrate=48000*1.25",
        "clear": "dynaudnorm=f=200",
        "phaser": "aphaser=in_gain=0.4",
        "vibrate": "vibrato=f=6.5",
        "treble": "treble=g=5",
        "off": "dynaudnorm=f=200",
        "pulsator": "apulsator=hz=1",
        "subboost": "asubboost",
        "16d": "apulsator=hz=0.16",
        "crystalizer": "crystalizer=i=4",
        "rickroll": "bass=g=33,apulsator=hz=0.06,vibrato=f=2.5,tremolo,asetrate=48000*0.8",
        "pitch": "rubberband=pitch=2",
        "slowreverb": "atempo=0.85,aecho=1.0:0.5:10:0.5",
        "fullaudio" : "bass=g=7,dynaudnorm=f=200,apulsator=hz=0.08",
        // "acrossfade" :"acrossfade=d=10" -- just trying to make my own filters
    },
})
const color = "#2187b8";
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.config = require("./config");
(async () => {
    const commandFolders = readdirSync("./commands/");
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`./commands/${folder}`).filter((file) =>
            file.endsWith(".js")
        );
        console.log(`--${folder}--`);
        for (const file of commandFiles) {
            console.log(`Loaded ${file}!`);
            const commandName = file.split(".")[0];
            const command = require(`./commands/${folder}/${file}`);
            bot.commands.set(commandName, command);
        }
    }
})();

bot.on("ready", async () => {

  bot.guilds.cache.filter((g) => g.memberCount < 10).forEach((g) => g.leave());

    const arrayOfStatus = [
            "For M!",
            `For /`,
            `Over ${bot.guilds.cache.size} servers!`,
            `Over ${bot.channels.cache.size} Channels!`,
            `Over ${bot.users.cache.size} Users!`,
            `For the play command`,
    ];

    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        bot.user.setActivity(status, { type: "WATCHING" });
        index++;
    }, 7000);

    console.log("time for owo's");

    data = [
            
        {
            name: "play",
            description: "Plays a song in a voice channel.",
            options: [{
                name: 'song-name',
                type: "STRING",
                description: "Insert a song name!",
                required: true
            }]
        },
        {
            name: "stop",
            description: "Stops the queue.",
        },
        {
            name: "leave",
            description: "Leaves the Voice channel.",
        },
        {
            name: "join",
            description: "Joins the  Voice channel.",
        },
        {
            name: "volume",
            description: "Increase or decrease the music volume.",
            options: [{
                name: "number",
                type: "STRING",
                description: "Enter a number value!",
                required: true
            }]
        },
        {
            name: "pause",
            description: "Pauses the queue.",
        },
        {
            name: "autoplay",
            description: "Enable or disable autoplay.",
        },
        {
            name: "now_playing",
            description: "Shows the current music being played.",
        },
        {
            name: "resume",
            description: "Resumes the queue.",
        },
        {
            name: "skip",
            description: "Skips the current played music",
        },
        {
            name: "queue",
            description: "Shows the queue.",
        },
        {
            name: "shuffle",
            description: "Shuffles the queue.",
        },
        {
            name: "previous",
            description: "Plays the previous song.",
        },
        {
            name: "playskip",
            description: "Plays a song in a voice channel and skips the current music being played.",
            options: [{
                name: 'song-name',
                type: "STRING",
                description: "Insert a song name!",
                required: true
            }]
        },
        {
            name: "speed",
            description: "Increase or decrease the music speed!",
            options: [{
                name: "speed",
                type: "STRING",
                description: "Enter a number value!",
                required: true
            }]
        },
        {
            name: "invite",
            description: "Invitation link for the bot to invite through",
        },
        {
            name: "help",
            description: "A list of commands of Musotiq!",
        },
        {
            name: "prefix",
            description: "Shows the bot's prefix for the server you are in.",
        },
        {
            name: "filters",
            description: "Shows a BUNCH of filters this bot has to offer.",
        },
        {
            name: "vote",
            description: "Vote for Musotiq on These sites!",
        },
        {
            name: "info",
            description: "shows the servers the bot is in and the amount of discord users using it.",
        },
        {
            name: "credits",
            description: "Shows the creators of this music bot",
        }
        // {
        //     name: "support",
        //     description: "Sends the support server Discord server link.",
        // }
    ]


    // Global

    const command = await bot.application?.commands.set(data);

    // Guild

    // const command = await bot.guilds.cache.get("681744656840654896")?.commands.set(data);
    console.log(command)

});

bot.on('interactionCreate', async inter => {
    if (inter.isCommand()) {

        // VC Commands

        if (inter.commandName === 'play') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            const input = inter.options.getString('song-name')
            bot.distube.play(inter.member.voice.channel, input, { textChannel: inter.channel, member: inter.member });

            inter.reply({ content: `🔍 Searching for \`${input}\``, ephemeral: false })
        }

        else if (inter.commandName === 'stop') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const embed = new Discord.MessageEmbed()
                .setDescription('Stopped the queue')
                .setColor("#2187b8")

            bot.distube.stop(inter)
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'leave') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            bot.distube.voices.leave(inter)
            const embed = new Discord.MessageEmbed()
                .setDescription('Left the channel.')
                .setColor("#2187b8")
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'join') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            bot.distube.voices.join(inter.member.voice.channel)
            const embed = new Discord.MessageEmbed()
                .setDescription('Joined the channel.')
                .setColor("#2187b8")
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'volume') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")
                .setTimestamp()
            const error3 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("Volume must be a number value!")
                .setColor("#bb1414")
                .setTimestamp()
            const error4 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("Volume must be less than 300!")
                .setColor("#bb1414")
                .setTimestamp()


            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const volumenumber = inter.options.getString('number')
            if (isNaN(volumenumber)) return inter.reply({ embeds: [error3], ephemeral: true })
            if (parseInt(volumenumber) > 300) return inter.reply({ embeds: [error4], ephemeral: true })

            const embed = new Discord.MessageEmbed()
                .setTitle('Done!')
                .setDescription(`Volume was set to ${volumenumber}%`)
                .setColor("#2187b8")

            bot.distube.setVolume(inter.member.voice.channel, parseInt(volumenumber))
            inter.reply({ embeds: [embed] })
        }

        else if (inter.commandName === 'pause') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const embed = new Discord.MessageEmbed()
                .setDescription('Paused the queue')
                .setColor("#2187b8")

            bot.distube.pause(inter.member.voice.channel)
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'resume') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const embed = new Discord.MessageEmbed()
                .setDescription('Resumed playing the queue')
                .setColor("#2187b8")

            bot.distube.resume(inter.member.voice.channel)
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'autoplay') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })
            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            let mode = bot.distube.toggleAutoplay(inter);
            const embed = new Discord.MessageEmbed()
                .setTitle(`Autoplay Set!\nCurrent Autoplay: ${mode ? "On" : "Off"}`)
                .setColor("#2187b8");
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'now_playing') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })
            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;
            let song = queue.songs[0];
            const embed = new Discord.MessageEmbed()
                .setTitle("Now Playing")
                .setDescription(`Playing \`\`${song.name}\`\``)
                .addFields(
                    {
                        name: "Song Formation:",
                        value: `**${song.formattedDuration}**`,
                        inline: true,
                    },
                    {
                        name: "Song Requested By:",
                        value: `${song.user}`,
                        inline: true,
                    },
                    {
                        name: "Current Status:",
                        value: `${status(queue)}`,
                        inline: true,
                    },
                    {
                        name: "Likes 👍",
                        value: `${song.likes}`,
                        inline: true,
                    },
                    {
                        name: "Dislikes 👎",
                        value: `${song.dislikes}`,
                        inline: true,
                    }

                )
                .setColor(color);
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'skip') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")
            const error3 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You cant skip when there is nothing in the queue right now!\nAdd atleast one song to continue!")
                .setColor("#bb1414")

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })
            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            if (!bot.distube.getQueue(inter.guildId) || bot.distube.getQueue(inter.guildId).songs.length <= 1) {
                return inter.reply({ embeds: [error3], ephemeral: true })
            }

            bot.distube.skip(inter.member.voice.channel)
            const embed = new Discord.MessageEmbed()
                .setTitle("Skipped! ⏩")
                .setTimestamp()
                .setColor("#2187b8")
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'queue') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })
            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const embed = new Discord.MessageEmbed()
                .setTitle('Current queue')
                .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n'))
                .setColor("#2187b8")
                .setTimestamp()
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'shuffle') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })
            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            bot.distube.shuffle(inter.member.voice.channel)
            const embed = new Discord.MessageEmbed()
                .setTitle('Done!')
                .setDescription('Shuffled the queue 🔂')
                .setColor("#2187b8")
                .setTimestamp()
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'previous') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })
            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;
            let song = queue.previous()
            const embed = new Discord.MessageEmbed()
                .setTitle("Now Playing")
                .setDescription(`Playing \`\`${song.name}\`\``)
                .addFields(
                    {
                        name: "Song Formation:",
                        value: `**${song.formattedDuration}**`,
                        inline: true,
                    },
                    {
                        name: "Song Requested By:",
                        value: `${song.user}`,
                        inline: true,
                    },
                    {
                        name: "Current Status:",
                        value: `${status(queue)}`,
                        inline: true,
                    },
                    {
                        name: "Likes 👍",
                        value: `${song.likes}`,
                        inline: true,
                    },
                    {
                        name: "Dislikes 👎",
                        value: `${song.dislikes}`,
                        inline: true,
                    }

                )
                .setColor(color);
            inter.reply({ content: "Now playing the previous song ↩" })

        }

        else if (inter.commandName === 'playskip') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You cant skip when there is nothing in the queue right now!\nAdd atleast one song to continue!")
                .setColor("#bb1414")


            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            if (!bot.distube.getQueue(inter.member.voice.channel).songs.length <= 1) {
                return inter.reply({ embeds: [error2], ephemeral: true })
            }

            const input = inter.options.getString('song-name')
            bot.distube.play(inter.member.voice.channel, input, { textChannel: inter.channel, member: inter.member, skip: true });


            inter.reply({ content: `🔍 Searching for \`${input}\``, ephemeral: false })
        }

        else if (inter.commandName === 'speed') {

            const error = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("You must be in a voice channel to use the command")
                .setColor("#bb1414")
                .setTimestamp()
            const error2 = new Discord.MessageEmbed()
                .setTitle("Musotiq sent an Error!")
                .setDescription("There is nothing in the queue right now!")
                .setColor("#bb1414")
                .setTimestamp()

            if (!inter.member.voice.channel) return inter.reply({ embeds: [error], ephemeral: true })

            const queue = bot.distube.getQueue(inter)
            if (!queue) return inter.reply({ embeds: [error2], ephemeral: true })

            const speed = inter.options.getString('speed')

            let speed_amount = speed ? Number(speed) : 1;
            let CustomFilters = bot.distube.filters

            CustomFilters.customspeed = `atempo=${speed_amount}`;
            bot.distube.filters = CustomFilters;

            const newQueue = bot.distube.getQueue(inter.guildId);

            newQueue.setFilter("customspeed");

            const embed = new Discord.MessageEmbed()
                .setTitle("Done!")
                .setDescription(`Speed has been set to ${speed_amount}%`)
                .setColor("#2187b8")

            inter.reply({ embeds: [embed] })


        }
        // Other Commands

        else if (inter.commandName === 'invite') {

            const title = 'Here is this invite link to add Musotiq';
            const description = [
                'Musotiq team: Thanks for adding Musotiq! We really hope you enjoy to our 24/7 bot :3, Enjoy!',
                'Regards.',
                'The Musotiq Team.'
            ].join('\n');
            const options = {
                dynamic: true,
                size: 4096,
            };

            const embed = new Discord.MessageEmbed()
                .setTitle(title)
                .setURL(`https://discord.com/oauth2/authorize?client_id=837275998907138058&scope=bot&permissions=15797784`)
                .setDescription(description)
                .setColor('#2187b8')
                .setThumbnail(bot.user.displayAvatarURL({ ...options }));
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'filters') {

            const embed = new Discord.MessageEmbed()
                .setTitle("Here are my filters!")
                .setDescription("**3d**\n**bassboost**\n**crystalizer**\n**earwax**\n**echo**\n**flanger**\n**gate**\n**haas**\n**karaoke**\n**mcompound**\n**nightcore**\n**normalizer**\n**pitch**\n**reverse**\n**rickroll**\n**subboost**\n**surround**\n**tremolo**\n**vaporwave**")
                .addFields(
                    {
                        name: '**__Premium!__**',
                        value: 'If you bought Musotiq Premium, You unlocked more Filters!\n**16d**\n**8d**\n**clear**\n**cursed**\n**earrape**\n**phaser**\n**pulsator**\n**purebass**\n**slowreverb**\n**vibrate**\n**treble**',
                        inline: true
                    }
                )
                .setColor('#2187b8')
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'help') {

            const embed = new Discord.MessageEmbed()
                .setTitle("**So, You need help right?**")
                .setDescription("**Here are my commands**\n\n**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**")
                .addFields(
                    {
                        name: "VC Commands",
                        value:
                            "**1.Add**\n**2.Play**\n**3.Pause**\n**4.Resume**\n**5.Skip**\n**6.Loop**\n**7.Stop**\n**8.queue**\n**9.volume**\n**10.filters**\n**11.autoplay**",
                        inline: true,
                    },
                    {
                        name: "Other Commands",
                        value:
                            "**1.Add**\n**2.Credits**\n**3.Filters**\n**4.Ping**\n**5.Stats**\n**5.suggestion**\n**6.supportserver**\n**7.vote**",
                        inline: true,
                    },
                    {
                        name: "Administrator Commands",
                        value: "**1.prefix**",
                        inline: true,
                    }
                )
                .setColor('#2187b8')
                .setThumbnail(bot.user.avatarURL());
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'vote') {

            const embed = new Discord.MessageEmbed()
                .setTitle("Vote For Musotiq!")
                .setDescription(
                    "Thanks for steping by to vote for Musotiq! Lets Increase the popularity of this bot by voting through these links down below! ;)\n\n**Top.gg**\n[Click here!](https://top.gg/bot/837275998907138058/vote)\n\n**discordbotlist.com**\n[Click here!](https://discordbotlist.com/bots/musotiq/upvote)"
                )
                .setFooter("Thanks for voting ;), Enjoy Listening to this bot!")
                .setColor(color)
                .setTimestamp();
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'info') {

            const embed = new Discord.MessageEmbed()
                .setTitle("Info!")
                .setDescription(
                    `im in ${bot.guilds.cache.size} servers, used by ${bot.users.cache.size} users`
                )
                .setTimestamp()
                .setColor(color);
            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'support') {

            inter.reply({ content: "Here is the support server if you need help:-\nhttps://discord.gg/QUJaeCBeDv", ephemeral: true })

        }

        else if (inter.commandName === 'prefix') {

            const PREFIX = db.get(`guild_${inter.guild.id}_prefix`) || "M!"

            const embed = new Discord.MessageEmbed()
            .setTitle("Prefix")
            .setDescription(`My prefix to this server is \`${PREFIX}\` or \`/\` `)
            .setColor(color)

            inter.reply({ embeds: [embed] })

        }

        else if (inter.commandName === 'credits') {

        const embed = new Discord.MessageEmbed()
        .setTitle("Credits!")
        .setDescription("1- Derpxdxz\n2- BraceGD\n3- LeVonara\n4- WillolzCitron")

            inter.reply({ embeds: [embed] })

        }
    }


    console.log(inter)
})









bot.on("messageCreate", async (message) => {
    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || "M!"
    const pingbotpong = new Discord.MessageEmbed()
        .setDescription(`My prefix to this server is **${PREFIX}**`)
        .setFooter(`if you still need more help, type ${PREFIX}help to get started`)
        .setColor(color);
    const mentionRegExp = new RegExp(`^<@!?837275998907138058>( |)$`);

    if (message.content.match(mentionRegExp)) {
        return message.channel.send({ embeds: [pingbotpong] });
    }


      const prefixargs = message.content.substring(PREFIX.length).split(" ");
      const nopermsoof = new Discord.MessageEmbed()
        .setTitle("Musotiq Sent an error!")
        .setDescription("You dont have any permision to use this command!")
        .setFooter("you need the ``MANAGE_CHANNELS`` permision, thats why bud")
        .setColor("#ff0000");

      const usedprefix = new Discord.MessageEmbed()
        .setTitle("Musotiq Sent an error!")
        .setDescription("this prefix is already being used!")
        .setColor("#ff0000");

      const bigassprefix = new Discord.MessageEmbed()
        .setTitle("Musotiq Sent an error!")
        .setDescription("a prefix cant be more than 3 characters!")
        .setColor("#ff0000");

      const wrongusage = new Discord.MessageEmbed()
        .setTitle("Musotiq Sent an error")
        .setDescription(`Wrong usage! type \`${PREFIX}prefix **prefix you want**\` `)
        .setColor("#ff0000");

      const sEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Prefix Set!")
        .setDescription(`set the prefix to **${prefixargs[1]}**`);
      //   embed done
      if (message.content.startsWith(`${PREFIX}prefix`)) {

        if (
            !message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS) &&
            message.member.id !== '485690542844280885'
        ) {
          return message.channel.send({ embeds: [nopermsoof] });
        }


        if (!prefixargs[1]) return message.channel.send({ embeds: [wrongusage] });
        if (prefixargs[1].length > 3) return message.channel.send({ embeds: [bigassprefix] });
        if (prefixargs[1] === db.get(`guild_${message.guild.id}_prefix`))
          return message.channel.send({ embeds: [usedprefix] });
        if (prefixargs[1] === "M!") db.delete(`guild_${message.guild.id}_prefix`);
        db.set(`guild_${message.guild.id}_prefix`, prefixargs[1]);
        return message.channel.send({ embeds: [sEmbed] });
      }

    if (message.author.bot || !message.guild) return

    if (!message.content.startsWith(PREFIX)) return
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))
    if (!cmd) return
    if (cmd.inVoiceChannel && !message.member.voice.channel) {
        return message.channel.send(`${bot.emotes.error} | You must be in a voice channel!`)
    }
    try {
        cmd.run(bot, message, args)
    } catch (e) {
        console.error(e);
        message.channel.send("An error occured while executing this command.");
    }



});
// bot.on("guildCreate", async (guild) => {
//     const guildembed = new Discord.MessageEmbed()
//         .setTitle(
//             `Musotic is now in ${guild.name}! Musotic's Guildcount is now ${bot.guilds.cache.size} Servers!`
//         )
//         .addField(`Basic Information`, [
//             `*  *Total Membercount:** ${guild.memberCount}`,
//             `*  *Emoji Count:** ${guild.emojis.cache.size}`,
//             `*  *Region:** ${guild.region}`,
//             `*  *Explicit Content Filter:** ${guild.explicitContentFilter}`,
//             `*  *Role Count:** ${guild.roles.cache.size}`,
//             `\  u200b`,
//         ])
//         .addField(`Other Information`, [
//             `*  *Boost Count:** ${guild.premiumSubscriptionCount || "0"} (Level ${
//             guild.premiumTier || "0"
//             })`,
//             `*  *Partnered:** ${guild.partnered ? "True" : "False"}`,
//             `*  *Verified:** ${guild.verified ? "True" : "False"}`,
//         ])
//         .setThumbnail(guild.iconURL({ dynamic: true }))
//         .setImage(guild.bannerURL({ size: 2048 }))
//         .setColor(color)
//         .setFooter(`ID: ${guild.id}`)
//         .setTimestamp();
//     bot.channels.cache.get("838661385613213719").send({ embeds: [guildembed] });
// });
bot.on("guildCreate", (guild) => {
    let channelToSend;
    guild.channels.cache.forEach((channel) => {
        findAvailableChannel =
            channel.type === "text" &&
            !channelToSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES");
        if (findAvailableChannel) channelToSend = channel;
    });
    if (!channelToSend) return;
    const welcomeMessage = new Discord.MessageEmbed()
        .setTitle("Hello there!")
        .setDescription(
            "Thanks For Adding **Musotiq** to this server!\n\nto get started type `M!help` or `/help` to see my command list and you are good to go!\n\n and if you need help, you can   check our support server as always\nhttps://discord.gg/QUJaeCBeDv\nanyways, Happy listening!"
        )
        .setColor(color)
        .setTimestamp();

    channelToSend.send({ embeds: [welcomeMessage] });
});
// bot.on("guildDelete", async (guild) => {
//     const guildembed = new Discord.MessageEmbed()
//         .setTitle(
//             `Musotic is no longer in ${guild.name}! Musotic's Guildcount is now ${bot.guilds.cache.size} Servers!`
//         )
//         .addField(`Basic Information`, [
//             `*  *Total Membercount:** ${guild.memberCount}`,
//             `*  *Emoji Count:** ${guild.emojis.cache.size}`,
//             `*  *Region:** ${guild.region}`,
//             `*  *Explicit Content Filter:** ${guild.explicitContentFilter}`,
//             `*  *Role Count:** ${guild.roles.cache.size}`,
//             `\  u200b`,
//         ])
//         .addField(`Other Information`, [
//             `*  *Boost Count:** ${guild.premiumSubscriptionCount || "0"} (Level ${
//             guild.premiumTier || "0"
//             })`,
//             `*  *Partnered:** ${guild.partnered ? "True" : "False"}`,
//             `*  *Verified:** ${guild.verified ? "True" : "False"}`,
//         ])
//         .setThumbnail(guild.iconURL({ dynamic: true }))
//         .setImage(guild.bannerURL({ size: 2048 }))
//         .setColor(color)
//         .setFooter(`ID: ${guild.id}`)
//         .setTimestamp();
//     bot.channels.cache.get("838662134757720064").send({ embeds: [guildembed] });
// });

const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;

bot.distube.on("playSong", (queue, song) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Now Playing")
        .setDescription(`Playing \`\`${song.name}\`\``)
        .addFields(
            {
                name: "Song Formation:",
                value: `**${song.formattedDuration}**`,
                inline: true,
            },
            {
                name: "Song Requested By:",
                value: `${song.user}`,
                inline: true,
            },
            {
                name: "Current Status:",
                value: `${status(queue)}`,
                inline: true,
            },
            {
                name: "Likes 👍",
                value: `${song.likes}`,
                inline: true,
            },
            {
                name: "Dislikes 👎",
                value: `${song.dislikes}`,
                inline: true,
            }

        )
        .setColor(color);
    queue.textChannel.send({ embeds: [embed] })
});

bot.distube.on("addSong", (queue, song) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Added!")
        .setDescription(`Added \`\`${song.name}\`\``)
        .addFields(
            {
                name: "Song Formation:",
                value: `**${song.formattedDuration}**`,
                inline: true,
            },
            {
                name: "Song Requested By:",
                value: `${song.user}`,
                inline: true,
            },
            {
                name: "Current Status:",
                value: `${status(queue)}`,
                inline: true,
            },
            {
                name: "Likes 👍",
                value: `${song.likes}`,
                inline: true,
            },
            {
                name: "Dislikes 👎",
                value: `${song.dislikes}`,
                inline: true,
            }

        )
        .setColor(color);
    queue.textChannel.send({ embeds: [embed] });
});

bot.distube.on("addList", (queue, playlist) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Done!")
        .setDescription(
            `Added \`${playlist.name}\` playlist (${playlist.songs.length
            } songs) to queue\n${status(queue)}`
        )
        .setColor(color)
        .setTimestamp();
    queue.textChannel.send({ embeds: [embed] });
});

bot.distube.on("error", (e) => {
    console.error(e);
});

bot.distube.on("empty", (queue, channel) => {
    const embed = new Discord.MessageEmbed()
        .setDescription("Voice channel is empty! Leaving the channel...")
        .setColor("#bb1414")
    queue.textChannel.send({ embeds: [embed] })
});

bot.distube.on("finish", (queue) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Finished!")
        .setDescription("The queue has been Finished!")
        .setTimestamp()
        .setColor(color)
    queue.textChannel.send({ embeds: [embed] })
});

bot.distube.on("searchResult", (message, result) => {
    let i = 0;
    const embed = new Discord.MessageEmbed()
        .setTitle("Choose an option from below")
        .setDescription(
            result
                .map(
                    (song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``
                )
                .join("\n")
        )
        .setFooter(
            "Enter anything else or wait 60 seconds to cancel",
            message.author.avatarURL()
        )
        .setColor(color)
        .setTimestamp();
    message.channel.send({ embeds: [embed] })
});
bot.distube.on("searchCancel", (message) => {
    const searchC = new Discord.MessageEmbed()
        .setDescription("Searching Cancelled.")
        .setTimestamp()
        .setColor(color);
    return message.channel.send({ embeds: [searchC] });
});

keepAlive();
bot.login(mySecret);