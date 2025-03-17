// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("c_plans_ppc");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);
 
var planId1 = 'NOT FOUND';
var externalId1 = 'NOT FOUND';
var planId3 = 'NOT FOUND';
var externalId3 = 'NOT FOUND';  
 
var dataPlans = PPCPlans_JSON['dataPlans'];
var infinitePlans = dataPlans['infinitePlans'];
var plans = infinitePlans['plans'];
var planId1 = plans[0]['planId'];
var externalId1 = plans[0]['externalId']
// var autoDeploySocs = plans[0]['autoDeploySocs'];
var planId3 = plans[0]['autoDeploySocs'][0]['skuId'];
var externalId3 = plans[0]['autoDeploySocs'][0]['externalId'];

// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_plans_Skuid",planId1);
   context.variableManager.setValue("c_plans_externalid",externalId1);  
   context.variableManager.setValue("c_plans_skuid3",planId3);  
   context.variableManager.setValue("c_plans_externalID3",externalId3);  
        
// Do some computation using the methods

// outpuvalue
logger.debug("planId1="+planId1);
logger.debug("externalId1="+externalId1);
logger.debug("planId3="+planId3);
logger.debug("externalId3="+externalId3);

//context.variableManager.setValue("computedVar",computedValue);