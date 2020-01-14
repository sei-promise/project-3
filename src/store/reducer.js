const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  const copyState = { ...state };

  switch (action.type) {
    case "START":
      copyState.questions = action.value;
      return copyState;

    default:
      return copyState;
  }
};

export default reducer;
