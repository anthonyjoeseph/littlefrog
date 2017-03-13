// __tests__/QuizPage-test.js
import 'react-native';
import React from 'react';
import QuizPage from '../app/scenes/modal/QuizPage/QuizPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <QuizPage
      question="What is my favorite food?"
      options={[
        "Bananas",
        "Razors",
        "Fried Chicken",
        "Pencil Shavings"
      ]}
      correctIndex={2}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
