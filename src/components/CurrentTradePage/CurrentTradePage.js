/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './CurrentTradePage.css';
import withStyles from '../../decorators/withStyles';

import CurrentTradeList from '../../components/CurrentTradeList';

@withStyles(styles)
class CurrentTradePage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Client Trade Page';
    this.context.onSetTitle(title);

    return (
      <div className="CurrentTradePage">
        <div className="CurrentTradePage-container">
          <h1>{title}</h1>
          <CurrentTradeList/>
        </div>
      </div>
    );
  }

}

export default CurrentTradePage;
