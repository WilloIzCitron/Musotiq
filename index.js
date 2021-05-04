const Discord = require('discord.js');
const reply = require('discord-reply');
const db = require('quick.db');
const canvacord = require('canvacord');
const DisTube = require('distube');
const canvas = require('discord-canvas');
const ms = require('ms');
const fs = require('fs');
const keepAlive = require('./server');
const mySecret = process.env['token'];
const prefix = 'M!';

const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const distube = new DisTube(bot, {
	searchSongs: true,
	emitNewSongOnly: false,
	leaveOnFinish: true,
	leaveOnEmpty: true,
});

const color = '#2187b8';

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err);

	const jsfile = files.filter(f => f.split('.').pop() === 'js');
	jsfile.forEach((f, i) => {
		const pull = require(`./commands/${f}`);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
	});
});
bot
	.on('ready', async () => {
		bot.user.setActivity('For Some Excitment... | M!', { type: 'WATCHING' });
		console.log(`${bot.user.tag} is online!`);
	})
	.on('message', async message => {
		if (message.author.bot) return;

		const messageArray = message.content.split(' ');
		const cmd = messageArray[0];
		const args = message.content
			.slice(cmd.length)
			.trim()
			.split(/ +g/);

		if (!message.content.startsWith(prefix)) return;
		const commandfile =
			bot.commands.get(cmd.slice(prefix.length)) ||
			bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
		commandfile.run(bot, message, args, color, distube);
	});

bot.on('guildCreate', async guild => {
	const guildembed = new Discord.MessageEmbed()
		.setTitle(`Musotic is now in ${guild.name}! Musotic's Guildcount is now ${bot.guilds.cache.size} Servers!`)
		.addField(`Basic Information`, [
			`**Total Membercount:** ${guild.memberCount}`,
			`**Emoji Count:** ${guild.emojis.cache.size}`,
			`**Region:** ${guild.region}`,
			`**Explicit Content Filter:** ${guild.explicitContentFilter}`,
			`**Role Count:** ${guild.roles.cache.size}`,
			`\u200b`
		])
		.addField(`Other Information`, [
			`**Boost Count:** ${guild.premiumSubscriptionCount || '0'} (Level ${guild.premiumTier || '0'})`,
			`**Partnered:** ${guild.partnered ? 'True' : 'False'}`,
			`**Verified:** ${guild.verified ? 'True' : 'False'}`
		])
		.setThumbnail(guild.iconURL({ dynamic: true }))
		.setImage(guild.bannerURL({ size: 2048 }))
		.setColor(color)
		.setFooter(`ID: ${guild.id}`)
		.setTimestamp()
	bot.channels.cache
		.get('838661385613213719')
		.send(guildembed);
});

bot.on('guildDelete', async guild => {
	const guildembed = new Discord.MessageEmbed()
		.setTitle(`Musotic is no longer in ${guild.name}! Musotic's Guildcount is now ${bot.guilds.cache.size} Servers!`)
		.addField(`Basic Information`, [
			`**Total Membercount:** ${guild.memberCount}`,
			`**Emoji Count:** ${guild.emojis.cache.size}`,
			`**Region:** ${guild.region}`,
			`**Explicit Content Filter:** ${guild.explicitContentFilter}`,
			`**Role Count:** ${guild.roles.cache.size}`,
			`\u200b`
		])
		.addField(`Other Information`, [
			`**Boost Count:** ${guild.premiumSubscriptionCount || '0'} (Level ${guild.premiumTier || '0'})`,
			`**Partnered:** ${guild.partnered ? 'True' : 'False'}`,
			`**Verified:** ${guild.verified ? 'True' : 'False'}`
		])
		.setThumbnail(guild.iconURL({ dynamic: true }))
		.setImage(guild.bannerURL({ size: 2048 }))
		.setColor(color)
		.setFooter(`ID: ${guild.id}`)
		.setTimestamp()
	bot.channels.cache
		.get('838662134757720064')
		.send(guildembed);
});

const status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${queue.filter ||
		'Off'}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode === 2
				? 'All Queue'
				: 'This Song'
			: 'Off'
	}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;

distube
	.on('playSong', (message, queue, song) => {
		const embed = new Discord.MessageEmbed()
			.setTitle('Done!')
			.setDescription(
				`<:youtubelmao:837336123427782736> Playing [${song.name}](${
					song.url
				}) - \`${song.formattedDuration}\`\n\nRequested by: ${
					song.user
				}\n\n${status(queue)}`
			)
			.setColor(color)
			.setImage(song.thumbnail)
			.setTimestamp();
		message.channel.send(embed);
	})
	.on('addSong', (message, queue, song) => {
		const embed = new Discord.MessageEmbed()
			.setTitle('Added!')
			.setDescription(
				`Added [${song.name}](${song.url}) - \`${
					song.formattedDuration
				}\` to the queue by ${song.user}`
			)
			.setColor(color)
			.setImage(song.thumbnail)
			.setTimestamp();
		message.channel.send(embed);
	})
	.on('playList', (message, queue, playlist, song) => {
		const embed = new Discord.MessageEmbed()
			.setTitle('Playlist')
			.setDescription(
				`Play \`${playlist.name}\` playlist (${
					playlist.songs.length
				} songs).\nRequested by: ${song.user}\nNow playing \`${
					song.name
				}\` - \`${song.formattedDuration}\`\n${status(queue)}`
			)
			.setColor(color)
			.setTimestamp();
		message.channel.send(embed);
	})
	.on('addList', (message, queue, playlist) => {
		const embed = new Discord.MessageEmbed()
			.setTitle('Done!')
			.setDescription(
				`<:youtubelmao:837336123427782736> Added \`${
					playlist.name
				}\` playlist (${playlist.songs.length} songs) to queue\n${status(
					queue
				)}`
			)
			.setColor(color)
			.setTimestamp();
		message.channel.send(embed);
	})
	.on('searchResult', (message, result) => {
		let i = 0;
		const embed = new Discord.MessageEmbed()
			.setTitle('<:youtubelmao:837336123427782736> Choose an option from below')
			.setDescription(
				result
					.map(
						song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``
					)
					.join('\n')
			)
			.setFooter(
				'Enter anything else or wait 60 seconds to cancel',
				message.author.avatarURL()
			)
			.setColor(color)
			.setTimestamp();
		message.channel.send(embed);
	})
	.on('searchCancel', message =>
		message.channel.send(
			new Discord.MessageEmbed()
				.setDescription(
					`${
						message.channel.id === ''
							? 'Searching cancelled'
							: message.channel.id === '837277037122289704'
								? 'Searching cancelled'
								: '837277037122289704'
					}`
				)
				.setColor(color)
		)
	)
	.on('error', (message, e) => {
		console.error(e);
		const embed = new Discord.MessageEmbed()
			.setTitle('Error')
			.setDescription(e)
			.setTimestamp()
			.setColor('#bb1414');
		message.channel.send(embed);
	});


keepAlive();
bot.login(mySecret);
