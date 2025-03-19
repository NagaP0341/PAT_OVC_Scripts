// Get variable value from VariableManager
var CartDetailsResp = context.variableManager.getValue("C_CartDetails");
var CartDetails_JSON = JSON.parse(CartDetailsResp);

var Cart_id = CartDetails_JSON['id'];
// var autoDeploySocs = CartDetails_JSON['lineItems'][0]['autoDeploySocs'];
// CartSkuId = autoDeploySocs[1]['skuId'];
 
 
// Inject the computed value in a runtime variable
   context.variableManager.setValue("C_CartDetailsJs_CartID",Cart_id);//0d372038-0ce5-42b4-9362-50b339ad8d22
//    context.variableManager.setValue("C_CartDetailsJs_CartSkuId",CartSkuId);//0d372038-0ce5-42b4-9362-50b339ad8d22 
        
// Do some computation using the methods
 
logger.debug("C_CartDetailsJs_CartID="+Cart_id);
// logger.debug("C_CartDetailsJs_CartSkuId="+CartSkuId);
 
 //sku_addon_sku2780327_sku2780327
 
//context.variableManager.setValue("computedVar",computedValue);