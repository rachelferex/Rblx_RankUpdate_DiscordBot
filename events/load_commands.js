const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientid, guildid } = require('../config.json');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands/slash_commands').filter(file => file.endsWith('.js'));

const clientId = clientid;
const guildId = guildid;

for (const file of commandFiles) {
	const command = require(`../commands/slash_commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('슬래시 커맨드를 다시 불러오고 있습니다.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('성공적으로 슬래시 커맨드를 불러왔습니다.');
	} catch (error) {
		console.error(error);
	}
})();
