// __tests__/DismissableFullscreenPopup-test.js
import 'react-native';
import React from 'react';
import QuizMultChoice from '../app/scenes/modal/QuizPage/QuizMultChoice';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <QuizMultChoice
      question="What is my favorite food?"
      options={[
        "Bananas",
        "Razors",
        "Fried Chicken",
        "Pencil Shavings"
      ]}
      correctIndex={2}
      onCorrect={ ( ) => { } }
      onWrong={ ( ) => { } }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
