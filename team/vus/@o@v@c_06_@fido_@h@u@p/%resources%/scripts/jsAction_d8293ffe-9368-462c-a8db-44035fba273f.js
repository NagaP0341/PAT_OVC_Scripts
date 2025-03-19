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
context.variableManager.setValue("C_v1Subscriptions_SubscriptionAlias",subscriptionAlias);
context.variableManager.setValue("C_v1Subscriptions_SubNumber",subNumber);
context.variableManager.setValue("C_v2Overview_PostalCode",postalCode);   
context.variableManager.setValue("C_v2Overview_FirstName",firstname);
context.variableManager.setValue("C_v2Overview_LastName",lastname);
              
// Do some computation using the methods

// outpuvalue
logger.debug("C_v1Subscriptions_subscriptionAlias="+subscriptionAlias);
logger.debug("C_v1Subscriptions_subNumber="+subNumber);
logger.debug("C_v1Subscriptions_postalCode="+postalCode);
logger.debug("C_v1Subscriptions_firstname="+firstname);
logger.debug("C_v1Subscriptions_lastname="+lastname);

//context.variableManager.setValue("computedVar",computedValue);