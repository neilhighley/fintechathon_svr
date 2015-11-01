import React, { PropTypes } from 'react';
import styles from './CurrentTradeItem.css';
import withStyles from '../../decorators/withStyles';

import VendorLibrary from "../../VendorLibrary"
import BlockChainProviderLibrary from "../../BlockChainProviders/Manager"


@withStyles(styles)
class CurrentTradeItem{

  static propTypes = {
    tradeName: PropTypes.string,
    tradeId:PropTypes.number,
    amountAvailable:PropTypes.number,
    altTradeName:PropTypes.string,
    altTradeId:PropTypes.number,
    altAmountAvailable:PropTypes.number,
    status:PropTypes.string
  };

  updateStatus=function(val){
    alert("status:"+val);
    //this.props.status+=val+"<br/>";
  };
  onPerformTrade=function(e){
    console.log("onPerformTrade");
    console.log(e.target.value);
    var tradeId=1111;
    var tradeName="Nectar";
    var tradeAmount=50;
    var altTradeName="Boots";
    var altTradeId=2222;
    var altTradeAmount=10;
    var blockchainProviders=new BlockChainProviderLibrary();
    var vl=new VendorLibrary(blockchainProviders.GetDefault());
    var result=vl.DoTrade({source:tradeId,
      type:12,
      amount:tradeAmount,
      destination:altTradeId,
      destinationAmount:altTradeAmount},function(val){
      alert("status:"+val);
    });
    console.log(result);
  };
  handleChange=function(event){
    this.setState({value: event.target.value});
  };
  render(){
    console.log("render trade Item");
    this.state=this.props;
    return(
      <div>
        <div className="ctItem">
          <input className="ctAmount" style={{width:"30px"}} value={this.props.amountAvailable} onChange={this.handleChange}/>
          <span className="ctName">{this.props.tradeName}</span>
          <span className="ctTo">To</span>
          <input className="ctAmount" style={{width:"30px"}} value={this.props.altAmountAvailable}/>
          <span className="ctName">{this.props.altTradeName}</span>
          <button type="button" className="ctGo" onClick={this.onPerformTrade}>Go</button>
        </div>
        <div className="ctStatus">{this.props.status}</div>
      </div>
      );
  }
}
export default CurrentTradeItem;
