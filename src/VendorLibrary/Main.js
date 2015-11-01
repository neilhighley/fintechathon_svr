import ApprovedItem from "./ApprovedItem";

//import sf from 'node-salesforce';


class VendorLibrary{
  constructor(bcLib) {
    this.blockchainProvider=bcLib;//colu library
    console.log("build VendorLibrary")
  }

   DoTrade(tradeItem,callback){
     var result={success:false,blockchainid:null};
     callback("do trade with "+tradeItem.source + " to "+ tradeItem.destination);
     var ret=this.SubmitTradeToSalesforce(tradeItem,callback);
     if(ret.success) {
       callback("trade successful");
       var bcRet = this.blockchainProvider.SubmitTradeToChain(tradeItem,callback);
       result.blockchainid = bcRet.blockchainId;
       result.success = true;
     }
    return result;
  }

  SubmitTradeToSalesforce(tradeItem,callback){
    callback("SubmitTradeToSalesforce");
    var items= this.GetItemsFromSalesforce(callback);
    console.log(items);
    return items;
  }
  GetItemsFromSalesforce(callback) {

    //log into salesforce
    //add the object


    //var conn = new sf.Connection({
    //  // you can change loginUrl to connect to sandbox or prerelease env.
    //  // loginUrl : 'https://test.salesforce.com'
    //});
    //
    //var username="salesforcedevelopment@neilhighley.com";
    //var password="sfEdward74";
    //
    //conn.login(username, password, function(err, userInfo) {
    //  if (err) { return console.error(err); }
    //  // Now you can get the access token and instance URL information.
    //  // Save them to establish connection next time.
    //  console.log(conn.accessToken);
    //  console.log(conn.instanceUrl);
    //  // logged in user property
    //  console.log("User ID: " + userInfo.id);
    //  console.log("Org ID: " + userInfo.organizationId);
    //  // ...
    //});

    var availableItems={
      success:true,
      items:[
      new ApprovedItem(1234,23,111,23)
    ]};

    return availableItems;
  }
}


export default VendorLibrary;
