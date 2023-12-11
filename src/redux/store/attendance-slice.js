import { createSlice } from "@reduxjs/toolkit";

const attendanceStore = createSlice({
  name: "attendanceStore",
  initialState: {
    subjectTeacher: [
      //   {
      //     subjectId: "",
      //     ldate: "",
      //     presentCount: 0,
      //     absentCount: 0,
      //     presentStudent: [],
      //     absentStudent: [],
      //     alreadyMark:""
      //   },
    ],
    classTeacher: [
      //   {
      //     clsId: "",
      //     ldate: "",
      //     presentCount: 0,
      //     absentCount: 0,
      //     presentStudent: [],
      //     absentStudent: [],
      //     alreadyMark: "",
      //   },
    ],
  },
  reducers: {
    addSubjectAttendance(state, action) {
      if (action.payload?.subjectId) {
        let obj = {
          subjectId: action.payload?.subjectId,
          alreadyMark: action.payload?.alreadyMark,
          ldate: action.payload?.ldate,
          presentCount: action.payload?.presentStudent?.length,
          absentCount: action.payload?.absentStudent?.length,
          presentStudent: action.payload?.presentStudent,
          absentStudent: action.payload?.absentStudent,
        };
        state.subjectTeacher.push(obj);
      }
    },
    updateSubjectAttendance(state, action) {
      if (action.payload?.subjectId) {
        for (let sub of state.subjectTeacher) {
          if (sub?.subjectId === action.payload?.subjectId) {
            if (sub?.ldate === action.payload?.ldate) {
              sub.presentStudent = [
                ...sub.presentStudent,
                ...action.payload?.presentStudent,
              ];
              sub.absentStudent = [
                ...sub.absentStudent,
                ...action.payload?.absentStudent,
              ];

              sub.presentStudent = sub.presentStudent?.filter((ids) =>
                action.payload?.absentStudent?.includes(ids) ? null : ids
              );
              sub.absentStudent = sub.absentStudent?.filter((ids) =>
                action.payload?.presentStudent?.includes(ids) ? null : ids
              );
              sub.presentCount = sub.presentStudent?.length;
              sub.absentCount = sub.absentStudent?.length;
              break;
            }
          }
        }
      }
    },

    addClassAttendance(state, action) {
      if (action.payload?.clsId) {
        let obj = {
          clsId: action.payload?.clsId,
          alreadyMark: action.payload?.alreadyMark,
          ldate: action.payload?.ldate,
          presentCount: action.payload?.presentStudent?.length,
          absentCount: action.payload?.absentStudent?.length,
          presentStudent: action.payload?.presentStudent,
          absentStudent: action.payload?.absentStudent,
        };
        state.classTeacher.push(obj);
      }
    },
    updateClassAttendance(state, action) {
      if (action.payload?.clsId) {
        for (let sub of state.classTeacher) {
          if (sub?.clsId === action.payload?.clsId) {
            if (sub?.ldate === action.payload?.ldate) {
              sub.presentStudent = [
                ...sub.presentStudent,
                ...action.payload?.presentStudent,
              ];
              sub.absentStudent = [
                ...sub.absentStudent,
                ...action.payload?.absentStudent,
              ];

              sub.presentStudent = sub.presentStudent?.filter((ids) =>
                action.payload?.absentStudent?.includes(ids) ? null : ids
              );
              sub.absentStudent = sub.absentStudent?.filter((ids) =>
                action.payload?.presentStudent?.includes(ids) ? null : ids
              );
              sub.presentCount = sub.presentStudent?.length;
              sub.absentCount = sub.absentStudent?.length;
              break;
            }
          }
        }
      }
    },
  },
});

export const attendanceStoreAction = attendanceStore.actions;

export default attendanceStore.reducer;
