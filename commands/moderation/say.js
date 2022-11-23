const { CommandInteraction, Client, ApplicationCommandOptionType } = require('discord.js')

module.exports = {
    name: 'say',
    description: 'Use this command to make the bot say something!',
    category: 'moderation',
    options: [
        {
            name: 'message',
            description: "The message that you want the bot to say",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    cooldown: 10000,
    reqPerm: "NONE",
    args: "<message>",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args, options) => {
        const message = interaction.options.getString('message')

        
        try {
            await interaction.reply({ content: message })
        } catch(error) {
            await interaction.reply({ content: `${client.emotes.error} An error occurred: ERROR \`\`\`${error}\`\`\``, ephemeral: true })
        }
    }
}