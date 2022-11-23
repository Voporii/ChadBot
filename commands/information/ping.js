module.exports = {
	category: 'information',
	name: 'ping',
	description: 'Get ChadBot Ping Information',
	async run(client, interaction, options) {

		interaction.reply({ content: `🏓 Pong! - ChadBot reached the server in ${client.ws.ping}ms!` });

	},
};
