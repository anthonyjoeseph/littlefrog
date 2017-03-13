// __tests__/DismissableFullscreenPopup-test.js
import {View, Text} from 'react-native';
import React from 'react';
import DismissableFullscreenPopup from '../app/scenes/modal/DismissableFullscreenPopup';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <DismissableFullscreenPopup
      onDismiss={()=>{}}
    >
      <View>
        <Text>Testing testing 123</Text>
      </View>
    </DismissableFullscreenPopup>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
