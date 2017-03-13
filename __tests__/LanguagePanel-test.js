// __tests__/LanguagePanel-test.js
import 'react-native';
import React from 'react';
import LanguagePanel from '../app/scenes/main/BookReader/panels/LanguagePanel';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <LanguagePanel
      style={{
        bottom: 150,
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: 0,
        height: 100
      }}
      onChangeLanguage={ (character) => { } }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
