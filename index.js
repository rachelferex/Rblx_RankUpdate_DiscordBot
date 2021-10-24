const {Client, Intents} = require('discord.js');
const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_MESSAGES]});
const fs = require('fs');
const { token } = require('./config.json');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for(const file of eventFiles){
    const event = require(`./events/${file}`);
    if(event.once){
        client.once(event.name, ()=> event.execute())
    }else{
        client.on(event.name,(args)=>event.execute(args))
    }
}
client.login(token)