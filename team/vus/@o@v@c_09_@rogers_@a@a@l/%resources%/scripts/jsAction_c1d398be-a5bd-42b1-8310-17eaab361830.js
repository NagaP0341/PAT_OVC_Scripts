// Get variable value from VariableManager
var PPCPlansResp = context.variableManager.getValue("C_PlansDetails");
var PPCPlans_JSON = JSON.parse(PPCPlansResp);

var dataPlans = PPCPlans_JSON['dataPlans'];
var dataPlusPlans = dataPlans['dataPlusPlans'];
var plans = dataPlusPlans['plans'];
var Plans_planId = plans[1]['planId'];
var Plans_externalId = plans[1]['externalId'];
var Plans_atgSkuId = plans[1]['atgSkuId'];
var autoDeploySocs = plans[1]['autoDeploySocs'];
var autoDeploySocs_skuId = autoDeploySocs[0]['skuId'];
var autoDeploySocs_externalId = autoDeploySocs[0]['externalId'];
var autoDeploySocs_skuId1 = autoDeploySocs[1]['skuId'];
var autoDeploySocs_externalId1 = autoDeploySocs[1]['externalId'];
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_CatalogPlans_PlanID",Plans_planId);//sku_plan_LTPM422HG_LTPM422HG
   context.variableManager.setValue("C_CatalogPlans_ExternalID",Plans_externalId);  //LTPM422HG
   context.variableManager.setValue("C_CatalogPlans_SkuID2",autoDeploySocs_skuId);  //sku_addon_sku2780327_sku2780327
   context.variableManager.setValue("C_CatalogPlans_ExternalID2",autoDeploySocs_externalId);  //TAGSRA6PB
   context.variableManager.setValue("C_CatalogPlans_SkuID3",autoDeploySocs_skuId1);  //sku_addon_sku2780327_sku2780327
   context.variableManager.setValue("C_CatalogPlans_ExternalID3",autoDeploySocs_externalId1);  //TAGSRA6PB
   
// Do some computation using the methods
 
// outpuvalue
logger.debug("Plans_planId="+Plans_planId);
logger.debug("Plans_externalId="+Plans_externalId);
// logger.debug("Plans_atgSkuId="+Plans_atgSkuId);
logger.debug("autoDeploySocs_skuId="+autoDeploySocs_skuId);
logger.debug("autoDeploySocs_externalId="+autoDeploySocs_externalId);
logger.debug("autoDeploySocs_skuId1="+autoDeploySocs_skuId1);
logger.debug("autoDeploySocs_externalId1="+autoDeploySocs_externalId1);
 
//context.variableManager.setValue("computedVar",computedValue);