// app/index.js

import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';

import LogoPage from './LogoPage';
import BookReader from './BookReader/BookReader';
import BookInfoPage from './BookInfoPage';
import JoinUsPage from './JoinUsPage';
import QuizPage from './QuizPage';

const App = () => {
  return (
    <Router>
      <Scene key="Modal" component={Modal}>
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
        <Modal
          key="joinUsPage"
          component={JoinUsPage}/>
        <Modal
          key="quizPage"
          component={QuizPage}/>
      </Scene>
    </Router>
  );
}

export default App;
