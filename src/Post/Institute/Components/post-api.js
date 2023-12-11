import {
  useGetDashboardPostQuery,
  useGetProfilePostQuery,
  useGetProfileSavedPostQuery,
  useGetProfileTagPostQuery,
  useAddTagPeopleQuery,
  useCreatePostWithTextMutation,
  useCreatePostWithImageMutation,
  useCreatePostWithVideoMutation,
  useCreatePostWithPollQuestionMutation,
  useCreatePostWithQuestionMutation,
  useCreatePostUpdateMutation,
  useCreatePostDeleteMutation,
  useCreatePostDeleteQuestionMutation,
  useReactionPeoplePostQuery,
  useLikePostQuery,
  useSavePostQuery,
  useAllCommentPostQuery,
  useAllAnswerPostQuestionQuery,
  useOneCommentPostMutation,
  useAllReplyCommentQuery,
  useOneReplyCommentMutation,
  useLikeCommentQuery,
  useRePostKnowsQuery,
  usePostReportMutation,
  usePollAnswerMutation,
  useOneQuestionQuery,
  useQuestionLikeQuery,
  useQuestionDislikeQuery,
  useQuestionSaveQuery,
  useQuestionAnswerSaveQuery,
  useQuestionAddAnswerMutation,
  useQuestionAnswerDeleteMutation,
  useQuestionAllReplyAnswerQuery,
  useQuestionAddReplyAnswerMutation,
  useQuestionAnswerRepostMutation,
  useQuestionRepostLikeQuery,
  useProfilePostQuestionQuery,
  usePostInstituteReportMutation,
  useQuestionHelpQuery,
  useCommentOnOffMutation,
  useBlockUserByUserMutation,
  useUnblockUserByUserMutation,
  useBlockInstituteByUserMutation,
  useUnblockInstituteByUserMutation,
  useBlockInstituteByInstituteMutation,
  useUnblockInstituteByInstituteMutation,
  useReportAccountUserToUserMutation,
  usePostSuggestionListUserQuery,
  useGetHashtagListQuery,
  useGetOneHashtagDetailQuery,
  useGetOneHashtagPostListQuery,
  useFollowOneHashtagMutation,
} from "../../../services/Post/postApiDynamic";

export const useDashAllPost = (id) => {
  const { data, refetch } = useGetDashboardPostQuery(id.data, {
    skip: id.skip,
  });
  return { allDashPost: data, allDashPostRefetch: refetch };
};
export const useProfileAllPost = (id) => {
  const { data, refetch } = useGetProfilePostQuery(id.data, { skip: id.skip });
  return { allProfilePost: data, allProfilePostRefetch: refetch };
};

export const useProfileAllSavedPost = (id) => {
  const { data, refetch } = useGetProfileSavedPostQuery(id.data, {
    skip: id.skip,
  });
  return { allProfileSavedPost: data, allProfileSavedPostRefetch: refetch };
};

export const useProfileAllTagPost = (id) => {
  const { data, refetch } = useGetProfileTagPostQuery(id.data, {
    skip: id.skip,
  });
  return { allProfileTagPost: data, allProfileTagPostRefetch: refetch };
};

export const useAddTagPeoplePost = (id) => {
  const { data, refetch } = useAddTagPeopleQuery(id.data, {
    skip: id.skip,
  });
  return { addSearchTagPeople: data, addSearchTagPeopleRefetch: refetch };
};

export const usePostWithText = () => {
  const [postWithText] = useCreatePostWithTextMutation();
  return [postWithText];
};

export const usePostWithImage = () => {
  const [postWithImage] = useCreatePostWithImageMutation();
  return [postWithImage];
};
export const usePostWithVideo = () => {
  const [postWithVideo] = useCreatePostWithVideoMutation();
  return [postWithVideo];
};

export const usePostWithPollQuestion = () => {
  const [postWithPollQuestion] = useCreatePostWithPollQuestionMutation();
  return [postWithPollQuestion];
};

export const usePostWithQuestion = () => {
  const [postWithQuestion] = useCreatePostWithQuestionMutation();
  return [postWithQuestion];
};

export const usePostVisibilityUpdate = () => {
  const [postVisibilityUpdate] = useCreatePostUpdateMutation();
  return [postVisibilityUpdate];
};

export const usePostDelete = () => {
  const [postDelete] = useCreatePostDeleteMutation();
  return [postDelete];
};

export const usePostDeleteQuestion = () => {
  const [postDeleteQuestion] = useCreatePostDeleteQuestionMutation();
  return [postDeleteQuestion];
};

export const useAllPostReaction = (val) => {
  const { data, refetch } = useReactionPeoplePostQuery(val);
  return { allPostReactionPeople: data, allPostReactionPeopleRefetch: refetch };
};

export const usePostLike = (value) => {
  const { data, refetch } = useLikePostQuery(value.data, { skip: value.skip });
  return { postLike: data, postLikeRefetch: refetch };
};

export const usePostSave = (value) => {
  const { data, refetch } = useSavePostQuery(value.data, { skip: value.skip });
  return { postSave: data, postSaveRefetch: refetch };
};

export const useOnePostAllComment = (val) => {
  const { data, refetch } = useAllCommentPostQuery(val.data, {
    skip: val.skip,
  });
  return { allPostComment: data, allPostCommentRefetch: refetch };
};

export const useOnePostAllAnswerQuestion = (val) => {
  const { data, refetch } = useAllAnswerPostQuestionQuery(val.data, {
    skip: val.skip,
  });
  return { allPostAnswerQuestion: data, allPostAnswerQuestionRefetch: refetch };
};

export const usePostComment = () => {
  const [postComment] = useOneCommentPostMutation();
  return [postComment];
};

export const useOneCommentAllReply = (val) => {
  const { data, refetch } = useAllReplyCommentQuery(val.data, {
    skip: val.skip,
  });
  return { allReplyComment: data, allReplyCommentRefetch: refetch };
};

export const useCommentReply = () => {
  const [commentReply] = useOneReplyCommentMutation();
  return [commentReply];
};

export const useCommentLike = (val) => {
  const { data, refetch } = useLikeCommentQuery(val.ids, { skip: val.skip });
  return { commentLike: data, commentLikeRefetch: refetch };
};

//new
export const useRepostKnows = (data) => {
  const { data: repostKnows, refetch: repostKnowsReftech } =
    useRePostKnowsQuery(data);
  return { repostKnows, repostKnowsReftech };
};

export const usePostReport = () => {
  const [postReport] = usePostReportMutation();
  return [postReport];
};

export const usePostInstituteReport = () => {
  const [postInstituteReport] = usePostInstituteReportMutation();
  return [postInstituteReport];
};

export const usePollAnswer = () => {
  const [pollAnswer] = usePollAnswerMutation();
  return [pollAnswer];
};

export const useOneQuestion = (id) => {
  const { data: oneQuestion, refetch: oneQuestionReftech } =
    useOneQuestionQuery(id.pid, { skip: id.skip });
  return { oneQuestion, oneQuestionReftech };
};

export const useQuestionLike = (id) => {
  const { data: questionLike, refetch: questionLikeReftech } =
    useQuestionLikeQuery(id.data, { skip: id.skip });
  return { questionLike, questionLikeReftech };
};

export const useQuestionDislike = (data) => {
  const { data: questionDislike, refetch: questionDislikeReftech } =
    useQuestionDislikeQuery(data);
  return { questionDislike, questionDislikeReftech };
};
export const useQuestionSave = (id) => {
  const { data: questionSave, refetch: questionSaveReftech } =
    useQuestionSaveQuery(id.data, { skip: id.skip });
  return { questionSave, questionSaveReftech };
};

export const useQuestionAnswerSave = (id) => {
  const { data: questionAnswerSave, refetch: questionAnswerSaveReftech } =
    useQuestionAnswerSaveQuery(id.data, { skip: id.skip });
  return { questionAnswerSave, questionAnswerSaveReftech };
};

export const useQuestionHelp = (id) => {
  const { data: questionHelp, refetch: questionHelpReftech } =
    useQuestionHelpQuery(id.data, { skip: id.skip });
  return { questionHelp, questionHelpReftech };
};

export const useQuestionAddAnswer = () => {
  const [questionAddAnswer] = useQuestionAddAnswerMutation();
  return [questionAddAnswer];
};

export const useQuestionAnswerDelete = () => {
  const [questionAnswerDelete] = useQuestionAnswerDeleteMutation();
  return [questionAnswerDelete];
};

export const useQuestionAllReplyAnswer = (data) => {
  const {
    data: questionAllReplyAnswer,
    refetch: questionAllReplyAnswerRefetch,
  } = useQuestionAllReplyAnswerQuery(data);
  return { questionAllReplyAnswer, questionAllReplyAnswerRefetch };
};

export const useQuestionAddReplyAnswer = () => {
  const [questionAddReplyAnswer] = useQuestionAddReplyAnswerMutation();
  return [questionAddReplyAnswer];
};

export const useQuestionAnswerRepost = () => {
  const [questionAnswerRepost] = useQuestionAnswerRepostMutation();
  return [questionAnswerRepost];
};

export const useQuestionRepostLike = (id) => {
  const { data: questionRepostLike, refetch: questionRepostLikeRefetch } =
    useQuestionRepostLikeQuery(id.data, { skip: id.skip1 });
  return { questionRepostLike, questionRepostLikeRefetch };
};

export const useProfilePostQuestion = (data) => {
  const { data: profilePostQuestion, refetch: profilePostQuestionRefetch } =
    useProfilePostQuestionQuery(data);
  return { profilePostQuestion, profilePostQuestionRefetch };
};

export const useCommentOnOff = () => {
  const [commentOnOff] = useCommentOnOffMutation();
  return [commentOnOff];
};

export const useBlockUserByUser = () => {
  const [blockUserByUser] = useBlockUserByUserMutation();
  return [blockUserByUser];
};
export const useUnblockUserByUser = () => {
  const [unblockUserByUser] = useUnblockUserByUserMutation();
  return [unblockUserByUser];
};
export const useBlockInstituteByUser = () => {
  const [blockInstituteByUser] = useBlockInstituteByUserMutation();
  return [blockInstituteByUser];
};
export const useUnblockInstituteByUser = () => {
  const [unblockInstituteByUser] = useUnblockInstituteByUserMutation();
  return [unblockInstituteByUser];
};
export const useBlockInstituteByInstitute = () => {
  const [blockInstituteByInstitute] = useBlockInstituteByInstituteMutation();
  return [blockInstituteByInstitute];
};
export const useUnblockInstituteByInstitute = () => {
  const [unblockInstituteByInstitute] =
    useUnblockInstituteByInstituteMutation();
  return [unblockInstituteByInstitute];
};

export const useReportAccountUserToUser = () => {
  const [reportAccountUserToUser] = useReportAccountUserToUserMutation();
  return [reportAccountUserToUser];
};

export const usePostSuggestionListUser = (args) => {
  const {
    data: postSuggestionListUser,
    refetch: postSuggestionListUserRefetch,
  } = usePostSuggestionListUserQuery(args.data, { skip: args.skip });
  return { postSuggestionListUser, postSuggestionListUserRefetch };
};

export const useGetHashtagList = (args) => {
  const { data: getHashtagList, refetch: getHashtagListRefetch } =
    useGetHashtagListQuery(args.data, { skip: args.skip });
  return { getHashtagList, getHashtagListRefetch };
};

export const useGetOneHashtagDetail = (args) => {
  const { data: getOneHashtagDetail, refetch: getOneHashtagDetailRefetch } =
    useGetOneHashtagDetailQuery(args.data, { skip: args.skip });
  return { getOneHashtagDetail, getOneHashtagDetailRefetch };
};

export const useGetOneHashtagPostList = (args) => {
  const { data: getOneHashtagPostList, refetch: getOneHashtagPostListRefetch } =
    useGetOneHashtagPostListQuery(args.data, { skip: args.skip });
  return { getOneHashtagPostList, getOneHashtagPostListRefetch };
};

export const useFollowOneHashtag = () => {
  const [followOneHashtag] = useFollowOneHashtagMutation();
  return [followOneHashtag];
};
