// Get variable value from VariableManager
var subscriptionResp = context.variableManager.getValue("C_SubscriptionList");
var subscription_JSON = JSON.parse(subscriptionResp);
 
 var subNumber = 'NOT FOUND';
 var subscriptionAlias = 'NOT FOUND';
 var lastname = 'NOT FOUND';
 var firstname = 'NOT FOUND'; 
 var postalCode = 'NOT FOUND';
 
 
var subList = subscription_JSON['subList']; 

for (var i = 0; i<subList.length;++i){    

if(subList[i]['subStatus'] == 'Active'){

    subNumber =  subList[i]['subNumber'];
    subscriptionAlias =  subList[i]['subscriptionAlias'];
    lastname =  subList[i]['lastname'];
    firstname =  subList[i]['firstname'];
    postalCode =  subList[i]['subAddress']['postalCode'];
 }

}
// // var autoDeploySocs = plans[0]['autoDeploySocs'];
// var planId3 = plans[0]['autoDeploySocs'][0]['skuId'];
// var externalId3 = plans[0]['autoDeploySocs'][0]['externalId'];

// Inject the computed value in a runtime variable
context.variableManager.setValue("C_v1Subscriptions_SubscriptionAlias",subscriptionAlias);//6-y0fhIeSVnRFjgIZWU3Og==
context.variableManager.setValue("C_v1Subscriptions_SubNumber",subNumber);//4379812495
context.variableManager.setValue("C_v2Overview_PostalCode",postalCode);// L6T0C1 
context.variableManager.setValue("C_v2Overview_FirstName",firstname);//FIDO
context.variableManager.setValue("C_v2Overview_LastName",lastname);//EAS1
              
// Do some computation using the methods

// outpuvalue
logger.debug("subscriptionAlias="+subscriptionAlias);
logger.debug("subNumber="+subNumber);
logger.debug("postalCode="+postalCode);
logger.debug("firstname="+firstname);
logger.debug("lastname="+lastname);

//context.variableManager.setValue("computedVar",computedValue);