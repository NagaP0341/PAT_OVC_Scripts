var IptvListResp = context.variableManager.getValue("c_IptvList");
var IptvList_JSON = JSON.parse(IptvListResp);

var IPTVSkuId = 'NOT FOUND';

var IPTV = IptvList_JSON['IPTV'];

   Skuid = IPTV ['activation']['id'];
   
   
   context.variableManager.setValue("C_JSExtraID_Skuid",Skuid);
              
     logger.debug("Skuid="+Skuid);