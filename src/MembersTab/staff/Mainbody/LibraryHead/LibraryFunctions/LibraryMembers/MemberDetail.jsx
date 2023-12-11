import React from "react";
import style from "./LibraryMembers.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import { useState } from "react";
import { useGetMemberBookList } from "../../../../../../hooks/member_tab/library-api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import BorrowedBooks from "./BorrowedBooks/BorrowedBooks";
import HistoryBooks from "./HistoryBooks/HistoryBooks";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function MemberDetail({ mid }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [borrowList, setBorrowList] = useState({
    student: "",
    issueList: [],
  });
  const { getMemberBooklist, getMemberBookListRefetch } = useGetMemberBookList({
    data: {
      sid: mid,
      page: borrowList.student !== mid ? 1 : page,
      limit: 10,
    },
    skip: !mid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (mid) {
      setShowingDataLoading(true);
      getMemberBookListRefetch();
    }
  }, [page, mid, getMemberBookListRefetch]);

  useEffect(() => {
    if (getMemberBooklist?.student?.borrow) {
      if (borrowList.student === getMemberBooklist?.student?._id) {
        if (refetchStatus) {
          setBorrowList((prevState) => ({
            ...prevState,
            issueList: [...getMemberBooklist?.student?.borrow],
          }));
          setRefetchStatus(false);
        } else {
          setBorrowList((prevState) => ({
            ...prevState,
            issueList: [
              ...new Set(
                [
                  ...prevState.issueList,
                  ...getMemberBooklist?.student?.borrow,
                ]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse),
          }));
        }
      } else {
        setBorrowList({
          student: getMemberBooklist?.student?._id,
          issueList: [...getMemberBooklist?.student?.borrow],
        });
      }
      setShowingDataLoading(false);
    } else if (getMemberBooklist?.student?.borrow?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getMemberBooklist?.student?.borrow?.length === 10) setState(true);
    else setState(false);
  }, [getMemberBooklist?.student?.borrow]);
  const onRefetchWhenBookCollect = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getMemberBookListRefetch();
  };

  // console.info("tjijsadsag", getMemberBooklist);
  return (
    <div className={style.memberdetails}>
      <div className={style.memberdetailstop}>
        <div className={style.issuedBookItemMidleft}>
          <div className={style.imgcontainer}>
            <img
              src={
                getMemberBooklist?.student?.photoId !== "1"
                  ? `${imageShowUrl}/${getMemberBooklist?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
          </div>
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>
            {`${getMemberBooklist?.student?.studentFirstName} ${
              getMemberBooklist?.student?.studentMiddleName
                ? getMemberBooklist?.student?.studentMiddleName
                : ""
            } ${getMemberBooklist?.student?.studentLastName}`}
          </h6>
          <p>
            {t("index_no")} : {getMemberBooklist?.student?.studentGRNO}
          </p>
        </div>
      </div>
      <div className={style.tabs}>
        <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>

      {activeIndex === 0 && (
        <BorrowedBooks
          showingDataLoading={showingDataLoading}
          ref={ref}
          borrowList={borrowList.issueList}
          member={{
            photoId: getMemberBooklist?.student?.photoId,
            studentFirstName: getMemberBooklist?.student?.studentFirstName,
            studentGRNO: getMemberBooklist?.student?.studentGRNO,
            studentLastName: getMemberBooklist?.student?.studentLastName,
            studentMiddleName: getMemberBooklist?.student?.studentMiddleName,
            studentProfilePhoto:
              getMemberBooklist?.student?.studentProfilePhoto,
            _id: getMemberBooklist?.student?._id,
          }}
          onRefetchWhenBookCollect={onRefetchWhenBookCollect}
        />
      )}
      {activeIndex === 1 && <HistoryBooks mid={mid} />}
    </div>
  );
}

export default MemberDetail;
