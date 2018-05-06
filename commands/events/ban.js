const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let reason = args.slice(1).join(' ');
 let user = message.mentions.users.first();
 let modlog = client.channels.find('name', 'mod-log');
 if (!modlog) return message.reply('I cannot find a mod-log channel');
 if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
 if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

 if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
 user.sendMessage({embed: {
   color: 0xff0000,
   title: "Guild Ban",
   description: (`\n**You have been banned from the discord!**\n`),
fields: [{
 name: "Administrator:",
 value: `${message.author.username} (${message.author})`
},{
 name: "Ban Reason:",
 value: `${reason}`
},{
 name: "If you believe that this was an error, please contact the administrator involved in banning you.",
 value: "Please do not interact with the server for the time being until your ban is lifted."
}]
     }})

 const embed = new Discord.RichEmbed()
 .setColor(0xff0000)
 .setTimestamp()
.setTitle("Guild Ban")
 .setDescription("\n")
 .addField("Username:",`${user.username} (${user})`,true)
 .addField("Administrator:",`${message.author.username} (${message.author})`,true)
 .addField("Ban Reason:",`${reason}`,false)

 message.guild.ban(user, 2);
client.channels.get(modlog.id).send({embed});
message.channel.send({embed});
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3
};

exports.help = {
 name: 'ban',
 description: 'Bans the mentioned user.',
 usage: 'ban [mention] [reason]'
};