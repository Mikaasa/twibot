const Discord = require('discord.js');

exports.run = (client, message) => {
 const modlog = client.channels.find('name', 'mod-log');

const roll = Math.floor(Math.random() * 6) + 1  

message.delete()

message.channel.send({embed: {
color: 0xffffff,
description: `${message.author}, you rolled a ${roll}!`
 }
 })
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['roll','dice'],
permLevel: 0
};

exports.help = {
name: 'rolldice',
description: 'To roll a dice.. useless eh?',
usage: 'rolldice'
};