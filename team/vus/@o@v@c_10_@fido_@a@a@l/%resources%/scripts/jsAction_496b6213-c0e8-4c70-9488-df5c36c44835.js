// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("C_PlansDetails");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);

var Plans = PPCPlans_JSON['dataPlans']['infinitePlans']['plans']



var skuId = Plans[2]['planId']
var Externalid =  Plans[2]['externalId']

// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_plans_skuId",skuId);
   context.variableManager.setValue("C_plans_ExternalID",Externalid);  
   
// outpuvalue
logger.debug("skuId="+skuId);
logger.debug("Externalid="+Externalid);