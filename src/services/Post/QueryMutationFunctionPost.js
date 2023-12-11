export const withQuery = (builder, url) => {
  console.log(builder, url);
  return builder.query({
    query: () => `${url}`,
  });
};

export const withMutation = (builder, method, url) => {
  return builder.mutation({
    query: (data) => ({
      url: `${url}`,
      method: `${method}`,
      body: data,
    }),
  });
};
const postUrl = "/api/v1/ins/post";
const postUrlUser = "/api/v1/user/post";
const postUrlUser1 = "/api/v1/user/post/v2";
const subUrlPost = "/api/v1";
const subUrlQuestion = "/api/v1/post/question";
const asUser = "USER";
// const asInstitute=""
export const dashboardPostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/${data.id}/all/posts?page=${data.page}&limit=${data.limit}`
        // : `${postUrlUser}/${data.id}/all/user/posts?page=${data.page}&limit=${data.limit}`,
    : `${postUrlUser1}/${data.id}/all/user/posts?page=${data.page}&limit=${data.limit}`,
  });
};

export const profilePostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/${data.id}/all/profile/posts?page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/${data.id}/all/user/profile/posts?page=${data.page}&limit=${data.limit}`,
  });
};

export const profileSavedPostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/${data.id}/saved/all/posts?page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/${data.id}/all/user/saved/posts?page=${data.page}&limit=${data.limit}`,
  });
};

export const profileTagPostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/${data.id}/tag/all/posts?page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/${data.id}/all/user/tag/posts?page=${data.page}&limit=${data.limit}`,
  });
};

export const addTagPeopleFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/tag?search=${data.search}&page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/tag?search=${data.search}&page=${data.page}&limit=${data.limit}`,
  });
};

export const createPostTextFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/${data.id}`
          : `${postUrlUser}/${data.id}`,
      method: `${method}`,
      body: data.post,
    }),
  });
};

export const createPostImageFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/${data.id}/image`
          : `${postUrlUser}/${data.id}/image`,
      method: `${method}`,
      body: data.post,
    }),
  });
};
export const createPostVideoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/${data.id}/video`
          : `${postUrlUser}/${data.id}/video`,
      method: `${method}`,
      body: data.post,
    }),
  });
};

export const createPostPollQuestionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/question/poll/${data.id}`
          : `${subUrlPost}/poll/question/${data.id}`,
      method: `${method}`,
      body: data.post,
    }),
  });
};

export const createPostQuestionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/question/${data.id}/text`
          : `${subUrlQuestion}/${data.id}/text`,
      method: `${method}`,
      body: data.post,
    }),
  });
};

export const updatePostFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/update/${data.pid}`
          : `${postUrlUser}/update/${data.pid}`,
      method: `${method}`,
      body: data.postUpdate,
    }),
  });
};

export const deletePostFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/${data.id}/deleted/${data.pid}`
          : `${postUrlUser}/${data.id}/deleted/${data.pid}`,
      method: `${method}`,
    }),
  });
};

export const deletePostQuestionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/question/${data.id}/deleted/${data.pid}`
          : `${subUrlQuestion}/${data.id}/deleted/${data.pid}`,
      method: `${method}`,
    }),
  });
};

export const reactionPostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/reaction/${data.pid}?page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/reaction/${data.pid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const likePostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/like/${data.pid}`
        : `${postUrlUser}/like/${data.pid}`,
  });
};
export const savePostFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/save/${data.pid}`
        : `${postUrlUser}/save/${data.pid}`,
  });
};

export const getAllAnswerFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrlQuestion}/answer/${data.pid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const getAllCommentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/comment/${data.pid}?page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/comment/${data.pid}?page=${data.page}&limit=${data.limit}`,
  });
};
export const postCommentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/comment/${data.pid}`
          : `${postUrlUser}/comment/${data.pid}`,
      method: `${method}`,
      body: data.comment,
    }),
  });
};
export const getAllReplyCommentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/comment/child/${data.pcid}?page=${data.page}&limit=${data.limit}`
        : `${postUrlUser}/comment/child/${data.pcid}?page=${data.page}&limit=${data.limit}`,
  });
};
export const postReplyCommentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data.viewAs !== asUser
          ? `${postUrl}/comment/child/${data.pcid}`
          : `${postUrlUser}/comment/child/${data.pcid}`,
      method: `${method}`,
      body: data.replyComment,
    }),
  });
};
export const likeCommentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs !== asUser
        ? `${postUrl}/${data.id}/comment/child/like/${data.cid}`
        : `${postUrlUser}/${data.id}/comment/child/like/${data.cid}`,
  });
};

//new
export const rePostKnowsFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrlUser}/${data.id}/all/user/re/posts?page=${data.page}&limit=${data.limit}`,
  });
};

export const postReportFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/user/${data.id}/user-post/${data.pid}/report`,
      method: `${method}`,
      body: data.reportPost,
    }),
  });
};

export const postInstituteReportFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/ins/${data.id}/ins-post/${data.pid}/report`,
      method: `${method}`,
      body: data.reportPost,
    }),
  });
};

export const pollAnswerFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/poll/question/vote/${data.pid}`,
      method: `${method}`,
      body: data.vote,
    }),
  });
};

export const oneQuestionFunction = (builder) => {
  return builder.query({
    query: (pid) => `${subUrlQuestion}/one/${pid}/question`,
  });
};

export const questionLikeFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlQuestion}/like/${data.aid}`,
  });
};

export const questionDislikeFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlQuestion}/dislike/${data.aid}`,
  });
};

export const questionSaveFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlQuestion}/save/${data.pid}`,
  });
};

export const questionAnswerSaveFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlQuestion}/answer/save/${data.aid}`,
  });
};

export const questionHelpFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlQuestion}/help/to/other/${data.pid}`,
  });
};

export const questionAddAnswerFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlQuestion}/answer/new/${data.pid}?post_type=${data.postType}`,
      method: `${method}`,
      body: data.answer,
    }),
  });
};

export const questionAnswerDeleteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlQuestion}/${data.pid}/deleted/${data.aid}/answer`,
      method: `${method}`,
    }),
  });
};

export const questionAllReplyAnswerFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrlQuestion}/answer/reply/${data.paid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const questionAddReplyAnswerFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlQuestion}/answer/reply/new/${data.paid}`,
      method: `${method}`,
      body: data.replyAnswer,
    }),
  });
};

export const questionAnswerRepostFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlQuestion}/answer/new/repost/${data.pid}?post_type=${data.postType}`,
      method: `${method}`,
      body: data.rePostAnswer,
    }),
  });
};

export const questionRepostLikeFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlQuestion}/repost/${data.rpid}/like/${data.aid}`,
  });
};

export const profilePostQuestionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrlPost}/user/${data.id}/know/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const commentOnOffFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/extra/${data.pid}/comment/feature`,
      method: method,
      body: data.commentFeature,
    }),
  });
};

export const blockUserByUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/user/report/block/user?blockId=${data.blockId}`,
      method: `${method}`,
    }),
  });
};
export const unblockUserByUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/user/unblock/user?blockId=${data.blockId}`,
      method: `${method}`,
    }),
  });
};
export const blockInstituteByUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/user/report/block/institute?blockId=${data.blockId}`,
      method: `${method}`,
    }),
  });
};
export const unblockInstituteByUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/user/unblock/institute?blockId=${data.blockId}`,
      method: `${method}`,
    }),
  });
};
export const blockInstituteByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/ins/report/block/institute?blockId=${data.blockId}`,
      method: `${method}`,
    }),
  });
};
export const unblockInstituteByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/ins/unblock/institute?blockId=${data.blockId}`,
      method: `${method}`,
    }),
  });
};

export const reportAccountUserToUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/extra/${data.rid}/report/enduser/account/${data.id}?accountStatus=${data.accountStatus}`,
      method: `${method}`,
    }),
  });
};

export const postSuggestionListUserFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrlPost}/prod/access/all/recommendation/ins/user/by/${data.id}?expand_search=${data.expand_search}`,
  });
};

export const getHashtagListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrlPost}/hashtag/all/array?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getOneHashtagDetailFunction = (builder) => {
  return builder.query({
    query: (data) => `${subUrlPost}/hashtag/${data.hid}/query`,
  });
};

export const getOneHashtagPostListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrlPost}/hashtag/${data.hid}/query/post?page=${data.page}&limit=${data.limit}`,
  });
};

export const followOneHashtagFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrlPost}/hashtag/follow?hid=${data.hid}`,
      method: `${method}`,
    }),
  });
};
