const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Gives all the command user(s) can execute.',
  
    callback: async (client, interaction) => {

        try {
            const embed = new EmbedBuilder()
        .setTitle('**Commands**')
        .setDescription('All moderation commands are only usable by certain users.')
        .setColor('#bf2a39')
        .addFields(
            { name: '‎ ', value: '**/level** \n Shows the current rank and level of the user selected. \n \n **/balance** \n Shows the amount of money currently in the selected users account. \n \n **/daily** \n Claims your daily reward! \n \n **/ping** \n *Developer tool:* shows the ping of the bot. \n \n **/timeout** \n Times out the user selected for a set amount of time, with a reason.. \n \n **/kick** \n Kicks a selected user for a reason defined. \n \n **/ban** \n Bans the user defined indefenitley for a reason.' },
        )

        interaction.reply({ embeds: [embed] })
        } catch (error) {
            console.log(`Error: ${error}`)
        }
        
    },
  };