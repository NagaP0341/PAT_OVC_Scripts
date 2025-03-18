// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_Addons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

var addons_externalId = 'NOT FOUND';
var addons_skuId = 'NOT FOUND';
var addons_skuId2 = 'NOT FOUND';
var addons_externalId2 ='NOT FOUND';
var addons_skuId3 = 'NOT FOUND';
var addons_externalId3 ='NOT FOUND';


// var offers = Addons_JSON['offers'];
// var addons = offers['addons'];
// var addons_externalId = addons[0]['externalId']; 
// var addons_skuId = addons[0]['skuId'];
// 
// var deviceProtection = Addons_JSON['deviceProtection'];
// var addons_skuId3 = deviceProtection['addons'][1]['skuId'];
// var addons_externalId3 = deviceProtection['addons'][1]['externalId'];

var voiceMail = Addons_JSON['voiceMail'];
var addons_skuId2 = voiceMail['addons'][1]['skuId'];
var addons_externalId2 = voiceMail['addons'][1]['externalId'];

// var existing = Addons_JSON['existing'];
// var existing_addons = existing['addons'];
// var existing_externalId = existing_addons[0]['externalId'];
 
 
// Inject the computed value in a runtime variable
//    context.variableManager.setValue("c_jsaddons_externalId",addons_externalId);//TAGSRA7PR
//    context.variableManager.setValue("c_jsaddons_skuId",addons_skuId);  //sku_addon_TAGSRA7PR_TAGSRA7PR
   context.variableManager.setValue("c_jsaddons_VoiceskuId2",addons_skuId2);  //sku_addon_sku130572_sku130572
   context.variableManager.setValue("c_jsaddons_VoicesexternalId2",addons_externalId2);  //OPTSRA1AK
//    context.variableManager.setValue("c_jsaddons_dpskuId3",addons_skuId3);  //sku_addon_sku1950443_sku1950443
//    context.variableManager.setValue("c_jsaddons_dpexternalId3",addons_externalId3);  //ADFSRA222
                
// Do some computation using the methods
// you defined in the JS Library


logger.debug("addons_externalId="+addons_externalId);
logger.debug("addons_skuId="+addons_skuId);
logger.debug("addons_skuId2="+addons_skuId2);
logger.debug("addons_externalId2="+addons_externalId2);
logger.debug("addons_skuId3="+addons_skuId3);
logger.debug("addons_externalId3="+addons_externalId3);
// logger.debug("existing_externalId="+existing_externalId);