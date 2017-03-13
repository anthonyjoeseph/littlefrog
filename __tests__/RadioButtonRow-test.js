// __tests__/DismissableFullscreenPopup-test.js
import 'react-native';
import React from 'react';
import RadioButtonRow from '../app/scenes/main/BookReader/panels/RadioButtonRow';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <RadioButtonRow
      options={["Testing1", "Testing2", "Testing3"]}
      onSelection={ (selection) => { } }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
