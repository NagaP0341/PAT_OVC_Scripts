// Get variable value from VariableManager
var DeviceListResp = context.variableManager.getValue("C_DeviceList");
var DeviceList_JSON = JSON.parse(DeviceListResp);

var C_getRandomDeviceJS_urlSlugID1= 'NOT FOUND';
var C_getRandomDeviceJS_urlSlugID2= 'NOT FOUND';
var C_getRandomDeviceJS_urlSlugID3= 'NOT FOUND';
var C_getRandomDeviceJS_urlSlugID4= 'NOT FOUND';
var C_getRandomDeviceJS_urlSlugID5= 'NOT FOUND';
var C_getRandomDeviceJS_urlSlugID6= 'NOT FOUND';
var C_getRandomDeviceJS_DeviceID= 'NOT FOUND';
var C_getRandomDeviceJS_Selected_urlSlugID= 'NOT FOUND';
var C_getRandomDeviceJS_skuAttributes_color= 'NOT FOUND';
var C_getRandomDeviceJS_skuAttributes_memory= 'NOT FOUND';
var C_getRandomDeviceJS_skuAttributes_tierType= 'NOT FOUND';
var C_getRandomDeviceJS_skuAttributes_externalID= 'NOT FOUND';
var C_getRandomDeviceJS_skuAttributes_upFrontEdge= 'NOT FOUND';
var C_getRandomDeviceJS_skuAttributes_id= 'NOT FOUND';
var C_getRandomDeviceJS_atgProductId= 'NOT FOUND';

var iPhoneList = ['iPhone 16','iPhone 16 Plus','iPhone 16 Pro','iPhone 16 Pro Max'];

const random = Math.floor(Math.random() * iPhoneList.length);

var tilesData = DeviceList_JSON['tilesData'];

for (var i = 0; i<tilesData.length;++i){
//     logger.debug("devicename=" +tilesData[i]['deviceName'] );
    urlSlugID1 =  tilesData[0]['cheapestSkuId'];
    urlSlugID2 =  tilesData[1]['cheapestSkuId'];
    urlSlugID3 =  tilesData[2]['cheapestSkuId'];
    urlSlugID4 =  tilesData[3]['cheapestSkuId'];
    urlSlugID5 =  tilesData[4]['cheapestSkuId'];
    urlSlugID6 =  tilesData[5]['cheapestSkuId'];
    if(tilesData[i]['deviceName'] == iPhoneList[random]){
       DeviceID =  tilesData[i]['id'];
       atgProductId = tilesData[i]['atgProductId']
       Selected_urlSlugID =  tilesData[i]['cheapestSkuId'];
       skuAttributes_color =  tilesData[i]['subModelList'][0]['childSku'][0]['color'];   
       skuAttributes_id =  tilesData[i]['subModelList'][0]['childSku'][0]['id'];   
       skuAttributes_atgSkuId =  tilesData[i]['subModelList'][0]['childSku'][0]['atgSkuId'];   
       skuAttributes_externalID =  tilesData[i]['subModelList'][0]['childSku'][0]['externalId'];          
       skuAttributes_memory =  tilesData[i]['subModelList'][0]['childSku'][0]['memory'];   

       
        }
    
    }
  context.variableManager.setValue("C_getRandomDeviceJS_urlSlugID1",urlSlugID1);  //samsung-galaxy-s25-ultra
  context.variableManager.setValue("C_getRandomDeviceJS_urlSlugID2",urlSlugID2); //samsung-galaxy-s25
  context.variableManager.setValue("C_getRandomDeviceJS_urlSlugID3",urlSlugID3); //samsung-galaxy-s25-plus
  context.variableManager.setValue("C_getRandomDeviceJS_urlSlugID4",urlSlugID4); //iphone-16
  context.variableManager.setValue("C_getRandomDeviceJS_urlSlugID5",urlSlugID5); //iphone-15
  context.variableManager.setValue("C_getRandomDeviceJS_urlSlugID6",urlSlugID6);//iphone-16-pro
  context.variableManager.setValue("C_getRandomDeviceJS_DeviceID",DeviceID); //device_prodIP16
  context.variableManager.setValue("C_getRandomDeviceJS_atgProductId",atgProductId);   
  context.variableManager.setValue("C_getRandomDeviceJS_Selected_urlSlugID",Selected_urlSlugID); //iphone-16
  context.variableManager.setValue("C_getRandomDeviceJS_skuAttributes_color",skuAttributes_color);//pink128gb
  context.variableManager.setValue("C_getRandomDeviceJS_skuAttributes_memory",skuAttributes_memory);//128gb
  context.variableManager.setValue("C_getRandomDeviceJS_skuAttributes_atgSkuId",skuAttributes_atgSkuId);//
  context.variableManager.setValue("C_getRandomDeviceJS_skuAttributes_externalID",skuAttributes_externalID);//IP16128PNK
  context.variableManager.setValue("C_getRandomDeviceJS_skuAttributes_id",skuAttributes_id); //sku_devicePrice_regular_RFIN3LOW_p198923413_IP16128PNK_HUP_RF3LOW_HUP




// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("C_getRandomDeviceJS_urlSlugID1="+urlSlugID1);
logger.debug("C_getRandomDeviceJS_urlSlugID2="+urlSlugID2);
logger.debug("C_getRandomDeviceJS_urlSlugID3="+urlSlugID3);
logger.debug("C_getRandomDeviceJS_urlSlugID4="+urlSlugID4);
logger.debug("C_getRandomDeviceJS_urlSlugID5="+urlSlugID5);
logger.debug("C_getRandomDeviceJS_urlSlugID6="+urlSlugID6);
logger.debug("C_getRandomDeviceJS_DeviceID="+DeviceID);
logger.debug("C_getRandomDeviceJS_Selected_urlSlugID="+Selected_urlSlugID);
logger.debug("C_getRandomDeviceJS_skuAttributes_color="+skuAttributes_color);
logger.debug("C_getRandomDeviceJS_skuAttributes_memory="+skuAttributes_memory);
logger.debug("C_getRandomDeviceJS_skuAttributes_atgSkuId="+skuAttributes_atgSkuId);
logger.debug("C_getRandomDeviceJS_skuAttributes_externalID="+skuAttributes_externalID);
logger.debug("C_getRandomDeviceJS_skuAttributes_id="+skuAttributes_id);
logger.debug("C_getRandomDeviceJS_atgProductId="+atgProductId);

// Inject the computed value in a runtime variable
//context.variableManager.setValue("computedVar",computedValue);