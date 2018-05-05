const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const reason = args.slice(1).join(' ');
 const user = message.mentions.users.first();
 const modlog = client.channels.find('name', 'mod-log');
 if (!modlog) return message.reply('I cannot find a mod-log channel');
 if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
 if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

 if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');

 user.sendMessage({embed: {
   color: 0xff0000,
   title: "Guild Kick",
   description: (`\n**You have been kicked from the discord!**\n`),
fields: [{
 name: "Moderator:",
 value: `${message.author.username} (${message.author})`
},{
 name: "Kick Reason:",
 value: `${reason}`
},{
 name: "If you believe that this was an error, please contact the moderator involved in banning you.",
 value: "You may rejoin the discord server, but please avoid breaking the rules again!"
}]
     }})

 const embed = new Discord.RichEmbed()
 .setColor(0xff0000)
 .setTimestamp()
.setTitle("Guild Kick")
 .setDescription("\n")
 .addField("Username:",`${user.username} (${user})`,true)
 .addField("Moderator:",`${message.author.username} (${message.author})`,true)
 .addField("Kick Reason:",`${reason}`,false)


   message.guild.member(user).kick();
   client.channels.get(modlog.id).send({embed}).catch(console.error);
message.channel.send({embed});
};


exports.conf = {
 aliases: [],
 permLevel: 2
};

exports.help = {
 name: 'kick',
 description: 'Kicks the mentioned user.',
 usage: 'kick [mention] [reason]'
};