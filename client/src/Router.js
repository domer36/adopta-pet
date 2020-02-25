import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Context from './Context';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/signup';
import { ThemeProvider } from '@chakra-ui/core';

const Router = () => (
  <BrowserRouter>
    <Context>
      <ThemeProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Context>
  </BrowserRouter>
);

export default Router;
