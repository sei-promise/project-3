const initialState = {
  apiOptions: {
    amount: 5, // default value for number of questions
    category: "any", // default value for category the api will choose random categories for the questions
    level: "any", // default value for difficulty the api will choose random level for the questions
    type: "multiple" // default value for the type of questions
  }
};

const reducer = (state = initialState, action) => {
  const copyState = { ...state };

  switch (action.type) {
    case "CHANGE_AMOUNT":
      copyState.apiOptions.amount = action.value;
      break;

    default:
      return copyState;
  }
};

export default reducer;
