const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'Create a poll!',
    category: 'moderation',
    options: [
        {
            name: 'question',
            description: "The question for the poll",
            required: true,
            type: ApplicationCommandOptionType.String
            
        }
    ],
    cooldown: 20000,
    reqPerm: "NONE",
    args: "<question>",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} options[0].value
     */
    run: async (client, interaction, args, options) => {
        const question = interaction.options.getString('question')

        let embedPoll = new EmbedBuilder()
        .setTitle(':bar_chart: Poll Time!')
        .setDescription(`► Question: ${question}`)
        .setColor('0x2F3136')
        .setTimestamp()

        let interactionEmbed = await interaction.reply({ embeds: [embedPoll] , fetchReply: true });
        
        await interactionEmbed.react('🔼')
        await interactionEmbed.react('🔽')
    }
}