import React from "react";

import { reducerFunction } from "./ReducerFunction";

const useTabReducer = () => {
  const [mcqTab, dispatch] = React.useReducer(reducerFunction, {
    value: "TEST_SET_LIST",
  });

  const tabHandler = async (state) => {
    dispatch({
      type: state,
    });
  };
  return [mcqTab, tabHandler];
};

export { useTabReducer };
