// __tests__/DismissableFullscreenPopup-test.js
import {View, Text} from 'react-native';
import React from 'react';
import ViewPager from '../app/scenes/main/BookReader/viewpager/ViewPager';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ViewPager
      numPages={9}
      renderRange={3}
      onPageScroll={ () => {} }>
      <View><Text>Testing 1</Text></View>
      <View><Text>Testing 2</Text></View>
      <View><Text>Testing 3</Text></View>
      <View><Text>Testing 4</Text></View>
      <View><Text>Testing 5</Text></View>
      <View><Text>Testing 6</Text></View>
      <View><Text>Testing 7</Text></View>
      <View><Text>Testing 8</Text></View>
      <View><Text>Testing 9</Text></View>
    </ViewPager>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
