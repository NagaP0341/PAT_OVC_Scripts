// Get variable value from VariableManager
var DeviceListResp = context.variableManager.getValue("C_DeviceList");
var DeviceList_JSON = JSON.parse(DeviceListResp);

var Selected_DeviceProductID = 'NOT FOUND';
var Selected_cheapestSkuId = 'NOT FOUND';
var DeviceProductID1 = 'NOT FOUND';
var  DeviceProductID2 = 'NOT FOUND';
var  DeviceProductID3 = 'NOT FOUND';
var  DeviceProductID4 = 'NOT FOUND';
var  DeviceProductID5 = 'NOT FOUND';
var  DeviceProductID6 = 'NOT FOUND';
var cheapestSkuId1 = 'NOT FOUND';
var cheapestSkuId2 = 'NOT FOUND';
var cheapestSkuId3 = 'NOT FOUND';
var cheapestSkuId4 = 'NOT FOUND';
var cheapestSkuId5 = 'NOT FOUND';
var cheapestSkuId6 = 'NOT FOUND';

// var iPhoneList = ['iPhone 16','iPhone 16 Plus','iPhone 16 Pro','iPhone 16 Pro Max'];
// 
// const random = Math.floor(Math.random() * iPhoneList.length);

var tilesData = DeviceList_JSON['tilesData'];

for (var i = 0; i<tilesData.length;++i){
     DeviceProductID1 =  tilesData[0]['id'];
     DeviceProductID2 =  tilesData[1]['id'];
    DeviceProductID3 =  tilesData[2]['id'];
     DeviceProductID4 =  tilesData[3]['id'];
     DeviceProductID5 =  tilesData[4]['id'];
     DeviceProductID6 =  tilesData[5]['id'];
    cheapestSkuId1 =  tilesData[0]['cheapestSkuId'];
    cheapestSkuId2 =  tilesData[1]['cheapestSkuId'];
    cheapestSkuId3 =  tilesData[2]['cheapestSkuId'];
    cheapestSkuId4 =  tilesData[3]['cheapestSkuId'];
    cheapestSkuId5 =  tilesData[4]['cheapestSkuId'];
    cheapestSkuId6 =  tilesData[5]['cheapestSkuId'];
    Selected_DeviceProductID = tilesData[2]['id'];
    Selected_cheapestSkuId =  tilesData[2]['cheapestSkuId'];
//     if(tilesData[i]['deviceName'] == iPhoneList[random]){
//        Selected_DeviceProductID = tilesData[i]['id'];
//        Selected_cheapestSkuId =  tilesData[i]['cheapestSkuId'];
//         }
    
    }
  context.variableManager.setValue("C_DeviceProductID1", DeviceProductID1);  //samsung-galaxy-s25-ultra
  context.variableManager.setValue("C_DeviceProductID2", DeviceProductID2); //samsung-galaxy-s25
  context.variableManager.setValue("C_DeviceProductID3", DeviceProductID3); //samsung-galaxy-s25-plus
  context.variableManager.setValue("C_DeviceProductID4", DeviceProductID4); //iphone-16
  context.variableManager.setValue("C_DeviceProductID5", DeviceProductID5); //iphone-15
  context.variableManager.setValue("C_DeviceProductID6", DeviceProductID6);//iphone-16-pro
  context.variableManager.setValue("C_cheapestSkuId1", cheapestSkuId1);  //samsung-galaxy-s25-ultra
  context.variableManager.setValue("C_cheapestSkuId2", cheapestSkuId2); //samsung-galaxy-s25
  context.variableManager.setValue("C_cheapestSkuId3", cheapestSkuId3); //samsung-galaxy-s25-plus
  context.variableManager.setValue("C_cheapestSkuId4", cheapestSkuId4); //iphone-16
  context.variableManager.setValue("C_cheapestSkuId5", cheapestSkuId5); //iphone-15
  context.variableManager.setValue("C_cheapestSkuId6", cheapestSkuId6);//iphone-16-pro
  context.variableManager.setValue("C_CatalogSearch_DeviceID",Selected_DeviceProductID); //device_prodIP16
  context.variableManager.setValue("C_CatalogSearch_CheapestSkuID",Selected_cheapestSkuId); //iphone-16




// Do some computation using the methods
// you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
logger.debug("DeviceProductID1="+DeviceProductID1);
logger.debug(" DeviceProductID2="+ DeviceProductID2);
logger.debug(" DeviceProductID3="+ DeviceProductID3);
logger.debug(" DeviceProductID4="+ DeviceProductID4);
logger.debug(" DeviceProductID5="+ DeviceProductID5);
logger.debug(" DeviceProductID6="+ DeviceProductID6);
logger.debug("cheapestSkuId1="+cheapestSkuId1);
logger.debug("cheapestSkuId2="+cheapestSkuId2);
logger.debug("cheapestSkuId3="+cheapestSkuId3);
logger.debug("cheapestSkuId4="+cheapestSkuId4);
logger.debug("cheapestSkuId5="+cheapestSkuId5);
logger.debug("cheapestSkuId6="+cheapestSkuId6);
logger.debug("Selected_DeviceProductID="+Selected_DeviceProductID);
logger.debug("Selected_cheapestSkuId="+Selected_cheapestSkuId);;

// Inject the computed value in a runtime variable
//context.variableManager.setValue("computedVar",computedValue);