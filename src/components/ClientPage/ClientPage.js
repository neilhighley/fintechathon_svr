/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ClientPage.css';
import withStyles from '../../decorators/withStyles';

import ClientTradeList from '../../components/ClientTradeList';
import ClientTradeItem from '../../components/ClientTradeItem';

@withStyles(styles)
class ClientPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Client Page';
    this.context.onSetTitle(title);

    return (
      <div className="ClientPage">
        <div className="ClientPage-container">
          <h1>{title}</h1>
          <ClientTradeList/>
        </div>
      </div>
    );
  }

}

export default ClientPage;
