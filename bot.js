const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (message.content === '#ping') {
    	message.reply('Pong!');
  	}
});
client.on('message', message => {
    if (message.content === '#pong') {
    	message.reply('Ping! Hey waiiit!!');
  	}
});
client.on('message', message => {
    if (message.content === '#help') {
    	message.reply('**Commands:** ping, pong, help');
  	}
});
client.on('message', message => {
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('#');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);