var EligibilityDetailsResp = context.variableManager.getValue("C_EligibilityDetails");
var EligibilityDetails_JSON = JSON.parse(EligibilityDetailsResp);

var eligibilityID = 'NOT FOUND';
var atgSkuId = 'NOT FOUND';
var planTierCode = 'NOT FOUND';
var planId = 'NOT FOUND';
var planExternalId = 'NOT FOUND';
var equipmentNo = 'NOT FOUND';





var hupEligibilityInfo = EligibilityDetails_JSON['hupEligibilityInfo'];
var currentPlanInfo = EligibilityDetails_JSON['currentPlanInfo'];

eligibilityID = hupEligibilityInfo['eligibilityID'];

atgSkuId = currentPlanInfo['atgSkuId'];
planTierCode = currentPlanInfo['planTierCode'];
planId = currentPlanInfo['planId'];
planExternalId = currentPlanInfo['planExternalId'];
equipmentNo = currentPlanInfo['equipmentNo'];



  context.variableManager.setValue("C_eligibilityID",eligibilityID);  //464922346
  context.variableManager.setValue("C_atgSkuId",atgSkuId); //sku1550529
  context.variableManager.setValue("C_planTierCode",planTierCode); //TALKTEXTFIN
  context.variableManager.setValue("c_devicebalence_planid",planId); //sku_plan_sku1550529_sku1550529
  context.variableManager.setValue("c_summary_soccode",planExternalId); //TSTM4223Z
  context.variableManager.setValue("c_devicebalence_Imei",equipmentNo);//111111111111119





// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("eligibilityID="+eligibilityID);
logger.debug("atgSkuId="+atgSkuId);
logger.debug("planTierCode="+planTierCode);
logger.debug("planId="+planId);
logger.debug("planExternalId="+planExternalId);
logger.debug("IMEICode="+equipmentNo);