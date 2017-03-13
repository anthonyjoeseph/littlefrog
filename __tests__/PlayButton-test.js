// __tests__/PlayButton-test.js
import 'react-native';
import React from 'react';
import PlayButton from '../app/scenes/main/BookReader/PlayButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  jest.mock('sound');

  const tree = renderer.create(
    <PlayButton
      style={{
        position: 'absolute',
        zIndex: 2,
        top: 0,
        right: 50
      }}
      language="en"
      character="hum"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
