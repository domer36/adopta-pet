import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Context from './Context';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/signup';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import ProfilePet from './components/profile-pet';
import Match from './components/match/Match';
import Profile from './components/profile';
import PetRegister from './components/pet-register';

const Router = () => (
  <BrowserRouter>
    <Context>
      <ThemeProvider>
        <CSSReset />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/profile-pet/:id" component={ProfilePet} />
            <Route exact path="/pet-register" component={PetRegister} />
            <Route exact path="/match" component={Match} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
      </ThemeProvider>
    </Context>
  </BrowserRouter>
);

export default Router;
