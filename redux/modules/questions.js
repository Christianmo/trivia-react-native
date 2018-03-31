import axios  from 'axios';

const UPDATE_QUESTION = 'UPDATE_QUESTION';
const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

const decorateQuestions = (questionsArr) => {
  const list = questionsArr.map((question) => {
    const answersLength = question.incorrect_answers.length + 1;
    const i = Math.floor(Math.random() * answersLength);
    const answers = [...question.incorrect_answers];

    answers.splice(i, 0, question.correct_answer);

    return {
      ...question,
      answers,
      is_correct_answer: false,
      correct_answer_index: i,
    };
  });

  return list;
}

const updatedQuestions = (state, questionIndex, answerIndex) => {
  const newState = [...state];
  const updatedQuestion = {...newState[questionIndex]};

  newState[questionIndex].is_correct_answer = (answerIndex === updatedQuestion.correct_answer_index);

  return newState;
}

export const fetchQuestion = (url) => async dispatch => {  
  try {
    const results = await axios.get(url);

    return dispatch({
      type: FETCH_QUESTIONS,
      payload: {
        data: decorateQuestions(results.data.results),
      }
    });
  } catch (err) {
    return err;
  }
}

export const updateQuestion = (questionIndex, answerIndex) => {
  return {
    type: UPDATE_QUESTION,
    payload: {
      questionIndex: questionIndex,
      answerIndex: answerIndex,
    }
  }
}

export default questionReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_QUESTIONS:
      return payload.data;
    case UPDATE_QUESTION:
      return updatedQuestions(state, payload.questionIndex, payload.answerIndex);
    default:
      return state;
  }
};