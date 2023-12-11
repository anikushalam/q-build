import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import AddMentor from "./AddMentor";
import style from "../../../Hostel/Hostel.module.css";
import MentorCard from "./MentorCard";
import { useGetMentorList } from "../../../../../../hooks/member_tab/department-api";

const Mentor = ({ carryParentState, instituteId, did }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [mentorList, setMentorList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getMentorList, getMentorListRefetch } = useGetMentorList({
    data: {
      did: did,
      page: page,
      limit: 10,
    },
    skip: !did,
  });
  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getMentorListRefetch();
    }
  }, [did, page, getMentorListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setMentorList(getMentorList?.all_mentor);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getMentorList?.all_mentor) {
        setMentorList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getMentorList?.all_mentor]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getMentorList?.all_mentor?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getMentorList?.all_mentor?.length === 10) setState(true);
    else setState(false);
  }, [getMentorList?.all_mentor]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getMentorListRefetch();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h6 className={style.add_new_category} onClick={onClose}>
          {t("create_new_mentor")}
        </h6>
      </div>

      {mentorList?.map((mentor, index) =>
        mentorList?.length === index + 1 ? (
          <div ref={ref} key={mentor?._id}>
            <MentorCard mentor={mentor} carryParentState={carryParentState} />
          </div>
        ) : (
          <MentorCard
            mentor={mentor}
            key={mentor?._id}
            carryParentState={carryParentState}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {add && (
        <AddMentor
          onClose={onClose}
          instituteId={instituteId}
          onRefetch={onRefetchWhenCreate}
          did={did}
        />
      )}
    </>
  );
};

export default Mentor;
