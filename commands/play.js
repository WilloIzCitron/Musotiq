const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args, color, distube) => {
    query = message.content.split(" ").slice(1).join(" ")
    if(query.includes("https://soundcloud.com")) {
        if(message.member.roles.cache.find(r => r.name === "Premium")){
            distube.play(message, query);
        }else{
        message.channel.send("You need a Musotiq Premium for use this feature\nif you want buy a Musotiq Premium visit our support server for get a premium(1 premium per user)")}
    }else{
	distube.play(message, query);}
}

module.exports.config = {
	name: 'play',
	aliases: ['p']
}