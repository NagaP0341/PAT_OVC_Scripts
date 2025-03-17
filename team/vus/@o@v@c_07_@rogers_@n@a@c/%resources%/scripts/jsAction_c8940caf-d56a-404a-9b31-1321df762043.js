// Get variable value from VariableManager
var HupCost_DetailsResp = context.variableManager.getValue("C_HupCost_Details");
var HupCost_Details_JSON = JSON.parse(HupCost_DetailsResp);

var deviceConfigurationSelectedMode_skuId = 'NOT FOUND';
var financingCostList = 'NOT FOUND';
var financingCostList_skuId = 'NOT FOUND';
var financingCostList_planTierCode = 'NOT FOUND';
var financingCostList_programCode = 'NOT FOUND';
var financingCostList_hupTier = 'NOT FOUND';
var financingCostList_skuId = 'NOT FOUND';
var financingCostList_priceTier = 'NOT FOUND';


var deviceConfigurationSelectedMode = HupCost_Details_JSON['deviceConfigurationSelectedMode'];
var deviceCostList = HupCost_Details_JSON['deviceCostList'];

deviceConfigurationSelectedMode_skuId = deviceConfigurationSelectedMode['skuId'];

financingCostList = deviceCostList['financingCostList'];

financingCostList_skuId = financingCostList[2]['skuId'];
financingCostList_planTierCode = financingCostList[2]['planTierCode'];
financingCostList_programCode =financingCostList[2]['programCode'];
financingCostList_hupTier =financingCostList[2]['hupTier'];
financingCostList_priceTier =financingCostList[2]['priceTier'];


// Inject the computed value in a runtime variable
  context.variableManager.setValue("c_skuId",deviceConfigurationSelectedMode_skuId);  //sku_device_S25U256GRY_prodS25U
  context.variableManager.setValue("c_priceId",financingCostList_skuId); //sku_devicePrice_upfrontedge_EDGEFIN2TAB_p505816150_S25U256GRY_NAC_EDGEF2_NAC
  context.variableManager.setValue("c_planTierCode_1",financingCostList_planTierCode); //EDGEFIN2TAB
  context.variableManager.setValue("c_programCode",financingCostList_programCode); //EDGEF2_NAC
  context.variableManager.setValue("C_financingCostList_hupTier",financingCostList_hupTier); //EDGEF2_NAC
  context.variableManager.setValue("c_priceTier_1",financingCostList_priceTier); //UPFRONTEDGE




// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("deviceConfigurationSelectedMode_skuId="+deviceConfigurationSelectedMode_skuId);
logger.debug("financingCostList_skuId="+financingCostList_skuId);
logger.debug("financingCostList_planTierCode="+financingCostList_planTierCode);
logger.debug("financingCostList_hupTier="+financingCostList_hupTier);
logger.debug("financingCostList_programCode="+financingCostList_programCode);
logger.debug("financingCostList_priceTier="+financingCostList_priceTier);

//context.variableManager.setValue("computedVar",computedValue);
