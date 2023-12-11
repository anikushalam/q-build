const userId = localStorage.getItem('user')


export const fetchMessage = (builder) => {
    return builder.query({
        query: (chatId) =>`/message/${chatId}`,
    })
}

export const sendMessage = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/message`,
          method: "POST",
          body: data
        }),
    })
}

export const sendMessageDocument = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/message/document`,
          method: "POST",
          body: data
        }),
    })
}

export const chatMessage = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/chat`,
          method: "POST",
          body: data
        }),
    })
}

export const userChat = (builder) => {
    return builder.query({
        query: (id) =>`/user/${id}/dash`,
    })
}

export const circleArray = (builder) => {
    return builder.query({
        query: (id) =>`/user/${id}/circle/array/query`,
    })
}

export const retrieveChats = (builder) =>{
    return builder.query({
        query: () => `/chat`
    })
}

export const searchUser = (builder) =>{
    return builder.query({
        query: (search) => `/user/circle/user/?search=${search}`
    })
}

export const forwardMessageArray = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/message/forward`,
          method: "POST",
          body: data
        }),
    })
}

export const deleteMessage = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/message/${data.mid}/chat/dump/${data.cid}`,
          method: "DELETE",
          body: data
        }),
    })
}

export const instituteRecentGroup = (builder) => {
    return builder.query({
      query: () => ({
        url: `/chat/institute/recent/group/${userId}`
      })
    })
}

export const newGroupChat = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/chat/new/group`,
          method: "POST",
          body: data
        }),
    })
}

export const sendSupportMessage = (builder) => {
    return builder.mutation({
        query: (data) => ({
          url: `/message/support/admin/message`,
          method: "POST",
          body: data
        }),
    })
}