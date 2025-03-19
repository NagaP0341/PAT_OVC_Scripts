// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("C_PlansDetails");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);

var Plans = PPCPlans_JSON['dataPlans']['infinitePlans']['plans']
var Plans2 = PPCPlans_JSON['dataPlans']['infinitePlans']['plans'][0]['autoDeploySocs']



var skuId = Plans[2]['planId']
var Externalid =  Plans[2]['externalId']
var skuId2 = Plans2[0]['skuId']
var Externalid2 =  Plans2[0]['externalId']



// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_plans_skuId",skuId);
   context.variableManager.setValue("C_plans_ExternalID",Externalid);  
    context.variableManager.setValue("C_plans_skuId2",skuId2);//sku_addon_TAGSRA6V4_TAGSRA6V4
   context.variableManager.setValue("C_plans_ExternalID2",Externalid2);//TAGSRA6V4
   
// outpuvalue
logger.debug("skuId="+skuId);
logger.debug("Externalid="+Externalid);
logger.debug("skuId2="+skuId2);
logger.debug("Externalid2="+Externalid2);