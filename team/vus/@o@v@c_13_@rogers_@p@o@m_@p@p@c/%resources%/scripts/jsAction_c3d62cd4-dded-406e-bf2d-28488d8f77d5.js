// Get variable value from VariableManager
var GetPromoDetailssResp = context.variableManager.getValue("C_GetPromoDetails");
var GetPromoDetails_JSON = JSON.parse(GetPromoDetailssResp);

var promoDetails = GetPromoDetails_JSON['promoDetails'];
var externalId = promoDetails['externalId'];
var promoId = promoDetails['promoId'];
var promoName = promoDetails['promoName'];
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_qualification_externalid",externalId);//RP002PA2R
   context.variableManager.setValue("c_qualification_promoid",promoId);  //51450367-90dd-4a34-809d-d8adadf6a082
   context.variableManager.setValue("c_qualification_promoname",promoName);  //(PATTESTB) PAT_23PI2_SetB_05
   
// Do some computation using the methods
 
// outpuvalue
logger.debug("externalId="+externalId);
logger.debug("promoId="+promoId);
logger.debug("promoName="+promoName);
 
//context.variableManager.setValue("computedVar",computedValue);