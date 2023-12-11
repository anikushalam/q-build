import {
  useActivateLibraryMutation,
  useEditLibraryMutation,
  useLibraryInfoQuery,
  useAllBookListQuery,
  useAddLibraryBookMutation,
  useBookDetailsQuery,
  useUpdateLibraryBookMutation,
  useAllIssuedBookListQuery,
  useIssueLibraryBookMutation,
  useAllCollectedBookListQuery,
  useCollectLibraryBookMutation,
  useCollectedBookDetailsQuery,
  useAllMembersListQuery,
  useLibraryCoverPhotoMutation,
  useSingleMembersBookListQuery,
  useSingleMemberHistoryQuery,
  useFineHistoryMembersListQuery,
  useSubmitFineRequestMutation,
  useLibraryGetSiteInfoQuery,
  useLibraryUpdateSiteInfoMutation,
  useLibraryFineChargeQuery,
  useLibraryFineCollectBookMutation,
  useAddExcelBookByLibraryMutation,
} from "../../services/library/libraryApi";

export const useAssignLibraryHead = () => {
  const [assignLibraryHead] = useActivateLibraryMutation();
  return [assignLibraryHead];
};

export const useEditLibraryHead = () => {
  const [editLibraryHead] = useEditLibraryMutation();
  return [editLibraryHead];
};

export const useGetLibraryDetail = (args) => {
  const { data: getLibraryDetail, refetch: getLibraryDetailRefetch } =
    useLibraryInfoQuery(args?.lid, { skip: args?.skip });
  return { getLibraryDetail, getLibraryDetailRefetch };
};

export const useGetBooklist = (args) => {
  const { data: getBooklist, refetch: getBookListRefetch } =
    useAllBookListQuery(args.data, { skip: args?.skip });
  return { getBooklist, getBookListRefetch };
};

export const useAddLibraryBook = () => {
  const [addLibraryBook] = useAddLibraryBookMutation();
  return [addLibraryBook];
};

export const useGetLBookDetail = (args) => {
  const { data: getBookDetail, refetch: getBookDetailRefetch } =
    useBookDetailsQuery(
      args?.bid,
      { skip: args?.skip }
      // args?.lid, { skip: args?.skip }
    );
  return { getBookDetail, getBookDetailRefetch };
};

export const useGetIssuedBooklist = (args) => {
  const { data: getIssuedBooklist, refetch: getIssuedBookListRefetch } =
    useAllIssuedBookListQuery(args.data, { skip: args?.skip });
  return { getIssuedBooklist, getIssuedBookListRefetch };
};

export const useIssueBook = () => {
  const [issueBook] = useIssueLibraryBookMutation();
  return [issueBook];
};

export const useCollectedBooklist = (args) => {
  const { data: getCollectedBooklist, refetch: getCollectedBookListRefetch } =
    useAllCollectedBookListQuery(args.data, { skip: args?.skip });
  return { getCollectedBooklist, getCollectedBookListRefetch };
};

export const useCollectBook = () => {
  const [collectBook] = useCollectLibraryBookMutation();
  return [collectBook];
};

export const useGetMemberslist = (args) => {
  const { data: getMemberslist, refetch: getMembersListRefetch } =
    useAllMembersListQuery(args.data, { skip: args?.skip });
  return { getMemberslist, getMembersListRefetch };
};

export const useGetMemberBookList = (args) => {
  const { data: getMemberBooklist, refetch: getMemberBookListRefetch } =
    useSingleMembersBookListQuery(args.data, { skip: args?.skip });
  return { getMemberBooklist, getMemberBookListRefetch };
};

export const useGetMemberHistoryList = (args) => {
  const { data: getMemberHistorylist, refetch: getMemberHistoryListRefetch } =
    useSingleMemberHistoryQuery(args.data, { skip: args?.skip });
  return { getMemberHistorylist, getMemberHistoryListRefetch };
};

export const useUpdateBookDetails = () => {
  const [updateBook] = useUpdateLibraryBookMutation();
  return [updateBook];
};

export const useLibraryCoverPhoto = () => {
  const [libraryCover] = useLibraryCoverPhotoMutation();
  return [libraryCover];
};

export const useGetLCollectedBookDetail = (args) => {
  const {
    data: getCollectedBookDetail,
    refetch: getCollectedBookDetailRefetch,
  } = useCollectedBookDetailsQuery(
    args?.cid,
    { skip: args?.skip }
    // args?.lid, { skip: args?.skip }
  );
  return { getCollectedBookDetail, getCollectedBookDetailRefetch };
};

export const useGetFineMemberHistoryList = (args) => {
  const {
    data: getFineMemberHistorylist,
    refetch: getFineMemberHistoryListRefetch,
  } = useFineHistoryMembersListQuery(args.data, { skip: args?.skip });
  return { getFineMemberHistorylist, getFineMemberHistoryListRefetch };
};

export const useSubmitRequest = () => {
  const [submitFinanceRequest] = useSubmitFineRequestMutation();
  return [submitFinanceRequest];
};

export const useLibraryGetSiteInfo = (args) => {
  const { data: libraryGetSiteInfo, refetch: libraryGetSiteInfoRefetch } =
    useLibraryGetSiteInfoQuery(args.lid, { skip: args?.skip });
  return { libraryGetSiteInfo, libraryGetSiteInfoRefetch };
};

export const useLibraryUpdateSiteInfo = () => {
  const [libraryUpdateSiteInfo] = useLibraryUpdateSiteInfoMutation();
  return [libraryUpdateSiteInfo];
};
export const useLibraryFineCharge = (args) => {
  const { data: libraryFineCharge, refetch: libraryFineChargeRefetch } =
    useLibraryFineChargeQuery(args.data, { skip: args?.skip });
  return { libraryFineCharge, libraryFineChargeRefetch };
};

export const useLibraryFineCollectBook = () => {
  const [libraryFineCollectBook] = useLibraryFineCollectBookMutation();
  return [libraryFineCollectBook];
};

export const useAddExcelBookByLibrary = () => {
  const [addExcelBookByLibrary] = useAddExcelBookByLibraryMutation();
  return [addExcelBookByLibrary];
};
