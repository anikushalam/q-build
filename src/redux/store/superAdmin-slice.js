import { createSlice } from "@reduxjs/toolkit";

const adminChange = createSlice({
  name: "adminChange",
  initialState: {
    users: [],
    institutes: []
  },
  reducers: {
    userCollection(state, action) {
      if (action.payload?.user !== undefined) {
        var duplicate_user = [...state.users, ...action.payload?.user];
        const redundancy_user = [...new Set(duplicate_user.map(JSON.stringify))].map(JSON.parse);
        for (let parent = 0; parent < redundancy_user?.length; parent++) {
          for (let child = parent + 1; child < redundancy_user?.length; child++) {
            if (redundancy_user[parent]._id === redundancy_user[child]._id)
              redundancy_user.splice(child, 1);
          }
        }
        state.users = redundancy_user
      }
    },
    instituteCollection(state, action){
      if (action.payload?.institute !== undefined) {
        var duplicate_ins = [...state.institutes, ...action.payload?.institute];
        const redundancy_ins = [...new Set(duplicate_ins.map(JSON.stringify))].map(JSON.parse);
        for (let parent = 0; parent < redundancy_ins?.length; parent++) {
          for (let child = parent + 1; child < redundancy_ins?.length; child++) {
            if (redundancy_ins[parent]._id === redundancy_ins[child]._id)
              redundancy_ins.splice(child, 1);
          }
        }
        state.institutes = redundancy_ins
      }
    }
  }
});

export const adminChangeAction = adminChange.actions;

export default adminChange.reducer;
