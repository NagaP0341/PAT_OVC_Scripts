// Get variable value from VariableManager
var AcntOverviewResp = context.variableManager.getValue("C_AcntOverview");
var AcntOverview_JSON = JSON.parse(AcntOverviewResp);
 
 var accountNumber = 'NOT FOUND';
var accountAlias =  'NOT FOUND';
var customerBillingProfileId =  'NOT FOUND';
var ecId =  'NOT FOUND'; 
var homePhone = 'NOT FOUND'; 
var email =  'NOT FOUND'; 
var contactId = 'NOT FOUND'; 
var firstName = 'NOT FOUND';
var lastName =  'NOT FOUND';
var streetNumber =  'NOT FOUND';
var streetName =  'NOT FOUND';
var streetType =  'NOT FOUND';
var postalCode =  'NOT FOUND';
var city =  'NOT FOUND';
var province =  'NOT FOUND';
 
var accountNumber = AcntOverview_JSON['accountNumber']; 
var accountAlias = AcntOverview_JSON['accountAlias'];
var customerBillingProfileId = AcntOverview_JSON['customerBillingProfileId'];
var ecId = AcntOverview_JSON['ecId'];
var homePhone = AcntOverview_JSON['contactInfoList'][0]['homePhone'];
var email = AcntOverview_JSON['contactInfoList'][0]['email'];
var contactId = AcntOverview_JSON['contactInfoList'][0]['contactId'];
var firstName = AcntOverview_JSON['contactInfoList'][0]['firstName'];
var lastName = AcntOverview_JSON['contactInfoList'][0]['lastName'];

var streetNumber = AcntOverview_JSON['billingAddress']['streetNumber'];
var streetName = AcntOverview_JSON['billingAddress']['streetName'];
var streetType = AcntOverview_JSON['billingAddress']['streetType'];
var postalCode = AcntOverview_JSON['billingAddress']['postalCode'];
var city = AcntOverview_JSON['billingAddress']['city'];
var province = AcntOverview_JSON['billingAddress']['province'];

// Inject the computed value in a runtime variable
context.variableManager.setValue("C_Accountdetailsjs_accountNumber",accountNumber);
context.variableManager.setValue("C_Accountdetailsjs_accountAlias",accountAlias);//qPszTXi10LooQB2HxFJOaA==
context.variableManager.setValue("C_Accountdetailsjs_customerBillingProfileId",customerBillingProfileId);
context.variableManager.setValue("C_Accountdetailsjs_ecId",ecId);//455582042
context.variableManager.setValue("C_Accountdetailsjs_homePhone",homePhone);//1010000061
context.variableManager.setValue("C_Accountdetailsjs_email",email);//FIDO_PAT_221002242@mailinator.com
context.variableManager.setValue("C_Accountdetailsjs_contactId",contactId);
context.variableManager.setValue("C_Accountdetailsjs_firstName",firstName);
context.variableManager.setValue("C_Accountdetailsjs_lastName",lastName);
context.variableManager.setValue("C_Accountdetailsjs_streetNumber",streetNumber);
context.variableManager.setValue("C_Accountdetailsjs_streetName",streetName);
context.variableManager.setValue("C_Accountdetailsjs_streetType",streetType);
context.variableManager.setValue("C_Accountdetailsjs_postalCode",postalCode);
context.variableManager.setValue("C_Accountdetailsjs_city",city);
context.variableManager.setValue("C_Accountdetailsjs_province",province);



// Do some computation using the methods

// outpuvalue
logger.debug("C_Accountdetailsjs_accountNumber=" +accountNumber);
logger.debug("C_Accountdetailsjs_accountAlias="+accountAlias);
logger.debug("C_Accountdetailsjs_customerBillingProfileId="+customerBillingProfileId);
logger.debug("C_Accountdetailsjs_ecId="+ecId);
logger.debug("C_Accountdetailsjs_homePhone="+homePhone);
logger.debug("C_Accountdetailsjs_email="+email);
logger.debug("C_Accountdetailsjs_contactId="+contactId);
logger.debug("C_Accountdetailsjs_firstName="+firstName);
logger.debug("C_Accountdetailsjs_lastName="+lastName);
logger.debug("C_Accountdetailsjs_streetNumber="+streetNumber);
logger.debug("C_Accountdetailsjs_streetName="+streetName);
logger.debug("C_Accountdetailsjs_streetType="+streetType);
logger.debug("C_Accountdetailsjs_postalCode="+postalCode);
logger.debug("C_Accountdetailsjs_city="+city);
logger.debug("C_Accountdetailsjs_province="+province);