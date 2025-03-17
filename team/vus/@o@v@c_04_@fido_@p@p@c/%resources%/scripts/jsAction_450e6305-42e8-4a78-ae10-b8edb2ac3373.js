// Get variable value from VariableManager
var ContextDetailsResp = context.variableManager.getValue("C_ContextDetails");
var ContextDetails_JSON = JSON.parse(ContextDetailsResp);

var content = ContextDetails_JSON['content'];
var contextId = content['contextId'];

 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("c_contextId",contextId);//9050f90e-6ac6-49b5-b8f9-72365ec9c895
 
        
// Do some computation using the methods
 
logger.debug("contextId="+contextId);
 
 
//context.variableManager.setValue("computedVar",computedValue);