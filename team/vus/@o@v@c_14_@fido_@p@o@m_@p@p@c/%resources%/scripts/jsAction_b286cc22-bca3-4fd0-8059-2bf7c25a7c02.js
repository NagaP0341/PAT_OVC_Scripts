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

var currentDeviceInfo = EligibilityDetails_JSON['currentDeviceInfo'];
var deviceSOC = currentDeviceInfo['deviceSOC'];
var deviceKey = currentDeviceInfo['deviceKey'];



  context.variableManager.setValue("C_eligibilityID",eligibilityID);  //475265989
  context.variableManager.setValue("C_atgSkuId",atgSkuId);  //sku2350335
  context.variableManager.setValue("C_planTierCode",planTierCode);  //EASYPAY_MBB
  context.variableManager.setValue("C_mainPlanId",planId);  //sku_plan_sku2350335_sku2350335
  context.variableManager.setValue("C_planExternalId",planExternalId);  //TST20122U
  context.variableManager.setValue("C_IMEICode",equipmentNo); //222222222222228
   context.variableManager.setValue("C_deviceSOC",deviceSOC);  //Non_Fido
   context.variableManager.setValue("C_deviceKey",deviceKey); //device_BYOD





// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("eligibilityID="+eligibilityID);
logger.debug("atgSkuId="+atgSkuId);
logger.debug("planTierCode="+planTierCode);
logger.debug("planId="+planId);
logger.debug("planExternalId="+planExternalId);
logger.debug("IMEICode="+equipmentNo);
logger.debug("deviceSOC="+deviceSOC);
logger.debug("deviceKey="+deviceKey);