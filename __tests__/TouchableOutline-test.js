// __tests__/BookInfoPage-test.js
import 'react-native';
import React from 'react';
import TouchableOutline from '../app/scenes/main/BookReader/viewpager/TouchableOutline';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <TouchableOutline
      left={0.5}
      bottom={0.5}
      width={0.15}
      height={0.35}
      tintColor={'red'}
      source={'frog_outline'}
      onPress={ ()=>{} }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
