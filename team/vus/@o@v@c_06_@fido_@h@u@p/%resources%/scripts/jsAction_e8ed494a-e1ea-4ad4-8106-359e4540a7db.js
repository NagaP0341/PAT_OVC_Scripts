// Get variable value from VariableManager
var HupCost_DetailsResp = context.variableManager.getValue("C_HupCost_Details");
var HupCost_Details_JSON = JSON.parse(HupCost_DetailsResp);

// var C_HUPCostDetailsjs_deviceConfigurationSelectedMode_skuId= 'NOT FOUND';
var C_HUPCostDetailsjs_financingCostList_skuId= 'NOT FOUND';
var C_HUPCostDetailsjs_financingCostList_planTierCode= 'NOT FOUND';
var C_HUPCostDetailsjs_financingCostList_hupTier= 'NOT FOUND';
var C_HUPCostDetailsjs_financingCostList_programCode= 'NOT FOUND';


// var deviceConfigurationSelectedMode = HupCost_Details_JSON['deviceConfigurationSelectedMode'];
var deviceCostList = HupCost_Details_JSON['deviceCostList'];
var financingCostList = deviceCostList['financingCostList'];

// deviceConfigurationSelectedMode_skuId = deviceConfigurationSelectedMode['skuId'];

financingCostList_skuId = financingCostList[2]['skuId'];
financingCostList_planTierCode = financingCostList[2]['planTierCode'];
financingCostList_programCode =financingCostList[2]['programCode'];
financingCostList_hupTier =financingCostList[2]['hupTier'];
financingCostList_PriceTierID =financingCostList[2]['dpPriceTierIds'][0];

// Inject the computed value in a runtime variable
//   context.variableManager.setValue("C_HUPCostDetailsjs_deviceConfigurationSelectedMode_skuId",deviceConfigurationSelectedMode_skuId);  //sku_device_IP16128BLU_prodIP16
  context.variableManager.setValue("C_HUPCostDetailsjs_financingCostList_skuId",financingCostList_skuId); //sku_devicePrice_upfrontedge_RFIN3HIGH_p233686671_IP16128BLU_HUP_RF3HGH_HUP
  context.variableManager.setValue("C_HUPCostDetailsjs_financingCostList_planTierCode",financingCostList_planTierCode); //RFIN3HIGH
  context.variableManager.setValue("C_HUPCostDetailsjs_financingCostList_programCode",financingCostList_programCode); //RF3HGH_HUP
  context.variableManager.setValue("C_HUPCostDetailsjs_financingCostList_hupTier",financingCostList_hupTier); //RF3HGH_HUP
  context.variableManager.setValue("C_HUPCostDetailsjs_financingCostList_PriceTierID",financingCostList_PriceTierID); //RF3HGH_HUP



// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
// logger.debug("C_HUPCostDetailsjs_deviceConfigurationSelectedMode_skuId="+deviceConfigurationSelectedMode_skuId);
logger.debug("C_HUPCostDetailsjs_financingCostList_skuId="+financingCostList_skuId);
logger.debug("C_HUPCostDetailsjs_financingCostList_planTierCode="+financingCostList_planTierCode);
logger.debug("C_HUPCostDetailsjs_financingCostList_hupTier="+financingCostList_hupTier);
logger.debug("C_HUPCostDetailsjs_financingCostList_programCode="+financingCostList_programCode);
logger.debug("C_HUPCostDetailsjs_financingCostList_PriceTierID="+financingCostList_PriceTierID);
//context.variableManager.setValue("computedVar",computedValue);