// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("C_PlansDetails");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);

var dataPlans = PPCPlans_JSON['dataPlans'];
var infinitePlans = dataPlans['infinitePlans'];
var plans = infinitePlans['plans'];
var Plans_planId = plans[0]['planId'];
var Plans_externalId = plans[0]['externalId'];
var Plans_atgSkuId = plans[0]['atgSkuId'];
var autoDeploySocs = plans[0]['autoDeploySocs'];
var autoDeploySocs_skuId = autoDeploySocs[0]['skuId'];
var autoDeploySocs_skuId2 = autoDeploySocs[1]['skuId'];
var autoDeploySocs_externalId = autoDeploySocs[0]['externalId'];
var autoDeploySocs_externalId2 = autoDeploySocs[1]['externalId'];
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_GetPlanDetailsJs_planId",Plans_planId);//sku_plan_CCMM4225N_CCMM4225N
   context.variableManager.setValue("C_GetPlanDetailsJs_externalId",Plans_externalId);  //CCMM4225N
   context.variableManager.setValue("C_GetPlanDetailsJs_atgSkuId",Plans_atgSkuId);  //CCMM4225N
   context.variableManager.setValue("C_GetPlanDetailsJs_autoDeploySocs_skuId",autoDeploySocs_skuId);  //sku_addon_sku2780327_sku2780327
   context.variableManager.setValue("C_GetPlanDetailsJs_autoDeploySocs_externalId",autoDeploySocs_externalId);  //TAGSRA6PB
   context.variableManager.setValue("C_GetPlanDetailsJs_autoDeploySocs_externalId2",autoDeploySocs_externalId2);  //TAGSRA6PB   
    context.variableManager.setValue("C_GetPlanDetailsJs_autoDeploySocs_skuId2",autoDeploySocs_skuId2);
   
// Do some computation using the methods
 
// outpuvalue
logger.debug("C_GetPlanDetailsJs_planId="+Plans_planId);
logger.debug("C_GetPlanDetailsJs_externalId="+Plans_externalId);
logger.debug("C_GetPlanDetailsJs_atgSkuId="+Plans_atgSkuId);
logger.debug("C_GetPlanDetailsJs_autoDeploySocs_skuId="+autoDeploySocs_skuId);
logger.debug("C_GetPlanDetailsJs_autoDeploySocs_externalId="+autoDeploySocs_externalId);
logger.debug("C_GetPlanDetailsJs_autoDeploySocs_externalId2="+autoDeploySocs_externalId2);
 
//context.variableManager.setValue("computedVar",computedValue);