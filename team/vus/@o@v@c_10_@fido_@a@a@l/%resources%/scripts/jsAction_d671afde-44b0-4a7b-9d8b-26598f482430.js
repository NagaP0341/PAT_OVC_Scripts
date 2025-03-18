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
context.variableManager.setValue("C_JS_subscriptionAlias",subscriptionAlias);
context.variableManager.setValue("C_JS_subNumber",subNumber);
context.variableManager.setValue("C_JS_postalCode",postalCode);   
context.variableManager.setValue("C_JS_firstName",firstname);
context.variableManager.setValue("C_JS_lastName",lastname);
              
// Do some computation using the methods

// outpuvalue
logger.debug("subscriptionAlias="+subscriptionAlias);
logger.debug("subNumber="+subNumber);
logger.debug("postalCode="+postalCode);
logger.debug("firstname="+firstname);
logger.debug("lastname="+lastname);

//context.variableManager.setValue("computedVar",computedValue);