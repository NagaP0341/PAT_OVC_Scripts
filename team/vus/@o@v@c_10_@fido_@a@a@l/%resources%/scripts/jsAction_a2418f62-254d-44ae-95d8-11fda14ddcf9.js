// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_HupAddons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

var offers = Addons_JSON['offers'];
var addons = offers['addons'];
var addons_externalId = addons[0]['externalId']; 
var addons_skuId = addons[0]['skuId'];


 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_CatalogAddons_ValueID",addons_externalId);//TAGSRA6T4
   context.variableManager.setValue("C_CatalogAddons_SkuID1",addons_skuId);  //sku_addon_sku2800401_sku2800401


logger.debug("addons_externalId="+addons_externalId);
logger.debug("addons_skuId="+addons_skuId);
// logger.debug("existing_externalId="+existing_externalId);