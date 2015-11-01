//var Colu = require('colu');

class ColuLibrary{

  constructor() {
    this.userName="neilhighley";
    this.apiKey="1234-2345-6786";
    this.network="testnet";
    console.log("build ColuLibrary:un="+this.userName+":api="+this.apiKey+":url="+this.url);

    this.settings = {
      network: this.network,
      privateSeed: null
    }

  }

   SubmitTradeToChain(tradeItem,callback){
     callback("submit trade with "+tradeItem.source + " to "+ tradeItem.destination + " to blockchain");

     callback("using:un="+this.userName+":api="+this.apiKey+":url="+this.url);

    /* var colu = new Colu(this.settings);
     colu.on('connect', function () {
       // Your code here
       console.log("connection established with blockchain")
     })

     colu.init();*/

    return {success:true,blockchainId:"1234-5678-9876"};
  }
}

export default ColuLibrary;
