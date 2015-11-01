import React, { PropTypes } from 'react';
import styles from './CurrentTradeList.css';
import withStyles from '../../decorators/withStyles';

import CurrentTradeItem from '../../components/CurrentTradeItem';

@withStyles(styles)
class CurrentTradeList{

  render(){
    console.log("render trade items")
    return(
      <div>
        <CurrentTradeItem tradeName="Nectar" tradeId="111" amountAvailable="100" altTradeName="Boots" altAmountAvailable="122" altTradeId="222"/>
        <CurrentTradeItem tradeName="Nectar" tradeId="111" amountAvailable="100" altTradeName="Tesco" altAmountAvailable="100" altTradeId="333"/>
        <CurrentTradeItem tradeName="Nectar" tradeId="111" amountAvailable="100" altTradeName="BA" altAmountAvailable="5" altTradeId="444"/>
      </div>
    );
  }
}
export default CurrentTradeList;
