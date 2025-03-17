// Get variable value from VariableManager
var PlanTypeDetailsResp = context.variableManager.getValue("C_PlanTypeDetails");
var PlanTypeDetails_JSON = JSON.parse(PlanTypeDetailsResp);

var planTypes = PlanTypeDetails_JSON['planTypes'];

var planTypesID = planTypes[0]['id'];

 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_planTypesID",planTypesID);//FIN_DATA_TALK_TEXT
 
        
// Do some computation using the methods
 
logger.debug("planTypesID="+planTypesID);
 
 
//context.variableManager.setValue("computedVar",computedValue);