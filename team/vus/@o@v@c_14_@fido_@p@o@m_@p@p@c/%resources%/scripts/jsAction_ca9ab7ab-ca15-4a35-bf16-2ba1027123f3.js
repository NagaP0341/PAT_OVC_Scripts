// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_HupAddons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

var voiceMail = Addons_JSON['voiceMail'];
var addons = voiceMail['addons'];
var addons_externalId = addons[0]['externalId']; 
var addons_skuId = addons[0]['skuId'];

var offers = Addons_JSON['offers'];
var addons = offers['addons'];
var addons_externalId2 = addons[0]['externalId']; 
var addons_skuId2 = addons[0]['skuId'];


// var existing = Addons_JSON['existing'];
// var existing_addons = existing['addons'];
// var existing_externalId = existing_addons[0]['externalId'];
// var existing_externalId1 = existing_addons[1]['externalId'];
 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_addons_externalId",addons_externalId);//OPTSRA1AK
   context.variableManager.setValue("C_addons_skuId",addons_skuId);  //sku_addon_sku130572_sku130572
   
    context.variableManager.setValue("C_addons_externalId2",addons_externalId2);
   context.variableManager.setValue("C_addons_skuId2",addons_skuId2);
   
   //Debugger

logger.debug("addons_externalId="+addons_externalId);
logger.debug("addons_skuId="+addons_skuId);

logger.debug("addons_externalId2="+addons_externalId2);
logger.debug("addons_skuId2="+addons_skuId2);
// logger.debug("existing_externalId="+existing_externalId);
// logger.debug("existing_externalId1="+existing_externalId1);