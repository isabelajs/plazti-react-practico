import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../container/home';
import Login from '../container/Login';
import Registrer from '../container/Registro';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout'

export default function App () {
    return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Registrer}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
);
};