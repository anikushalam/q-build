const reducerFunction = (state, action) => {
  if (action.type === "ACTIVE_USERS_TAB") {
    return {
      value: action.type,
    };
  } else if (action.type === "ACTIVE_INSTITUTES_TAB") {
    return {
      value: action.type,
    };
  } else if (action.type === "TOTAL_POST_TAB") {
    return {
      value: action.type,
    };
  } else if (action.type === "TOTAL_PAYMENT_TAB") {
    return {
      value: action.type,
    };
  } else if (action.type === "TOTAL_PLAYLIST_TAB") {
    return {
      value: action.type,
    };
  } else {
    return { value: state };
  }
};

export { reducerFunction };
