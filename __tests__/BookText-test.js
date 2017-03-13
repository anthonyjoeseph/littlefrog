// __tests__/BookText-test.js
import 'react-native';
import React from 'react';
import BookText from '../app/scenes/main/BookReader/panels/BookText';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BookText
      style={{
        position:'absolute',
        zIndex: 1,
        bottom: 0,
        height: 100,
        left: 0,
        width: 500
      }}
      pageNumber={ 0 } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
