// __tests__/BookImages-test.js
import 'react-native';
import React from 'react';
import BookImages from '../app/scenes/main/BookReader/viewpager/BookImages';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  var testData = require('./testData/TestBookData.json');

  const tree = renderer.create(
    <BookImages
      style={{color:'red'}}
      onPageScroll={ () => {} }
      pagesData={ testData.pages }
      onQuizSelect={ () => {} }
      width={ 400 }
      height={ 200 } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
