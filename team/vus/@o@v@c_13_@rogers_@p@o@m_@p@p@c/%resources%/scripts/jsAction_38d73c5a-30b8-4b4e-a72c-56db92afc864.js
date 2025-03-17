var CartDetailsResp = context.variableManager.getValue("C_CartDetails");
var CartDetails_JSON = JSON.parse(CartDetailsResp);

var lineItems = CartDetails_JSON['lineItems'];
var autoDeploySocs = lineItems[0]['autoDeploySocs'];
var autoDeploySocs_skuId = autoDeploySocs[0]['skuId'];

context.variableManager.setValue("c_Cart_skuid3",autoDeploySocs_skuId);  //sku_addon_sku2780327_sku2780327

logger.debug("autoDeploySocs_skuId="+autoDeploySocs_skuId)