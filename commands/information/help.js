const { EmbedBuilder } = require('discord.js');

module.exports = {
	category: 'information',
	name: 'help',
	description: 'ChadBot Help Menu',
	async run(client, interaction, options) {

		const embed = new EmbedBuilder()
			.setAuthor({ name: `${client.user.username} - Helpful Information`, iconURL: client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })})
			.setColor(process.env.FLUENT_RED)
			.setDescription(`
				View detailed information about commands via \`/commands\`\n
				Need more help? Visit the [ChadBot Support Discord](https://discord.gg/EUCuwfDe5F)!\n
			`);

		interaction.reply({ embeds: [embed] });

	},
};