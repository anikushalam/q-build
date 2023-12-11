import React from "react";
import { useState, useEffect } from "react";
import CreateSoprtClassMemberNew from "./CreateSportsClassMember/CreateSoprtClassMemberNew";
import style from "./SportsClassMembers.module.css";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import {
  useSportClassStudentList,
  useRmoveStudentInSportClass,
} from "../../../../../../../hooks/sports/sports-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

function Item({ member, cid, refetch }) {
  const [showingDataLoading, setShowingDataLoading] = useState(false);
  const { t } = useTranslation();

  const [removeStudentInSportClass] = useRmoveStudentInSportClass();

  const handleRemove = () => {
    setShowingDataLoading(true);
    removeStudentInSportClass({
      cid: cid,
      remove: [member?._id],
    }).then((res) => {
      setShowingDataLoading(false);
      refetch();
    });
  };
  return (
    <>
      {showingDataLoading ? (
        <QvipleLoading />
      ) : (
        <div className={style.memberItemContainer}>
          <div className={style.memberItem}>
            <img
              src={
                member?.photoId !== "1"
                  ? `${imageShowUrl}/${member?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.memberItemText}>
              <h6>
                {member?.studentFirstName} {member?.studentMiddleName}{" "}
                {member?.studentLastName}
              </h6>
            </div>
          </div>
          <p className={style.remove} onClick={handleRemove}>
            {t("remove")}
          </p>
        </div>
      )}
    </>
  );
}

function SportsClassMembers({ cid, insId }) {
  const [openModal, setOpenModal] = useState(false);
  const [classMembers, setClassMembers] = useState([]);
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  // --------------------------------------
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { SportClassStudentList, SportClassStudentListRefetch } =
    useSportClassStudentList({
      data: {
        cid: cid,
        page: page,
      },
      skip: !cid,
    });

  let studentIDs = classMembers?.map((student) => student?._id);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (cid) {
      setShowingDataLoading(true);
      SportClassStudentListRefetch();
    }
  }, [page, cid, SportClassStudentListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setClassMembers((prevState) =>
        [
          ...new Set(
            [...SportClassStudentList?.student_query, ...prevState]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setClassMembers((prevState) =>
        [
          ...new Set(
            [...SportClassStudentList?.student_query]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (SportClassStudentList?.student_query) {
        setClassMembers((prevState) =>
          [
            ...new Set(
              [...prevState, ...SportClassStudentList?.student_query]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (SportClassStudentList?.student_query?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (SportClassStudentList?.student_query?.length === 10) setState(true);
    else setState(false);
  }, [SportClassStudentList?.student_query]);

  const onRefetchWhenClassCreated = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    SportClassStudentListRefetch();
  };

  return (
    <div className={style.sportsHeadEvents}>
      <div className={style.eventstop}>
        <div className={style.searchbarContainer}>
          <div className={style.searchbar}>
            {/* <p onClick={() => refetch()}>fgrg</p> */}
            <input
              type="text"
              placeholder={t("search-label")}
              name="search"
              className={`form-control ${style.searchinput}`}
              // onChange={searchHandler}
            />
            <img alt="img" src="/images/search-dash-icon.svg" />
          </div>
        </div>
        <div
          className={`${style.eventstopTab} ${style.eventBlue}`}
          onClick={() => setOpenModal(true)}
        >
          {t("add_members")}
        </div>
      </div>

      <div className={style.eventsbody}>
        {classMembers?.map((member, index) =>
          classMembers?.length === index + 1 ? (
            <div key={index} ref={ref}>
              <Item
                member={member}
                cid={cid}
                refetch={onRefetchWhenClassCreated}
              />
            </div>
          ) : (
            <div key={index} ref={ref}>
              <Item
                member={member}
                cid={cid}
                refetch={onRefetchWhenClassCreated}
              />
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
        {!showingDataLoading &&
          SportClassStudentList?.student_query?.length === 0 && (
            <div className={style.noData}>{t("no_student")}</div>
          )}
      </div>

      {openModal && (
        <CreateSoprtClassMemberNew
          openModal={openModal}
          hideModal={(w) => setOpenModal(w)}
          insId={insId}
          cid={cid}
          classMembers={classMembers}
          refetch={onRefetchWhenClassCreated}
          studentIDs={studentIDs}
        />
      )}
    </div>
  );
}

export default SportsClassMembers;
