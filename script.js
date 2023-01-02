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

client.on('error', err => {
  console.error(err);
});

client.login('MTA1OTM0MDE5Nzg4NTY2MTMxNQ.GOhXEj.kzYK6-erqtZW2v23dei-lEeDRGyQP52U2J2pq8');
