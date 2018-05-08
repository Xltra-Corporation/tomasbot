const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";

var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

var yesOrNo = rand[Math.floor(Math.random()*rand.length)];


client.on('ready', () => {
    console.log('Connected to Github & Discord');
});

client.on('message', message => {
    
  
    if (message.content === prefix + 'help') {
    	const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setFooter('TomasBOT Framework - © 2018')
       
        .setAuthor('TomasBot Help')
        .addField('- General Commands :slight_smile: ', 'ping\nupdates')
        .addField('- Fun Commands :stuck_out_tongue: ', '8ball\npong\nlol\ncookie')
        .addField('- Help Commands :grey_question: ', '8ball help\nhelp')
        .addField('Prefix', 'This bot uses "!" as a Prefix.')
        message.channel.send({embed})
    }
     
      
    if (message.content === prefix + 'test') {
    	
const embed = new Discord.RichEmbed()
        
.setColor(0x00AE86)
    
 .setAuthor("TomasBOT", "https://imgur.com/jN8qKo7.png")
    .setFooter('TomasBOT Framework - © 2018')
    
   
        .setAuthor('TomasBot Help')
    
    .addField('Uh oh! ', 'Seems like that command is currently being worked on,\nWe recommend you join the support server if you need help with the bot\nThanks for usng TomasBOT.')
   
     
   message.channel.send({embed})
    }
     
    
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('Currently it is "!"');
  	} 
        if (message.content === 'tomasbot?') {
    	message.reply('Hello! Try !help');
  	}
    if (message.content === prefix + '8ball') {
        message.reply('I say, ' + yesOrNo);
    
    }
    	
    if (message.content === prefix + 'updates') {
    	const embed = new Discord.RichEmbed()
        .setAuthor('TomasBot Update Info')
        .addField('- General Updates', 'Added Updates command\nRemoved old help and updates command\n')
    .addField('- Version:', '1.0.3')
        message.channel.send({embed})
  	}
}
    if (message.content === prefix + '8ball help') {
    	const embed = new Discord.RichEmbed()
        .setAuthor('TomasBot Help')
        .setFooter('TomasBOT framework')
        .addField('8ball Help', '1. Ask your question\n After asking your question enter the command !8ball and send it.\n You will receive a reply.')
        message.channel.send({embed})
    }

      if (message.content === prefix + 'cookie') {
    	const embed = new Discord.RichEmbed()
        .setAuthor('Cookies ')
        
        .addField(':cookie: ')
        message.channel.send({embed})
    }
    
    if (message.content === prefix + 'ping') {
    	const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .addField('Pong!', ' :ping_pong: ')
        message.channel.send({embed})
    }
  	
      if (message.content === prefix + 'pong') {
    	const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .addField('Ping!', ' :ping_pong: ')
        message.channel.send({embed})
    }
  	
  if (message.content === prefix + 'lol') {
        message.reply(':joy: ');
    
    } 
        });
        // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
