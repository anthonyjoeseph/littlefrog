// app/index.js

import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';

import LogoPage from './scenes/main/LogoPage/LogoPage';
import BookReader from './scenes/main/BookReader/BookReader';
import BookInfoPage from './scenes/main/BookInfoPage/BookInfoPage';
import JoinUsPage from './scenes/modal/JoinUsPage/JoinUsPage';
import QuizPage from './scenes/modal/QuizPage/QuizPage';

const App = () => {
  return (
    <Router>
      <Scene key="Modal" component={Modal}>
        <Scene key="root" hideNavBar={true}>
          <Scene key="logoPage"
            component={LogoPage}
            title="Logo"
            animation='fade'
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
            initial
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
