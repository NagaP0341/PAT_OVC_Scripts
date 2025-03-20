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



  context.variableManager.setValue("C_EligibilityDetailsjs_eligibilityID",eligibilityID);  //474694742
  context.variableManager.setValue("C_EligibilityDetailsjs_atgSkuId",atgSkuId); //sku1550529
  context.variableManager.setValue("C_EligibilityDetailsjs_planTierCode",planTierCode); //TALKTEXTFIN
  context.variableManager.setValue("C_EligibilityDetailsjs_mainPlanId",planId); //sku_plan_sku2060326_sku2060326
  context.variableManager.setValue("C_EligibilityDetailsjs_planExternalId",planExternalId); //TST222224
  context.variableManager.setValue("C_EligibilityDetailsjs_IMEICode",equipmentNo);//222222222222228





// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("C_EligibilityDetailsjs_eligibilityID="+eligibilityID);
logger.debug("C_EligibilityDetailsjs_atgSkuId="+atgSkuId);
logger.debug("C_EligibilityDetailsjs_planTierCode="+planTierCode);
logger.debug("C_EligibilityDetailsjs_planId="+planId);
logger.debug("C_EligibilityDetailsjs_planExternalId="+planExternalId);
logger.debug("C_EligibilityDetailsjs_IMEICode="+equipmentNo);