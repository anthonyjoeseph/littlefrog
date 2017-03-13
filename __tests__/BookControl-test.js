// __tests__/BookImages-test.js
import 'react-native';
import React from 'react';
import BookControl from '../app/scenes/main/BookReader/BookControl';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  var testData = require('./testData/TestBookData.json');

  const tree = renderer.create(
    <BookControl
      style={{
        bottom: 50,
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: 0,
        height: 100
      }}
      pagesData={ testData.pages }
      screenWidth={ 300 }
      screenHeight={ 200 }
      picWidth={ 200 }
      onQuizSelect={ () => {} }
      onChangePage={ () => {} }
      pageNumber={ 2 }
      onChangeCharacter={ (newCharacter) => {} }
      onChangeLanguage={ (newLanguage) => {} }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
