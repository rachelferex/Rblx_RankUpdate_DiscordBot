const noblox = require('noblox.js');
const groupid = "그룹 아이디";
noblox.setCookie("쿠키 입력');



exports.PromotedRank = async function(username) {
    const userid = await noblox.getIdFromUsername(username).catch(function(error){return false;});
    const result = await noblox.changeRank(groupid,userid,1).catch(function(error){return false;});
    return {newrole:result.newRole.name,oldrole:result.oldRole.name}
    
}

exports.DemotedRank = async function(username) {
    const userid = await noblox.getIdFromUsername(username).catch(function(error){return false;});
    const result = await noblox.changeRank(groupid,userid,-1).catch(function(error){return false;});
    return {newrole:result.newRole.name,oldrole:result.oldRole.name}

        

}
