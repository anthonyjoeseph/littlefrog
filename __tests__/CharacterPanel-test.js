// __tests__/CharacterPanel-test.js
import 'react-native';
import React from 'react';
import CharacterPanel from '../app/scenes/main/BookReader/panels/CharacterPanel';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CharacterPanel
      style={{
        bottom: 75,
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: 0,
        height: 100
      }}
      onChangeCharacter={ (character) => { } }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
