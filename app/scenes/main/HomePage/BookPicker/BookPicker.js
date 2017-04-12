// @flow

// app/LogInForm.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Props,
  State,
  ScrollView,
  ListView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import {hasJWT, fetchAndPersistJWT} from '../../../../RESTAccess.js';

import BookRow from './BookRow';

class BookPicker extends Component {
  state:State;

  constructor(props:Props) {
    super(props);
    this.alldata = [
      {
        title:"zero hero",
        country: "egypt",
        tags: ["first", "start"],
        imageURI: "numbers/0.png"
      },
      {
        title:"one son",
        country: "korea",
        tags: ["second", "next"],
        imageURI: "numbers/1.png"
      },
      {
        title:"two zoo",
        country:"england",
        tags: ["animal", "mayhem"],
        imageURI: "numbers/2.png"
      },
      {
        title:"three free",
        country:"china",
        tags: ["coupon", "save"],
        imageURI: "numbers/3.png"
      },
      {
        title:"four score",
        country:"usa",
        tags: ["abraham", "speech"],
        imageURI: "numbers/4.png"
      },
      {
        title:"five alive",
        country: "italy",
        tags: ["war", "horror"],
        imageURI: "numbers/5.png"
      },
      {
        title:"six sticks",
        country:"japan",
        tags: ["yard", "tree"],
        imageURI: "numbers/6.png"
      },
      {
        title:"seven heaven",
        country:"france",
        tags: ["sleepover", "game"],
        imageURI: "numbers/7.png"
      },
      {
        title:"eight grate",
        country:"spain",
        tags: ["cheese", "dinner"],
        imageURI: "numbers/8.png"
      },
      {
        title:"nine wine",
        country:"brazil",
        tags: ["alcohol", "drunk"],
        imageURI: "numbers/9.png"
      },
      {
        title:"ten sven",
        country:"sweden",
        tags: ["nordic", "name", ],
        imageURI: "numbers/10.png"
      },
      {
        title:"eleven kevin",
        country:"cuba",
        tags: ["cousin", "ketchup", "cuba"],
        imageURI: "numbers/11.png"
      },
      {
        title:"twelve smelve",
        country:"chile",
        tags: ["imaginary", "wordplay"],
        imageURI: "numbers/12.png"
      },
      {
        title:"thirteen hurteen",
        country:"hawaii",
        tags: ["pain", "wwe"],
        imageURI: "numbers/13.png"
      },
      {
        title:"fourteen smorteen",
        country:"cuba",
        tags: ["juicebox", "thermos"],
        imageURI: "numbers/14.png"
      },
      {
        title:"fifteen withteen",
        country:"austrailia",
        tags: ["made", "up"],
        imageURI: "numbers/15.png"
      }
    ];

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.countriesInContinents = {
      "Americas":["usa", "brazil", "cuba", "hawaii", "chile"],
      "Europe":["france", "spain", "england", "italy", "sweden"],
      "Africa":["egypt"],
      "Austrailia":["austrailia"],
      "Asia":["japan", "china", "korea"]
    };
    var tmpState = {};
    for (let continent of Object.keys(this.countriesInContinents)) {
      var countries = this.countriesInContinents[continent]
      var continentData = this.ds.cloneWithRows(this.alldata.filter(
        function(bookData){
          return countries.includes(bookData.country);
        }
      ))
      tmpState[continent] = continentData;
    }
    this.state = tmpState;
  }

  render(){
    return (
      <ScrollView>
        {Object.keys(this.countriesInContinents).map(function(country, key){
          return (
            <View key={key}>
              <Text>{country}</Text>
              <ListView
                contentContainerStyle={styles.listView}
                height={150}
                horizontal={true}
                dataSource={this.state[country]}
                renderRow={(rowData) => <BookRow authHeaders={this.props.authHeaders} data={rowData} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
              />
            </View>
          );
        }.bind(this))}
      </ScrollView>
    );
  }
}

const styles = {
  listView: {
    justifyContent: 'center',
    alignItems:'center'
  },
  separator: {
    flex: 1,
    width: StyleSheet.hairlineWidth * 5,
    backgroundColor: '#8E8E8E',
    height:70
  }
}

export default BookPicker;
