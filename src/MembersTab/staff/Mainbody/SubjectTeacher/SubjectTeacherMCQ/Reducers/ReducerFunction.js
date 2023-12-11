const reducerFunction = (state, action) => {
  if (action.type === "TEST_SET_LIST") {
    return {
      value: action.type,
    };
  } else if (action.type === "CREATE_SET") {
    return {
      value: action.type,
    };
  } else if (action.type === "SEARCH_QUESTION") {
    return {
      value: action.type,
    };
  } else if (action.type === "TEST_SET_VIEW") {
    return {
      value: action.type,
    };
  } else if (action.type === "TAKE_TEST") {
    return {
      value: action.type,
    };
  } else if (action.type === "EDIT_TEST") {
    return {
      value: action.type,
    };
  } else {
    return { value: state };
  }
};

export { reducerFunction };
