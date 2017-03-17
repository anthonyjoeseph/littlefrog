// @flow

// app/LogInForm.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Props,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import UserPanel from '../../modal/UserPanel/UserPanel'

class HomePage extends Component {
  constructor(props:Props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
      showUserPanel: false
    };

    this.dismissUserPanel = this.dismissUserPanel.bind(this);
  }

  dismissUserPanel(){
    this.setState({showUserPanel: false});
  }

  render(){
    return (
      <View style={styles.container}>
        <View
          style={{backgroundColor:'green', flexDirection:'row', justifyContent:'flex-end'}}
          height={100}>
          <Text>Search</Text>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            width={200}
            style={{height: 40, color:'black', borderBottomColor: '#000000', borderBottomWidth: 8}}
            placeholder="filter words"
            placeholderTextColor='black'
          />
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={function(){
              this.setState({showUserPanel: true});
            }.bind(this)}
          >D</Button>
        </View>
        <ScrollView>
          <Text>Section 0</Text>
          <ListView
            height={150}
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
          <Text>Section 1</Text>
          <ListView
            height={150}
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
          <Text>Section 2</Text>
          <ListView
            height={150}
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
          <Text>Section 3</Text>
          <ListView
            height={150}
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
          <Text>Section 4</Text>
          <ListView
            height={150}
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </ScrollView>
        {
          this.state.showUserPanel ? <UserPanel onDismiss={this.dismissUserPanel} /> : <View />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(57, 166, 198)',
    flex:1,
    flexDirection: 'column'
  }
});

export default HomePage;
