// __tests__/DismissableFullscreenPopup-test.js
import 'react-native';
import React from 'react';
import JoinUsPage from '../app/scenes/modal/JoinUsPage/JoinUsPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <JoinUsPage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
