// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_HupAddons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

var longDistance = Addons_JSON['longDistance'];
var addons = longDistance['addons'];
var addons_externalId = addons[1]['externalId']; 
var addons_skuId = addons[1]['skuId'];
var existing = Addons_JSON['existing'];
var existing_addons = existing['addons'];
var existing_externalId = existing_addons[0]['externalId'];
 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_addons_externalid2",addons_externalId);//OPTSRA3MX
   context.variableManager.setValue("c_addons_Skuid2",addons_skuId);  //sku_addon_sku2550597_sku2550597
    context.variableManager.setValue("C_existing_externalId",existing_externalId);  //SHAREDBOV
 
        
// Do some computation using the methods
// you defined in the JS Library


logger.debug("addons_externalId="+addons_externalId);
logger.debug("addons_skuId="+addons_skuId);
logger.debug("existing_externalId="+existing_externalId);