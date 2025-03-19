// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_HupAddons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

var offers = Addons_JSON['longDistance'];
var addons = offers['addons'];
var addons_externalId = addons[0]['externalId']; 
 var addons_skuId = addons[0]['skuId'];
 
 var voiceMail = Addons_JSON['longDistance'];
var voiceMail_addons = voiceMail['addons'];
var voiceMail_addons_externalId = voiceMail_addons[0]['externalId']; 
 var voiceMail_addons_skuId = voiceMail_addons[0]['skuId'];


//var existing = Addons_JSON['existing'];
//var existing_addons = existing['addons'];
//var existing_externalId = existing_addons[0]['externalId'];
// var existing_externalId1 = existing_addons[1]['externalId'];
 
 
// Inject the computed value in a runtime variable
//    context.variableManager.setValue("C_addons_externalId",addons_externalId);//NOPROTECTION
//    context.variableManager.setValue("C_addons_skuId",addons_skuId);  //NOPROTECTION

    context.variableManager.setValue("C_addons_externalId",voiceMail_addons_externalId);  //FULLDETF
context.variableManager.setValue("C_addons_skuId",addons_skuId);  //OPTSRA1AK

    context.variableManager.setValue("C_voiceMail_addons_externalId",voiceMail_addons);  //FULLDETF
context.variableManager.setValue("C_voicemail_addons_skuId",voiceMail_addons_skuId);  //OPTSRA1AK
 
 
        
// Do some computation using the methods
// you defined in the JS Library


// logger.debug("addons_externalId="+addons_externalId);
// logger.debug("addons_skuId="+addons_skuId);
//logger.debug("existing_externalId="+existing_externalId);
// logger.debug("existing_externalId1="+existing_externalId1);