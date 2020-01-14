const initialState = {
  questions: [],
  score: 0,
  answer: ""
};

const reducer = (state = initialState, action) => {
  const copyState = { ...state };
  switch (action.type) {
    case "START":
      copyState.questions = action.value;
      return copyState;
    case "CORRECT": 
    return {
      ...state,
      score: state.score += 1,
      answer: ""
    }
    case "ANSWER":
      return {
        ...state,
        answer: action.answer
      }
    default:
      return copyState;
  }
};

export default reducer;
