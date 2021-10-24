const {CommandInteraction} = require('discord.js')
const fs = require('fs')
module.exports = {
    name:"interactionCreate",
    once:false,
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction){
        if(interaction.isCommand){
            for(const file of fs.readdirSync('./commands/execute_commands')){
                const cmds = require(`../commands/execute_commands/${file}`)
                if(cmds.name == interaction.commandName){
                    if(cmds.permissions != false){
                        for(const permission of cmds.permissions){
                            if(interaction.member.roles.cache.has(permission)){
                                return cmds.execute(interaction);
                            }
                        }
                        interaction.reply({content:"당신은 이 명령어를 사용할 권한이 없습니다",ephemeral:true})
                    }
                    
                }
            }
        }
    }
}