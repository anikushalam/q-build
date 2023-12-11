const reducerFunction = (state, action) => {
  if (action.type === "TEST_SET_LIST") {
    return {
      value: action.type,
    };
  } else if (action.type === "TAKE_TEST") {
    return {
      value: action.type,
    };
  } else if (action.type === "QUESTION_LIST") {
    return {
      value: action.type,
    };
  } else if (action.type === "VIEW_CREATED_QUESTION") {
    return {
      value: action.type,
    };
  } else if (action.type === "VIEW_DETAILED_QUESTION") {
    return {
      value: action.type,
    };
  } else if (action.type === "TAKE_TEST_SUBMIT") {
    return {
      value: action.type,
    };
  } else if (action.type === "TEST_NAME_INPUT") {
    return {
      value: action.type,
    };
  } else if (action.type === "SELECT_QUESTIONS") {
    return {
      value: action.type,
    };
  } else if (action.type === "SAVE_TEST") {
    return {
      value: action.type,
    };
  } else if (action.type === "CREATE_QUESTION") {
    return {
      value: action.type,
    };
  } else {
    return { value: state };
  }
};

export { reducerFunction };
