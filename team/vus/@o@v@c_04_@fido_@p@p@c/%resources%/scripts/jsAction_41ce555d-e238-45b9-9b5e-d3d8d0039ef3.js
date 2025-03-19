//Below line is the mandatory file for write file to work in Neoload
var lock= new java.util.concurrent.locks.ReentrantLock();
//writes users company, userid and script they're executing.
function writeFile(){
var GesID = context.variableManager.getValue("P_OVC_04_Fido_PPC.P_BAN");
//var IMEI = context.variableManager.getValue("C_CTN1");
 
lock.lock();
//Open the file for writing
//var writer= new java.io.FileWriter("D:\\Bell Canada Current\\NM1 R46\\FINAL\\TestData\\UNLOCK.GESID_13Jan.txt",true);
var writer= new java.io.FileWriter("D:\\FileWrite\\OVC_04_Fido_PPC_BAn.txt",true);
writer.write("" + GesID +"\r\n");
//writer.write("" + GesID +","+ IMEI + "\r\n");
//writer.write("" + GesID +"\r\n");
//Close the file
//writer.close();
//Close the file
writer.close();
//Unlock the lock so that other users can write on it
lock.unlock();
}
writeFile();