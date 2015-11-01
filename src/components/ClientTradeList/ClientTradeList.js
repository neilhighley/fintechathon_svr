import React, { PropTypes } from 'react';
import styles from './ClientTradeList.css';
import withStyles from '../../decorators/withStyles';

import ClientTradeItem from '../../components/ClientTradeItem';

@withStyles(styles)
class ClientTradeList{

  render(){
    return(
      <div>Trade items
      <ClientTradeItem amountAvailable="123" tradeName="Nectar"/>
        <ClientTradeItem amountAvailable="13" tradeName="Boots"/>
        <ClientTradeItem amountAvailable="1230" tradeName="Tesco"/>
        <ClientTradeItem amountAvailable="883" tradeName="British Airways"/>
      </div>
    );
  }
}
export default ClientTradeList;
