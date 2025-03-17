// Get variable value from VariableManager
var AddonsResp = context.variableManager.getValue("c_addons");
var Addons_JSON = JSON.parse(AddonsResp);
 
var skuId = 'NOT FOUND';
var externalId = 'NOT FOUND';
var externalId1 = 'NOT FOUND';
  
    
var longDistance = Addons_JSON['longDistance'];
var addons = longDistance['addons'];
var externalId = addons[0]['externalId']; 
var skuId = addons[0]['skuId'];

var existing = Addons_JSON['existing'];
var addons = existing['addons'];
var externalId1 = addons[0]['externalId']; 

// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_addons_Skuid2",skuId);
   context.variableManager.setValue("c_addons_externalid2",externalId);  
   context.variableManager.setValue("c_addons_externalid1",externalId1);  
        
// Do some computation using the methods

// outpuvalue
logger.debug("skuId="+skuId);
logger.debug("externalId="+externalId);
logger.debug("externalId1="+externalId1);

//context.variableManager.setValue("computedVar",computedValue);
