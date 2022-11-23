

const { EmbedBuilder, ApplicationCommandOptionType  } = require('discord.js');

module.exports = {
	category: 'fun',
	name: 'catsay',
	description: 'Make the cat say something interesting',
	options: [
		{
			name: 'text',
			description: 'What you would like the cat to say',
      type: ApplicationCommandOptionType.String
		},
	],
	async run(client, interaction, options) {

        const msg = options[0].value
        if (!msg) {
          return interaction.reply("What you want the cat to say?");
        }
        interaction.reply({
          files: [
            {
              attachment: `https://cataas.com/cat/cute/says/${msg}`,
              name: "catsay.png",
            },
          ],
        });
      },
};
