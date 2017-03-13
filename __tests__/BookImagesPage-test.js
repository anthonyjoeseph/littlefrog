// __tests__/BookImagesPage-test.js
import 'react-native';
import React from 'react';
import BookImagesPage from '../app/scenes/main/BookReader/viewpager/BookImagesPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BookImagesPage
     source={{uri: "page1"}}
     animations={[
       {
         "rect" :{
           "x" : 120,
           "y" : 120,
           "width" : 70,
           "height" : 60
         },
         "resource" : "spongebob"
       },
       {
         "rect" :{
           "x" : 320,
           "y" : 220,
           "width" : 170,
           "height" : 60
         },
         "resource" : "bored_animation"
       }
     ]}
     questionIcons={[
       {
         "icon" : {
           "rect" :{
             "x" : 0.5,
             "y" : 0.5,
             "width" : 0.15,
             "height" : 0.35
           },
           "resource" : "frog_outline"
         },
         "questions" : [
           {
             "question" : "What is my favorite food?",
             "options" : [
               "Bananas",
               "Razors",
               "Fried Chicken",
               "Pencil Shavings"
             ],
             "correctIndex" : 2
           },
           {
             "question" : "What is my favorite food?",
             "options" : [
               "Bananas",
               "Razors",
               "Fried Chicken",
               "Pencil Shavings"
             ],
             "correctIndex" : 2
           }
         ]
       },
       {
         "icon" : {
           "rect" :{
             "x" : 0.6,
             "y" : 0.6,
             "width" : 0.2,
             "height" : 0.1
           },
           "resource" : "frog_outline"
         },
         "questions" : [
           {
             "question" : "Whddat is my favorite food?",
             "options" : [
               "Banddanas",
               "Razors",
               "Fridded Chicken",
               "Pencil Shavings"
             ],
             "correctIndex" : 2
           }
         ]
       }
     ]}
     onQuizSelect={ () => {}}
     width={500}
     height={500} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
