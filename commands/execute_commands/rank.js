const {CommandInteraction,MessageEmbed} = require('discord.js')
const {DiscordId_GetUserData,DiscordId_GetUserDataExists} = require('../../database_control/database')
const {PromotedRank, DemotedRank} = require("../../noblox_control/noblox")
const logchannel = "로그채널 아이디 작성";
module.exports = {
    name:"계급",
    permissions:['권한 작성','권한 작성','같은 방법으로 여러개 추가 가능'],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const embed = new MessageEmbed()
        const option = interaction.options.getString("target");
        if(interaction.options.getSubcommand() == "진급"){
            const result = await PromotedRank(option)
            
            if(result != false){
                embed.setTitle("계급 진급알림").setDescription(`<@${interaction.user.id}>님이 **${option}**님을 1계급 진급시켰습니다`).addField("진급 전 계급",result.oldrole).addField("진급 후 계급",result.newrole).setColor("#42f575")
            }else{
                embed.setTitle("오류").setDescription(`**${option}** 해당 플레이어는 존재하지 않습니다.`).setColor("#f54242")
            }
            interaction.guild.channels.cache.get(logchannel).send({embeds:[embed]})
            return await interaction.reply({embeds:[embed]})
        }else if(interaction.options.getSubcommand() == "강등"){
             const result = await DemotedRank(option)
                if(result != false){
                    embed.setTitle("계급 강등알림").setDescription(`<@${interaction.user.id}>님이 **${option}**님을 1계급 강등시켰습니다`).addField("강등 전 계급",result.oldrole).addField("강등 후 계급",result.newrole).setColor("#42f575")
                }else{
                    embed.setTitle("오류").setDescription(`**${option}** 해당 플레이어는 존재하지 않습니다.`).setColor("#f54242")
                }
                interaction.guild.channels.cache.get(logchannel).send({embeds:[embed]})
                return await interaction.reply({embeds:[embed]})
            
        }
        
    }
}
