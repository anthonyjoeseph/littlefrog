insert into SCHOOLS (
  SCHOOL_ID,
  NAME,
  ZIP_CODE
) values (
  555,
  "Brooks Hill Elementary",
  14450
);

insert into SCHOOLS (
  SCHOOL_ID,
  NAME,
  ZIP_CODE
) values (
  557,
  "School Number 16",
  11226
);

insert into TEACHERS (
  NAME
) values (
  "Mrs. Belle"
);

insert into TEACHERS (
  NAME
) values (
  "Mr. Vargas"
);

insert into CLASSES (
  NAME,
  TEACHER_ID,
  SCHOOL_ID,
  YEAR
) values (
  "6th Period English",
  (select TEACHER_ID from TEACHERS where NAME="Mrs. Belle"),
  (select SCHOOL_ID from SCHOOLS where NAME="Brooks Hill Elementary"),
  2017
);

insert into CLASSES (
  NAME,
  TEACHER_ID,
  SCHOOL_ID,
  YEAR
) values (
  "4th Grade",
  (select TEACHER_ID from TEACHERS where NAME="Mr. Vargas"),
  (select SCHOOL_ID from SCHOOLS where NAME="School Number 16"),
  2017
);

insert into READING_CHARACTERS (
  NAME
) values (
  "Squirrel"
);

insert into READING_CHARACTERS (
  NAME
) values (
  "Rocket"
);

insert into READING_CHARACTERS (
  NAME
) values (
  "Orca"
);

insert into STUDENTS (
  EMAIL,
  PASSWORD,
  FIRST_NAME,
  LAST_NAME,
  IS_FEMALE,
  BIRTHDAY,
  READING_CHARACTER_ID,
  CLASS_ID
) values (
  "rio@school.edu",
  "riopass",
  "Rio",
  "Studentalski",
  FALSE,
  '2000-7-04',
  (select READING_CHARACTER_ID from READING_CHARACTERS where NAME="SQUIRREL"),
  (select CLASS_ID from CLASSES where NAME="6th Period English")
);

insert into STUDENTS (
  EMAIL,
  PASSWORD,
  FIRST_NAME,
  LAST_NAME,
  IS_FEMALE,
  BIRTHDAY,
  READING_CHARACTER_ID,
  CLASS_ID
) values (
  "caie@school.edu",
  "caiepass",
  "Caie",
  "Studentalski",
  TRUE,
  '2000-7-04',
  (select READING_CHARACTER_ID from READING_CHARACTERS where NAME="Rocket"),
  (select CLASS_ID from CLASSES where NAME="6th Period English")
);

insert into STUDENTS (
  EMAIL,
  PASSWORD,
  FIRST_NAME,
  LAST_NAME,
  IS_FEMALE,
  BIRTHDAY,
  READING_CHARACTER_ID,
  CLASS_ID
) values (
  "bruno@school.edu",
  "brunopass",
  "Bruno",
  "Studentalski",
  FALSE,
  '2005-2-14',
  (select READING_CHARACTER_ID from READING_CHARACTERS where NAME="Rocket"),
  (select CLASS_ID from CLASSES where NAME="4th Grade")
);

insert into BOOKS (
  TITLE
) values (
  "Little Frog"
);

insert into BOOKS (
  TITLE
) values (
  "Aladdin"
);

insert into READING_LISTS (
  CLASS_ID,
  BOOK_ID
) values (
  (select CLASS_ID from CLASSES where NAME="6th Period English"),
  (select BOOK_ID from BOOKS where TITLE="Little Frog")
);

insert into READING_LISTS (
  CLASS_ID,
  BOOK_ID
) values (
  (select CLASS_ID from CLASSES where NAME="4th Grade"),
  (select BOOK_ID from BOOKS where TITLE="Little Frog")
);


insert into READING_LISTS (
  CLASS_ID,
  BOOK_ID
) values (
  (select CLASS_ID from CLASSES where NAME="6th Period English"),
  (select BOOK_ID from BOOKS where TITLE="Aladdin")
);

insert into QUIZZES (
  TITLE,
  BOOK_ID
) values (
  "Little Frog's Family",
  (select BOOK_ID from BOOKS where TITLE="Little Frog")
);

insert into QUIZZES (
  TITLE,
  BOOK_ID
) values (
  "Little Frog's Emotions",
  (select BOOK_ID from BOOKS where TITLE="Little Frog")
);

insert into QUIZZES (
  TITLE,
  BOOK_ID
) values (
  "Aladdin's Wishes",
  (select BOOK_ID from BOOKS where TITLE="Aladdin")
);

insert into QUIZ_QUESTIONS (
  QUIZ_ID,
  QUESTION_NUMBER,
  QUESTION,
  CORRECT_RESPONSE
) values (
  (select QUIZ_ID from QUIZZES where TITLE="Little Frog's Emotions"),
  1,
  "How does Little Frog feel at the beginning of the book?",
  "Happy"
);

insert into QUIZ_QUESTIONS (
  QUIZ_ID,
  QUESTION_NUMBER,
  QUESTION,
  CORRECT_RESPONSE
) values (
  (select QUIZ_ID from QUIZZES where TITLE="Little Frog's Emotions"),
  2,
  "How does Little Frog feel at the end of the book?",
  "Sad"
);

insert into QUIZ_QUESTIONS (
  QUIZ_ID,
  QUESTION_NUMBER,
  QUESTION,
  CORRECT_RESPONSE
) values (
  (select QUIZ_ID from QUIZZES where TITLE="Little Frog's Family"),
  1,
  "How many parents does Little Frog have?",
  "One"
);

insert into QUIZ_QUESTIONS (
  QUIZ_ID,
  QUESTION_NUMBER,
  QUESTION,
  CORRECT_RESPONSE
) values (
  (select QUIZ_ID from QUIZZES where TITLE="Little Frog's Family"),
  2,
  "What other relative does Little Frog have?",
  "Uncle"
);

insert into QUIZ_QUESTIONS (
  QUIZ_ID,
  QUESTION_NUMBER,
  QUESTION,
  CORRECT_RESPONSE
) values (
  (select QUIZ_ID from QUIZZES where TITLE="Aladdin's Wishes"),
  1,
  "What is Aladdin's first wish?",
  "To be prince"
);

insert into QUIZ_QUESTIONS (
  QUIZ_ID,
  QUESTION_NUMBER,
  QUESTION,
  CORRECT_RESPONSE
) values (
  (select QUIZ_ID from QUIZZES where TITLE="Aladdin's Wishes"),
  2,
  "What is Aladdin's last wish?",
  "To set the Genie free"
);

insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="How does Little Frog feel at the beginning of the book?"),
  "Apprehensive"
);

insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="How does Little Frog feel at the beginning of the book?"),
  "Upset"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="How does Little Frog feel at the end of the book?"),
  "Embarrassed"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="How does Little Frog feel at the end of the book?"),
  "Shy"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="How many parents does Little Frog have?"),
  "2"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="How many parents does Little Frog have?"),
  "3"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="What is Aladdin's first wish?"),
  "For an ice cream sandwich"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="What is Aladdin's first wish?"),
  "To marry the princess"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="What is Aladdin's last wish?"),
  "To marry the princess"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="What is Aladdin's last wish?"),
  "A convertible"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="What other relative does Little Frog have?"),
  "A sister"
);
insert into QUIZ_ALTERNATE_RESPONSES (
  QUIZ_QUESTION_ID,
  ALTERNATE_RESPONSE
) values (
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUESTION="What other relative does Little Frog have?"),
  "A step-mother"
);

insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Rio"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where (QUIZ_ID=1 AND QUESTION_NUMBER=1)),
  "One"
);

insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Rio"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=1 AND QUESTION_NUMBER=2),
  "Uncle"
);

insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Rio"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=2 AND QUESTION_NUMBER=1),
  "Happy"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Rio"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=2 AND QUESTION_NUMBER=2),
  "Sad"
);

insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Rio"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=3 AND QUESTION_NUMBER=1),
  "To be prince"
);

insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Rio"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=3 AND QUESTION_NUMBER=2),
  "To set the Genie free"
);

insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=1 AND QUESTION_NUMBER=1),
  "2"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=1 AND QUESTION_NUMBER=2),
  "A sister"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=2 AND QUESTION_NUMBER=1),
  "Apprehensive"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=2 AND QUESTION_NUMBER=2),
  "Embarrassed"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=3 AND QUESTION_NUMBER=1),
  "To marry the princess"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=3 AND QUESTION_NUMBER=2),
  "To marry the princess"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Bruno"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=1 AND QUESTION_NUMBER=1),
  "One"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Bruno"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=1 AND QUESTION_NUMBER=2),
  "A sister"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Bruno"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=2 AND QUESTION_NUMBER=1),
  "Apprehensive"
);
insert into QUIZ_STUDENT_RESPONSES (
  STUDENT_ID,
  QUIZ_QUESTION_ID,
  STUDENT_RESPONSE
) values (
  (select STUDENT_ID from STUDENTS where FIRST_NAME="Bruno"),
  (select QUIZ_QUESTION_ID from QUIZ_QUESTIONS where QUIZ_ID=2 AND QUESTION_NUMBER=2),
  "Sad"
);