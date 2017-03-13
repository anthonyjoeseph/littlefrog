// __tests__/DismissableFullscreenPopup-test.js
import 'react-native';
import React from 'react';
import LogoPage from '../app/scenes/main/LogoPage/LogoPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <LogoPage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
