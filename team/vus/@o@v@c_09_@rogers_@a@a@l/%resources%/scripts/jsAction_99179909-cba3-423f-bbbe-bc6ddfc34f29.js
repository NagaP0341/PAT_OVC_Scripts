// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_HupAddons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

var offers = Addons_JSON['offers'];
var addons = offers['addons'];
var addons_externalId = addons[0]['externalId']; 
var addons_skuId = addons[0]['skuId'];
// var existing = Addons_JSON['existing'];
// var existing_addons = existing['addons'];
// var existing_externalId = existing_addons[0]['externalId'];
 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_CatalogAddons_ValueID",addons_externalId);//UPSRBYY06
   context.variableManager.setValue("C_CatalogAddons_SkuID1",addons_skuId);  //sku_addon_sku1720651_sku1720651
//     context.variableManager.setValue("C_existing_externalId",existing_externalId);  //SHAREDBOV
 
        
// Do some computation using the methods
// you defined in the JS Library


logger.debug("addons_externalId="+addons_externalId);
logger.debug("addons_skuId="+addons_skuId);
// logger.debug("existing_externalId="+existing_externalId);