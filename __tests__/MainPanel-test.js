// __tests__/MainPanel-test.js
import 'react-native';
import React from 'react';
import MainPanel from '../app/scenes/main/BookReader/panels/MainPanel';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MainPanel
      style={{
        zIndex: 2,
        width:50,
        backgroundColor:'transparent'
      }}
      onPressHome={ () => { } }
      onPressCharacter={ (newCharacter) => { } }
      onPressLanguage={ (newLanguage) => { } }
      onPressBookText={ (newLanguage) => { } }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
