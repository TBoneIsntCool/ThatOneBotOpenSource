require('dotenv').config();
const { Client, IntentsBitField, Activity } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');

statusVar = 'No Esc-Ape'

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,
  ],
});


(async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("📅 Connected to DB.")
    
        eventHandler(client);

        client.login(process.env.TOKEN);
    } catch (error) {
        console.log(`❌ Error: ${error}`)
    }
})();

client.on('ready', (c) => {
    console.log(`✅ ${c.user.username} is online.`)

    client.user.setActivity({
        name: statusVar,
    }) 
    console.log(`☑️  Status saved as "${statusVar}".`)   
})