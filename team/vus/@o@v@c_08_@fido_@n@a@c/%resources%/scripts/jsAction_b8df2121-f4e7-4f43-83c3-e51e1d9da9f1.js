// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("C_PlansDetails");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);


var plans_skuId4 = 'NOT FOUND';
var plans_externalId4 ='NOT FOUND';
var plans_skuId5 = 'NOT FOUND';
var plans_externalId5 ='NOT FOUND';


var dataPlans = PPCPlans_JSON['dataPlans'];
var infinitePlans = dataPlans['infinitePlans'];
var plans = infinitePlans['plans'];

var plans_skuId4 = plans[0]['planId'];
var plans_externalId4 = plans[0]['externalId'];                
var plans_skuId5 = plans[0]['autoDeploySocs'][0]['skuId'];
var plans_externalId5 = plans[0]['autoDeploySocs'][0]['externalId'];
  
// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_plan_skuId4",plans_skuId4);//sku_plan_MIGM012AA_MIGM012AA
   context.variableManager.setValue("c_plan_externalId4",plans_externalId4);//MIGM012AA
   context.variableManager.setValue("c_plan_skuId5",plans_skuId5);//sku_addon_TAGSRA6V4_TAGSRA6V4
   context.variableManager.setValue("c_plan_externalId5",plans_externalId5);//TAGSRA6V4
      
// Do some computation using the methods
 
// outpuvalue
logger.debug("plans_skuId4="+plans_skuId4);
logger.debug("plans_externalId4="+plans_externalId4);
logger.debug("plans_skuId5="+plans_skuId5);
logger.debug("plans_externalId5="+plans_externalId5);
 
//context.variableManager.setValue("computedVar",computedValue);