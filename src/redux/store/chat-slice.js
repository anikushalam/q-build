import { createSlice } from "@reduxjs/toolkit";

const chatChange = createSlice({
  name: "chatChange",
  initialState: {
    chats: [],
    selectedChat: '',
    notification: '',
    messageArray: []
  },
  reducers: {
    chatQuery(state, action) {
      state.chats = action.payload.chats;
      state.selectedChat = action.payload.selectedChat;
      state.notification = action.payload.notification;
      state.messageArray = action.payload.messageArray;
    }
  },
});

export const chatChangeAction = chatChange.actions;

export default chatChange.reducer;
