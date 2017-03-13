// __tests__/SubPanel-test.js
import {View, Text} from 'react-native';
import React from 'react';
import SubPanel from '../app/scenes/main/BookReader/panels/SubPanel';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SubPanel
      style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
        <View>
          <Text>Testing 123</Text>
        </View>
    </SubPanel>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
