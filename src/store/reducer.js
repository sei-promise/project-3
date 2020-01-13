const initialState = {
  apiOptions: {
    amount: 5, // default value for number of questions
    category: "any", // default value for category the api will choose random categories for the questions
    level: "any", // default value for difficulty the api will choose random level for the questions
    type: "multiple" // default value for the type of questions
  },
  questions: [],

};

const reducer = (state = initialState, action) => {
  const copyState = { ...state };

  switch (action.type) {
    case "CHANGE_AMOUNT":
      copyState.apiOptions.amount = action.value;
      return copyState;
    case "ADD_Q":
        copyState.questions = action.value;
        return copyState;
        

    default:
      return copyState;
  }
};

export default reducer;
