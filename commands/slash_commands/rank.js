const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('계급')
	.setDescription('계급을 진급, 강등을 할 수 있습니다.')
	.addSubcommand(subcommand=>
		subcommand.setName("진급").setDescription("promoted").addStringOption(option => option.setName("target").setDescription("플레이어 이름").setRequired(true))
	)
	.addSubcommand(subcommand=>
		subcommand.setName("강등").setDescription("demoted").addStringOption(option => option.setName("target").setDescription("플레이어 이름").setRequired(true))
	)
			

module.exports = {data}
