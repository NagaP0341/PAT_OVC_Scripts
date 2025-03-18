// Get variable value from VariableManager
var hupcostdetailsResp = context.variableManager.getValue("C_HupCost_Details");
var hupcostdetails_JSON = JSON.parse(hupcostdetailsResp);



var financingCostList_skuId = 'NOT FOUND';
var financingCostList_plantiercode = 'NOT FOUND';
var financingCostList_huptiercode = 'NOT FOUND';
var financingCostList_Pricetier = 'NOT FOUND';
var financingCostList_Programcode = 'NOT FOUND';
var deviceConfigurationSelectedMode = 'NOT FOUND';

var deviceCostList = hupcostdetails_JSON['deviceCostList'];
var deviceConfigurationSelectedMode = hupcostdetails_JSON['deviceConfigurationSelectedMode'];
var financingCostList = deviceCostList['financingCostList'];

financingCostList_skuId = financingCostList[0]['skuId'];
financingCostList_plantiercode = financingCostList[0]['planTierCode'];
financingCostList_huptiercode = financingCostList[0]['hupTier'];
financingCostList_Pricetier = financingCostList[0]['priceTier'];
financingCostList_Programcode = financingCostList[0]['programCode'];
deviceConfigurationSelectedMode = deviceConfigurationSelectedMode['skuId'];

// Inject the computed value in a runtime variable
context.variableManager.setValue("C_financingCostList_skuId",financingCostList_skuId);//sku_devicePrice_regular_FID_FIN2_p944750031_IP16128PNK_NAC_FFIN2_NAC
context.variableManager.setValue("C_financingCostList_plantiercode",financingCostList_plantiercode);//FID_FIN2
context.variableManager.setValue("C_financingCostList_huptiercode",financingCostList_huptiercode);//FFIN2_NAC
context.variableManager.setValue("C_financingCostList_Pricetier",financingCostList_Pricetier);//FINANCING
context.variableManager.setValue("C_Financing_Programcode",financingCostList_Programcode);//FFIN2_NAC
context.variableManager.setValue("C_DeviceSkuId",deviceConfigurationSelectedMode);//sku_device_IP16128PNK_prodIP16
// Do some computation using the methods
 
// outpuvalue
logger.debug("financingCostList_skuId="+financingCostList_skuId);
logger.debug("financingCostList_plantiercode="+financingCostList_plantiercode);
logger.debug("financingCostList_huptiercode="+financingCostList_huptiercode);
logger.debug("financingCostList_Pricetier="+financingCostList_Pricetier);
logger.debug("financingCostList_Programcode="+financingCostList_Programcode);
logger.debug("deviceConfigurationSelectedMode="+deviceConfigurationSelectedMode);