import React from "react";
import {
  useGetLBookDetail,
  useGetLCollectedBookDetail,
} from "../../../../../../../hooks/member_tab/library-api";
import BookDetailsItem from "./BookDetailsItem";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BookDetails({ bookId, desig, carryParentState, pageOpenAs }) {
  const navigate = useNavigate();
  const getQuery = useLocation();
  const { getBookDetail, getBookDetailRefetch } = useGetLBookDetail({
    bid: getQuery?.state?.bid,
    skip: !getQuery?.state?.bid,
  });

  const { getCollectedBookDetail, getCollectedBookDetailRefetch } =
    useGetLCollectedBookDetail({
      cid: bookId,
      skip: !bookId,
    });

  useEffect(() => {
    if (getQuery?.state?.bid) getBookDetailRefetch();
    if (bookId) getCollectedBookDetailRefetch();
  }, [getQuery?.state?.bid, bookId]);

  const onBack = () => {
    navigate(-1);
  };
  return (
    <BookDetailsItem
      status={
        getCollectedBookDetail?.collectedDetail
          ? "collectBookDetails"
          : desig
          ? "student book details"
          : "bookDetails"
      }
      book={
        getBookDetail?.book
          ? getBookDetail?.book
          : getCollectedBookDetail?.collectedDetail?.book
      }
      onBackClick={onBack}
      onCollectBackClick={onBack}
      onStudentBackClick={onBack}
      carryParentState={carryParentState}
      pageOpenAs={pageOpenAs}
    />
  );
}

export default BookDetails;
