const initialState = {
  questions: [],
  score: 0,
  answer: "",
  correct_number: 0,
  incorrect_number: 0
};

const reducer = (state = initialState, action) => {
  const copyState = { ...state };
  switch (action.type) {
    case "START":
      copyState.questions = action.value;
      copyState.score = 0;
      copyState.answer = "";
      copyState.correct_number = 0;
      copyState.incorrect_number = 0;
      return copyState;

    case "CORRECT":
      return {
        ...state,
        score: (state.score += 5),
        answer: "",
        correct_number: (state.correct_number += 1)
      };

    case "INCORRECT_NUMBER":
      copyState.incorrect_number += 1;
      return copyState;

    case "ANSWER":
      return {
        ...state,
        answer: action.answer
      };
    default:
      return copyState;
  }
};

export default reducer;
