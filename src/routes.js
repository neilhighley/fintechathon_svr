/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';

import ClientTradeList from './components/ClientTradeList';
import ClientTradeItem from './components/ClientTradeItem';

import ContactPage from './components/ContactPage';
import ClientPage from './components/ClientPage';
import CurrentTradePage from './components/CurrentTradePage';

import sforceauth from './components/sforceauth';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';


//var jsforce = require('jsforce');

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/contact', async () => <ContactPage />);
  //on('/client', async () => <ClientPage />);

  on('/client', async (state) => {
    console.log("Load client page");
    const content = await http.get(`/api/content?path=client`);
    return content && <ClientPage {...content} />;
  });
  on('/trade', async (state) => {
    console.log("Load trade page");
    const content = await http.get(`/api/content?path=trade`);
    return content && <CurrentTradePage {...content} />;
  });
  on('/sforceauth', async (state) => {
    console.log("Load client page");
    const content = await http.get(`/api/content?path=sforceauth`);
    return content && <sforceauth {...content} />;
  });

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
      <App context={state.context} error={error}><NotFoundPage /></App> :
      <App context={state.context} error={error}><ErrorPage /></App>
  );

});

export default router;
