// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("C_HupAddons_Details");
var Addons_JSON = JSON.parse(AddonsResp);

// var longDistance = Addons_JSON['longDistance'];
// var addons = longDistance['addons'];
// var addons_externalId = addons[0]['externalId']; 
// var addons_skuId = addons[0]['skuId'];


var existing = Addons_JSON['existing'];
var existing_addons = existing['addons'];
var existing_externalId = existing_addons[0]['externalId'];
// var existing_externalId1 = existing_addons[1]['externalId'];
 
 
// Inject the computed value in a runtime variable
//    context.variableManager.setValue("C_addons_externalId",addons_externalId);//NOPROTECTION
//    context.variableManager.setValue("C_addons_skuId",addons_skuId);  //NOPROTECTION

    context.variableManager.setValue("C_existing_externalId",existing_externalId);  //FULLDETF
//     context.variableManager.setValue("C_existing_externalId1",existing_externalId1);  //OPTSRA1AK
 
        
// Do some computation using the methods
// you defined in the JS Library


// logger.debug("addons_externalId="+addons_externalId);
// logger.debug("addons_skuId="+addons_skuId);
logger.debug("existing_externalId="+existing_externalId);
// logger.debug("existing_externalId1="+existing_externalId1);
