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
var financingCostList_planTier = 'NOT FOUND';


var deviceConfigurationSelectedMode = HupCost_Details_JSON['deviceConfigurationSelectedMode'];
var deviceCostList = HupCost_Details_JSON['deviceCostList'];

deviceConfigurationSelectedMode_skuId = deviceConfigurationSelectedMode['skuId'];

financingCostList = deviceCostList['financingCostList'];

financingCostList_skuId = financingCostList[1]['skuId'];
financingCostList_planTierCode = financingCostList[1]['planTierCode'];
financingCostList_programCode =financingCostList[1]['programCode'];
financingCostList_hupTier =financingCostList[1]['hupTier'];
financingCostList_priceTier =financingCostList[1]['priceTier'];
financingCostList_planTier =financingCostList[1]['planTierCode'];


// Inject the computed value in a runtime variable
  context.variableManager.setValue("C_Device_SkuID",deviceConfigurationSelectedMode_skuId);  //sku_device_IP16128PNK_prodIP16
  context.variableManager.setValue("C_ProductCost_PriceID",financingCostList_skuId); //sku_devicePrice_regular_FFIN3L_p109031934_IP16128PNK_AAL_FFIN3L_AAL
  context.variableManager.setValue("C_Content_Tierkey",financingCostList_planTierCode); //FFIN3L
  context.variableManager.setValue("c_programCode",financingCostList_programCode); //FFIN3L_NAC
  context.variableManager.setValue("C_Content_TierKey2",financingCostList_hupTier); //FFIN3LNAC
  context.variableManager.setValue("c_device_pricetier2",financingCostList_priceTier); //FINANCING
  context.variableManager.setValue("c_device_plantier",financingCostList_planTier); //FFIN3L




// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("deviceConfigurationSelectedMode_skuId="+deviceConfigurationSelectedMode_skuId);
logger.debug("financingCostList_skuId="+financingCostList_skuId);
logger.debug("financingCostList_planTierCode="+financingCostList_planTierCode);
logger.debug("financingCostList_hupTier="+financingCostList_hupTier);
logger.debug("financingCostList_programCode="+financingCostList_programCode);
logger.debug("financingCostList_priceTier="+financingCostList_priceTier);
logger.debug("financingCostList_planTier="+financingCostList_planTier);

//context.variableManager.setValue("computedVar",computedValue);