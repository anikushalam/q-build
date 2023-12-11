import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl, prepareHeaders } from "./configApi";
import { fetchMessage, sendMessage, chatMessage, userChat, circleArray, retrieveChats, searchUser, sendMessageDocument, forwardMessageArray, deleteMessage, instituteRecentGroup, newGroupChat, sendSupportMessage } from "./chatAPIBuilder";

export const chatAPI = createApi({
  reducerPath: "chatAPI",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: prepareHeaders }),
  endpoints: (builder) => ({
    fetchChatMessage: fetchMessage(builder),
    sendChatMessage: sendMessage(builder),
    sendChatMessageDocument: sendMessageDocument(builder),
    chatAccess: chatMessage(builder),
    getUserChat: userChat(builder),
    getUserCircleArray: circleArray(builder),
    getAllChat: retrieveChats(builder),
    getSearchUser: searchUser(builder),
    forwardMessage: forwardMessageArray(builder),
    deleteOneChatMessage: deleteMessage(builder),
    instituteGroupChat: instituteRecentGroup(builder),
    newGroupInstitute: newGroupChat(builder),
    sendSupportChatMessage: sendSupportMessage(builder)
  }),
});

export const {
    useFetchChatMessageQuery,
    useSendChatMessageMutation,
    useChatAccessMutation,
    useGetUserChatQuery,
    useGetUserCircleArrayQuery,
    useGetAllChatQuery,
    useGetSearchUserQuery,
    useSendChatMessageDocumentMutation,
    useForwardMessageMutation,
    useDeleteOneChatMessageMutation,
    useInstituteGroupChatQuery,
    useNewGroupInstituteMutation,
    useSendSupportChatMessageMutation
} = chatAPI;
