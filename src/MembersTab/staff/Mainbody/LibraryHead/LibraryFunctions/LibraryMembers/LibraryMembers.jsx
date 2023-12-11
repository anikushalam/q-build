import React from "react";
import style from "./LibraryMembers.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import MemberItem from "./MemberItem";
import MemberDetail from "./MemberDetail";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useGetMemberslist } from "../../../../../../hooks/member_tab/library-api";
import { useEffect } from "react";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

function LibraryMembers() {
  const { t } = useTranslation();
  const lid = useSelector((state) => state.libraryChange.lid);

  const [ref, inView] = useInView();
  const [allStudent, setAllStudent] = useState([]);
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const [mid, setMid] = useState("");

  const { getMemberslist, getMembersListRefetch } = useGetMemberslist({
    data: {
      lid: lid,
      page: page,
      limit: 10,
    },
    skip: !lid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (lid) {
      setShowingDataLoading(true);
      getMembersListRefetch();
    }
  }, [page, lid, getMembersListRefetch]);

  useEffect(() => {
    if (getMemberslist?.members) {
      setAllStudent((prevState) =>
        [
          ...new Set(
            [...prevState, ...getMemberslist?.members]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getMemberslist?.members?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getMemberslist?.members?.length === 10) setState(true);
    else setState(false);
  }, [getMemberslist?.members]);
  return (
    <>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input type="text" placeholder={t("search-label")} required />
        </div>
      </div>

      <div className={style.remainingFees}>
        <div className={mid ? `${style.completeApplicationSplit}` : ""}>
          <div
            className={
              mid
                ? `${style.remainingFeesBottom} ${style.half}`
                : style.remainingFeesBottom
            }
          >
            <div className={style.itemsContainer}>
              {allStudent?.map((member, index) =>
                allStudent?.length === index + 1 ? (
                  <div key={index} ref={ref} className={style.limember}>
                    <MemberItem
                      member={member}
                      setMid={setMid}
                      mid={mid}
                      index={index + 1}
                    />
                  </div>
                ) : (
                  <div key={index} className={style.limember}>
                    <MemberItem
                      member={member}
                      setMid={setMid}
                      mid={mid}
                      index={index + 1}
                    />
                  </div>
                )
              )}
              {showingDataLoading && <QvipleLoading />}
              {!showingDataLoading && allStudent?.length === 0 && (
                <div className={style.noData}>
                  <img src="/images/nodata.jpg" alt="" />
                </div>
              )}
            </div>
          </div>

          {mid && (
            <div className={style.itemsDetails}>
              <MemberDetail mid={mid} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LibraryMembers;
