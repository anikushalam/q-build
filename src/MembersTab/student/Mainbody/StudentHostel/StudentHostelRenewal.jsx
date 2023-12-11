import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetRenewalListByStudent } from "../../../../hooks/member_tab/hostel-api";
import style from "../../../staff/Mainbody/Hostel/Hostel.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import StudentRenewalCard from "./StudentRenewalCard";

const StudentHostelRenewal = ({ sid, isProfile, isOther }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [renewalList, setRenewalList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getRenewalListByStudent, getRenewalListByStudentRefetch } =
    useGetRenewalListByStudent({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });
  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getRenewalListByStudentRefetch();
    }
  }, [sid, page, getRenewalListByStudentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setRenewalList(getRenewalListByStudent?.all_renewals);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getRenewalListByStudent?.all_renewals) {
        setRenewalList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getRenewalListByStudent?.all_renewals]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getRenewalListByStudent?.all_renewals?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getRenewalListByStudent?.all_renewals?.length === 10) setState(true);
    else setState(false);
  }, [getRenewalListByStudent?.all_renewals]);

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getRenewalListByStudentRefetch();
  };
  return (
    <>
      {isProfile === "VIEW_PROFILE" || isOther ? (
        ""
      ) : (
        <>
          <div className={style.with_search}>
            <h6>{t("stay_renewal")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              marginTop: "0.5rem",
              marginBottom: "0.6rem",
              width: "100%",
            }}
          />
        </>
      )}
      {renewalList?.map((renewal, index) =>
        renewalList?.length === index + 1 ? (
          <div ref={ref} key={renewal?._id}>
            <StudentRenewalCard
              renewal={renewal}
              onRefetch={onRefetchWhenCreate}
            />
          </div>
        ) : (
          <StudentRenewalCard
            renewal={renewal}
            key={renewal?._id}
            onRefetch={onRefetchWhenCreate}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default StudentHostelRenewal;
