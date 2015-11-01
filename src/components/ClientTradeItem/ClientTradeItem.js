import React, { PropTypes } from 'react';
import styles from './ClientTradeItem.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ClientTradeItem{

  static propTypes = {
    tradeName: PropTypes.string,
    amountAvailable:PropTypes.number
  };
  onTradeClick=function(e){
    console.log("tradeclick");
    console.log(e);
    document.location.href="/trade";
  };
  render(){
    console.log("render trade Item");
    return(
      <div className="clTradeItem row">
        <div className="clTradeName col-sm-4">{this.props.tradeName}</div>
        <div className="col-sm-4"><input className="clTradeCount" type="text" readOnly style={{width:"35px"}} value={this.props.amountAvailable}></input></div>
        <div className="col-sm-4"><button className="clTradeGo" type="button" onClick={this.onTradeClick}>Go trade</button></div>
      </div>
      );
  }
}
export default ClientTradeItem;
