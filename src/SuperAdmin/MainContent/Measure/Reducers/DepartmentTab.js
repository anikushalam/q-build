import React from "react";
// import { useCreatePostWithTextMutation } from "../../../../services/postApi";
// import {
//   useAllDepartmentQuery,
//   useAddDepartmentMutation,
// } from "../../../../services/InstituteDepartment";

import { reducerFunction } from "./ReducerFunction";

const useTabReducer = () => {
  const [changeTab, dispatch] = React.useReducer(reducerFunction, {
    value: "ACTIVE_USERS_TAB",
  });
  // const [post] = useCreatePostWithTextMutation();
  // const [allDepartment] = useAddDepartmentMutation();
  // const { data } = useAllDepartmentQuery();

  const tabHandler = async (state) => {
    // const me = post({
    //   state,
    //   id: "sfgsdhfgshfgshdgfshgfhsgfjsgfhsghjfgshfgsj",
    // });
    // console.log("This is me", me);
    dispatch({
      type: state,
    });
  };
  return [changeTab, tabHandler];
};

export { useTabReducer };
