// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("C_PlansDetails");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);

var dataPlans = PPCPlans_JSON['dataPlans'];
var infinitePlans = dataPlans['infinitePlans'];
var plans = infinitePlans['plans'];
var Plans_planId = plans[0]['planId'];
var Plans_externalId = plans[0]['externalId'];
// var Plans_atgSkuId = plans[0]['atgSkuId'];
var autoDeploySocs = plans[0]['autoDeploySocs'];
var autoDeploySocs_skuId = autoDeploySocs[0]['skuId'];
var autoDeploySocs_externalId = autoDeploySocs[0]['externalId'];
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_Plans_planId",Plans_planId);//sku_plan_LTOM012T4_LTOM012T4
   context.variableManager.setValue("c_Plans_externalId",Plans_externalId);  //LTOM012T4
//    context.variableManager.setValue("c_Plans_atgSkuId",Plans_atgSkuId);  //LTOM012T4
   context.variableManager.setValue("c_autoDeploySocs_skuId",autoDeploySocs_skuId);  //sku_addon_sku2780326_sku2780326
   context.variableManager.setValue("c_autoDeploySocs_externalId",autoDeploySocs_externalId);  //TAGSRA6PA
   
// Do some computation using the methods
 
// outpuvalue
logger.debug("Plans_planId="+Plans_planId);
logger.debug("Plans_externalId="+Plans_externalId);
// logger.debug("Plans_atgSkuId="+Plans_atgSkuId);
logger.debug("autoDeploySocs_skuId="+autoDeploySocs_skuId);
logger.debug("autoDeploySocs_externalId="+autoDeploySocs_externalId);
 
//context.variableManager.setValue("computedVar",computedValue);