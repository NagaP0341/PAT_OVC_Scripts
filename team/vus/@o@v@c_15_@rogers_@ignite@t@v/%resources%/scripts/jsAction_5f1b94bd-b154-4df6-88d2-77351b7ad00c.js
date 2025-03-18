var OffersListResp = context.variableManager.getValue("C_OffersList");
var OffersList_JSON = JSON.parse(OffersListResp);

var bundleMaestroOfferId = 'NOT FOUND';
var bundleMaestroId = 'NOT FOUND';
var bundleOfferId = 'NOT FOUND';
var productId = 'NOT FOUND';
var offerId = 'NOT FOUND';
var swappedChannelsIn = 'NOT FOUND';
var swappedChannelsOut = 'NOT FOUND';
var productId2 = 'NOT FOUND';
var productId3 = 'NOT FOUND';
var productId4 = 'NOT FOUND';
var offerId2 = 'NOT FOUND';



var en = OffersList_JSON['en'];
var bundleOffers = en['bundleOffers'];
 

for (var i = 7; i<bundleOffers.length;++i){    

    bundleMaestroOfferId =  bundleOffers[i]['internetOffers'][0]['bundleMaestroOfferId'];
    bundleMaestroId =  bundleOffers[i]['internetOffers'][0]['bundleMaestroId'];
    bundleOfferId =  bundleOffers[i]['id'];
    productId =  bundleOffers[i]['productId'];
    offerId =  bundleOffers[i]['iptvOffer']['offerId'];
    swappedChannelsIn =  bundleOffers[i]['iptvOffer']['channels']['swap'][0]['channelId'];
    swappedChannelsOut =  bundleOffers[i]['iptvOffer']['channels']['flex'][0]['channelId'];
     productId2 =  bundleOffers[0]['productId'];
      productId3 =  bundleOffers[1]['productId'];
       productId4 =  bundleOffers[4]['productId'];
        offerId2 =  bundleOffers[i]['hsiProductLine']['offerId'];

}
// // var autoDeploySocs = plans[0]['autoDeploySocs'];
// var planId3 = plans[0]['autoDeploySocs'][0]['skuId'];
// var externalId3 = plans[0]['autoDeploySocs'][0]['externalId'];

// Inject the computed value in a runtime variable
context.variableManager.setValue("C_JSOfferList_bundleMaestroOfferId",bundleMaestroOfferId);
context.variableManager.setValue("C_JSOfferList_bundleMaestroId",bundleMaestroId);
context.variableManager.setValue("C_JSOfferList_bundleOfferId",bundleOfferId);   
context.variableManager.setValue("C_JSOfferList_productId",productId);
context.variableManager.setValue("C_JSOfferList_offerId",offerId);
context.variableManager.setValue("C_JSOfferList_swappedChannelsIn",swappedChannelsIn);
context.variableManager.setValue("C_JSOfferList_swappedChannelsOut",swappedChannelsOut);
context.variableManager.setValue("C_JSOfferList_productId2",productId2);
context.variableManager.setValue("C_JSOfferList_productId3",productId3);
context.variableManager.setValue("C_JSOfferList_productId4",productId4);
context.variableManager.setValue("C_JSOfferList_offerId2",offerId2);
              
// Do some computation using the methods

// outpuvalue
logger.debug("bundleMaestroOfferId="+bundleMaestroOfferId);
logger.debug("bundleMaestroId="+bundleMaestroId);
logger.debug("bundleOfferId="+bundleOfferId);
logger.debug("productId="+productId);
logger.debug("offerId="+offerId);
logger.debug("swappedChannelsIn="+swappedChannelsIn);
logger.debug("swappedChannelsOut="+swappedChannelsOut);
logger.debug("productId2="+productId2);
logger.debug("productId3="+productId3);
logger.debug("productId4="+productId4);
logger.debug("offerId2="+offerId2);