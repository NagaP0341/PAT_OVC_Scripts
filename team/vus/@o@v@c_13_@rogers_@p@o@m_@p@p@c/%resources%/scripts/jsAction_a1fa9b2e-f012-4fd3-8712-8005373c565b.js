// Get variable value from VariableManager
var subscriptionResp = context.variableManager.getValue("C_SubscriptionList");
var subscription_JSON = JSON.parse(subscriptionResp);
 
 var subNumber = 'NOT FOUND';
 var subscriptionAlias = 'NOT FOUND';
 var lastname = 'NOT FOUND';
 var firstname = 'NOT FOUND'; 
 var postalCode = 'NOT FOUND';
 var city = 'NOT FOUND';

 
 
var subList = subscription_JSON['subList']; 

for (var i = 0; i<subList.length;++i){    

if(subList[i]['subStatus'] == 'Active'){

    subNumber =  subList[i]['subNumber'];
    subscriptionAlias =  subList[i]['subscriptionAlias'];
    lastname =  subList[i]['lastname'];
    firstname =  subList[i]['firstname'];
    postalCode =  subList[i]['subAddress']['postalCode'];
    city = subList[i]['subAddress']['city'];
    
}

}
// // var autoDeploySocs = plans[0]['autoDeploySocs'];
// var planId3 = plans[0]['autoDeploySocs'][0]['skuId'];
// var externalId3 = plans[0]['autoDeploySocs'][0]['externalId'];

// Inject the computed value in a runtime variable
context.variableManager.setValue("c_subscriptions_SubscriptionAlias",subscriptionAlias);
context.variableManager.setValue("c_subscriptions_subnumber",subNumber);
context.variableManager.setValue("c_overview_Postalcode",postalCode);   
context.variableManager.setValue("c_overview_firstname",firstname);
context.variableManager.setValue("c_overview_lastname",lastname);
context.variableManager.setValue("c_overview_city",city);

              
// Do some computation using the methods

// outpuvalue
logger.debug("subscriptionAlias="+subscriptionAlias);
logger.debug("subNumber="+subNumber);
logger.debug("postalCode="+postalCode);
logger.debug("firstname="+firstname);
logger.debug("lastname="+lastname);
logger.debug("city="+city)

//context.variableManager.setValue("computedVar",computedValue);