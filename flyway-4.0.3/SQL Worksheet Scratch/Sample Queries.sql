/* select all the students in Mrs. Belle's class */
select FIRST_NAME, LAST_NAME
from STUDENTS
where 
  CLASS_ID=(
    select CLASS_ID from CLASSES where TEACHER_ID=(
      select TEACHER_ID from TEACHERS where NAME="Mrs. Belle"
    )
  )
;

/* select all of Caie's answers for all quizzes she took*/

select q.TITLE, q.QUESTION, q.CORRECT_RESPONSE, sr.STUDENT_RESPONSE
from
  (
    select bq.TITLE, QUESTION, QUIZ_QUESTION_ID, CORRECT_RESPONSE from QUIZ_QUESTIONS 
        inner join
          (
            select QUIZ_ID, TITLE from QUIZZES
            inner join
            (
              select BOOK_ID from READING_LISTS where CLASS_ID=(
                select CLASS_ID from STUDENTS where FIRST_NAME="Caie"
              )
            ) bks on QUIZZES.BOOK_ID=bks.BOOK_ID
          ) bq
        on QUIZ_QUESTIONS.QUIZ_ID=bq.QUIZ_ID
  ) q
  inner join (
    select STUDENT_RESPONSE, QUIZ_QUESTION_ID from QUIZ_STUDENT_RESPONSES where STUDENT_ID=(
      select STUDENT_ID from STUDENTS where FIRST_NAME="Caie"
    )
  ) sr on q.QUIZ_QUESTION_ID=sr.QUIZ_QUESTION_ID;
  
/* get the number of correct answers for each quiz Bruno took */

select COUNT(ans.CORRECT_RESPONSE) as 'correct responses' from (
  select q.CORRECT_RESPONSE, sr.STUDENT_RESPONSE
  from
    (
      select bq.TITLE, QUESTION, QUIZ_QUESTION_ID, CORRECT_RESPONSE from QUIZ_QUESTIONS 
          inner join
            (
              select QUIZ_ID, TITLE from QUIZZES
              inner join
              (
                select BOOK_ID from READING_LISTS where CLASS_ID=(
                  select CLASS_ID from STUDENTS where FIRST_NAME="Bruno"
                )
              ) bks on QUIZZES.BOOK_ID=bks.BOOK_ID
            ) bq
          on QUIZ_QUESTIONS.QUIZ_ID=bq.QUIZ_ID
    ) q
    inner join (
      select STUDENT_RESPONSE, QUIZ_QUESTION_ID from QUIZ_STUDENT_RESPONSES where STUDENT_ID=(
        select STUDENT_ID from STUDENTS where FIRST_NAME="Bruno"
      )
    ) sr on q.QUIZ_QUESTION_ID=sr.QUIZ_QUESTION_ID
  ) ans
  where ans.CORRECT_RESPONSE=ans.STUDENT_RESPONSE;
  
  