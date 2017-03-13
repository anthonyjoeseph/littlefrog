// __tests__/BookInfoPage-test.js
import 'react-native';
import React from 'react';
import BookInfoPage from '../app/scenes/main/BookInfoPage/BookInfoPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BookInfoPage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
