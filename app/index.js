// @flow

// app/index.js

import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';

import LogInPage from './scenes/main/LogInPage/LogInPage.js';
import SignUpPage from './scenes/main/SignUpPage/SignUpPage.js';
import PaymentPage from './scenes/main/PaymentPage/PaymentPage.js';
import HomePage from './scenes/main/HomePage/HomePage';
import AccountPage from './scenes/main/AccountPage/AccountPage';
import ReferralPage from './scenes/main/ReferralPage/ReferralPage';
import StatsPage from './scenes/main/StatsPage/StatsPage';
import BookReader from './scenes/main/BookReader/BookReader';
import JoinUsPage from './scenes/modal/JoinUsPage/JoinUsPage';
import QuizPage from './scenes/modal/QuizPage/QuizPage';
import UserPanel from './scenes/modal/UserPanel/UserPanel';

const App = () => {
  return (
    <Router>
      <Scene key="Modal" component={Modal}>
        <Scene key="root" hideNavBar={true}>
          <Scene
            key="logInPage"
            component={LogInPage}
            title="LogIn"
            animation='fade'
            initial
          />
          <Scene
            key="signUpPage"
            component={SignUpPage}
            title="SignUp"
            animation='fade'
          />
          <Scene
            key="paymentPage"
            component={PaymentPage}
            title="Payment"
            animation='fade'
          />
          <Scene
            key="homePage"
            component={HomePage}
            title="Home"
            animation='fade'
          />
          <Scene
            key="bookReader"
            component={BookReader}
            title="Book"
            animation='fade'
          />
          <Scene
            key="accountPage"
            component={AccountPage}
            title="Account"
            animation='fade'
          />
          <Scene
            key="referralPage"
            component={ReferralPage}
            title="Referral"
            animation='fade'
          />
          <Scene
            key="statsPage"
            component={StatsPage}
            title="Stats"
            animation='fade'
          />
        </Scene>
        <Modal
          key="joinUsPage"
          component={JoinUsPage}/>
        <Modal
          key="userPanel"
          component={UserPanel}/>
        <Modal
          key="quizPage"
          component={QuizPage}/>
      </Scene>
    </Router>
  );
}

export default App;
