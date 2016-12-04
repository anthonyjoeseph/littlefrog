// app/index.js

import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';

import LogoPage from './LogoPage';
import BookReader from './BookReader';
import BookInfoPage from './BookInfoPage';

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="logoPage"
          component={LogoPage}
          title="Logo"
          animation='fade'
          initial
        />
        <Scene
          key="bookInfoPage"
          component={BookInfoPage}
          title="Book"
          animation='fade'
        />
        <Scene
          key="bookReader"
          component={BookReader}
          title="Book"
          animation='fade'
        />
        </Scene>
    </Router>
  );
}

export default App;
