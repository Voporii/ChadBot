const { EmbedBuilder } = require('discord.js');
const { createErrEmbed } = require('../../functions.js');

module.exports = {
	category: 'moderation',
	name: 'prune',
	description: 'Prune up to 99 messages.',
	options: [
		{
			name: 'number',
			description: 'Number of messages to prune',
			type: 3,
			required: true,
		},
	],
	async run(client, interaction, options) {

		const amount = options[0].value
    if (amount < 1 || amount > 99) {
        return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
    }
        await interaction.channel.bulkDelete(amount, true).catch(error => {
        console.error(error);
    	interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
	});
    	return interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
       },
};
