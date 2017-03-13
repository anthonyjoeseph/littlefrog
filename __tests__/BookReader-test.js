// __tests__/BookImages-test.js
import 'react-native';
import React from 'react';
import BookReader from '../app/scenes/main/BookReader/BookReader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  jest.mock('sound');

  const tree = renderer.create(
    <BookReader />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
