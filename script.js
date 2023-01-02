const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    game: {
      name: 'Monitoring the Oh Shit 100x server',
      type: 'WATCHING'
    }
  });
});

client.login('MTA1OTM0MDE5Nzg4NTY2MTMxNQ.GQAnvA.ytaIa1Gsx__EJ_wkhyff8JtEGMCKPpG9vfgiio');
