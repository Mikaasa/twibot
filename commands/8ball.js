const Discord = require('discord.js');

exports.run = (client, message) => {
 let reason = message.content.split(" ").join(" ").slice(6)
if (reason.length < 1) return message.reply('You must supply a message for 8ball.');
message.delete()
var b = Math.floor(Math.random() * 20) + 1  
if (b == 1) {
 message.channel.send({embed: {
   color: 0x000000,
   title: ":8ball: Twilight's Magic 8 - ball :8ball:",
   description: (``),
   footer: {text: "Try your luck with Twilight Bot's 8ball!"},
fields: [{
 name: "Your Message:",
 value: `${reason}`
},{
 name: ":8ball: Answer:",
 value: `It is certain`
}],
 }})
} else  {
 if (b == 2) {
 message.channel.send({embed: {
   color: 0x000000,
   title: ":8ball: Twilight's Magic 8 - ball :8ball:",
   description: (``),
   footer: {text: "Try your luck with Twilight Bot's 8ball!"},
fields: [{
 name: "Your Message:",
 value: `${reason}`
},{
 name: ":8ball: Answer:",
 value: `As I see it, yes.`
}],
 }})
 } else {
if (b == 3) { 
   message.channel.send({embed: {
     color: 0x000000,
     title: ":8ball: Twilight's Magic 8 - ball :8ball:",
     description: (``),
     footer: {text: "Try your luck with Twilight Bot's 8ball!"},
 fields: [{
   name: "Your Message:",
   value: `${reason}`
 },{
   name: ":8ball: Answer:",
   value: `Reply hazy, try again.`
 }],
   }})
     }
     else { 
       if (b == 4) { 
         message.channel.send({embed: {
           color: 0x000000,
           title: ":8ball: Twilight's Magic 8 - ball :8ball:",
           description: (``),
           footer: {text: "Try your luck with Twilight Bot's 8ball!"},
       fields: [{
         name: "Your Message:",
         value: `${reason}`
       },{
         name: ":8ball: Answer:",
         value: `Don't count on it.`
       }],
         }})
         } else {
           if (b == 5) { 
         
             message.channel.send({embed: {
               color: 0x000000,
               title: ":8ball: Twilight's Magic 8 - ball :8ball:",
               description: (``),
               footer: {text: "Try your luck with Twilight Bot's 8ball!"},
           fields: [{
             name: "Your Message:",
             value: `${reason}`
           },{
             name: ":8ball: Answer:",
             value: `It is decidedly so.`
           }],
             }})
             } else {
               if (b == 6) { 
                 message.channel.send({embed: {
                   color: 0x000000,
                   title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                   description: (``),
                   footer: {text: "Try your luck with Twilight Bot's 8ball!"},
               fields: [{
                 name: "Your Message:",
                 value: `${reason}`
               },{
                 name: ":8ball: Answer:",
                 value: `Most likely.`
               }],
                 }})
                 }
                 else {
                   if (b == 7) { 
                       
                     message.channel.send({embed: {
                       color: 0x000000,
                       title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                       description: (``),
                       footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                   fields: [{
                     name: "Your Message:",
                     value: `${reason}`
                   },{
                     name: ":8ball: Answer:",
                     value: `Ask again later.`
                   }],
                     }})
                     }else {
                       if (b == 8) { 
                         message.channel.send({embed: {
                           color: 0x000000,
                           title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                           description: (``),
                           footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                       fields: [{
                         name: "Your Message:",
                         value: `${reason}`
                       },{
                         name: ":8ball: Answer:",
                         value: `My reply is no.`
                       }],
                         }})
                         }else {
                           if (b == 9) { 
                             message.channel.send({embed: {
                               color: 0x000000,
                               title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                               description: (``),
                               footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                           fields: [{
                             name: "Your Message:",
                             value: `${reason}`
                           },{
                             name: ":8ball: Answer:",
                             value: `Without a doubt.`
                           }],
                             }})
                             }else {
                               if (b == 10) {  
                                 message.channel.send({embed: {
                                   color: 0x000000,
                                   title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                   description: (``),
                                   footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                               fields: [{
                                 name: "Your Message:",
                                 value: `${reason}`
                               },{
                                 name: ":8ball: Answer:",
                                 value: `Outlook good.`
                               }],
                                 }})
                               }else {
                                 if (b == 11) {  
                                   message.channel.send({embed: {
                                     color: 0x000000,
                                     title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                     description: (``),
                                     footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                 fields: [{
                                   name: "Your Message:",
                                   value: `${reason}`
                                 },{
                                   name: ":8ball: Answer:",
                                   value: `Better not tell you now.`
                                 }],
                                   }})
                                 }else {
                                   if (b == 12) {  
                                     message.channel.send({embed: {
                                       color: 0x000000,
                                       title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                       description: (``),
                                       footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                   fields: [{
                                     name: "Your Message:",
                                     value: `${reason}`
                                   },{
                                     name: ":8ball: Answer:",
                                     value: `My sources say no.`
                                   }],
                                     }})
                                   }else {
                                     if (b == 13) {  
                                       message.channel.send({embed: {
                                         color: 0x000000,
                                         title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                         description: (``),
                                         footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                     fields: [{
                                       name: "Your Message:",
                                       value: `${reason}`
                                     },{
                                       name: ":8ball: Answer:",
                                       value: `Yes definitely.`
                                     }],
                                       }})}else {
                                         if (b == 14) {  
                                           message.channel.send({embed: {
                                             color: 0x000000,
                                             title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                             description: (``),
                                             footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                         fields: [{
                                           name: "Your Message:",
                                           value: `${reason}`
                                         },{
                                           name: ":8ball: Answer:",
                                           value: `Yes.`
                                         }],
                                           }})
                                         }else {
                                           if (b == 15) {  
                                             message.channel.send({embed: {
                                               color: 0x000000,
                                               title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                               description: (``),
                                               footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                           fields: [{
                                             name: "Your Message:",
                                             value: `${reason}`
                                           },{
                                             name: ":8ball: Answer:",
                                             value: `Cannot predict now.`
                                           }],
                                             }})
                                 } else {
                                   if (b == 16) {  
                                     message.channel.send({embed: {
                                       color: 0x000000,
                                       title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                       description: (``),
                                       footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                   fields: [{
                                     name: "Your Message:",
                                     value: `${reason}`
                                   },{
                                     name: ":8ball: Answer:",
                                     value: `Outlook not so good.`
                                   }],
                                     }})  } else {
                                       if (b == 17) {  
                                         message.channel.send({embed: {
                                           color: 0x000000,
                                           title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                           description: (``),
                                           footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                       fields: [{
                                         name: "Your Message:",
                                         value: `${reason}`
                                       },{
                                         name: ":8ball: Answer:",
                                         value: `You may rely on it.`
                                       }],
                                         }}) } else {
                                           if (b == 18) {  
                                             message.channel.send({embed: {
                                               color: 0x000000,
                                               title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                               description: (``),
                                               footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                           fields: [{
                                             name: "Your Message:",
                                             value: `${reason}`
                                           },{
                                             name: ":8ball: Answer:",
                                             value: `Signs point to yes.`
                                           }],
                                             }}) } else {
                                               if (b == 19) {  
                                                 message.channel.send({embed: {
                                                   color: 0x000000,
                                                   title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                                   description: (``),
                                                   footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                               fields: [{
                                                 name: "Your Message:",
                                                 value: `${reason}`
                                               },{
                                                 name: ":8ball: Answer:",
                                                 value: `Concentrate and ask again.`
                                               }],
                                                 }}) } else {
                                                   if (b == 20) {  
                                                     message.channel.send({embed: {
                                                       color: 0x000000,
                                                       title: ":8ball: Twilight's Magic 8 - ball :8ball:",
                                                       description: (``),
                                                       footer: {text: "Try your luck with Twilight Bot's 8ball!"},
                                                   fields: [{
                                                     name: "Your Message:",
                                                     value: `${reason}`
                                                   },{
                                                     name: ":8ball: Answer:",
                                                     value: `Very doubtful.`
                                                   }],
                                                     }})
                   }
               }
           }
       }
   }
 }
}
                 }
               }
             }
           }
         }
       }
     }
   }
 }
}
}
 }
}
};




exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: '8ball',
description: 'Try your luck.',
usage: '8ball [message]'
};