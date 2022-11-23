// Get properties from .env file and add to the envirnment
require('dotenv').config();

// Intantiate a discord.Client
const { Client, GatewayIntentBits, Partials, Collection, ActivityType, Intents  } = require('discord.js');
const fs = require('fs');
const client = new Client({
	allowedMentions: {
		parse: ['users', 'roles'],
		repliedUser: false,
	},
	intents: [512, 1],
});

// Load the command and events
['commands'].forEach(x => (client[x] = new Collection()));
['command', 'event'].forEach(x => require(`./handlers/${x}`)(client));

// Login the client
client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('bot is online');
	let servers = client.guilds.cache.size
    client.user.setPresence({
		activities: [{ name: `over ${servers} server(s)`, type: ActivityType.Watching }],
		status: 'available',
	  });
});