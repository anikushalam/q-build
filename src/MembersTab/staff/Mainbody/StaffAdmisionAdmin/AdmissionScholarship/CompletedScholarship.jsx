import React, { useEffect, useState } from "react";
import style from "./AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { useGetScholarshipListAdmission } from "../../../../../hooks/member_tab/admission-api";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import ScholarshipCard from "./ScholarshipCard";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const CompletedScholarship = ({
  admissionId,
  accessRole,
  carryParentState,
  callApi,
}) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [scholarshipList, setScholarshipList] = useState([]);

  const { getScholarshipListAdmission, getScholarshipListAdmissionRefetch } =
    useGetScholarshipListAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
        status: "Completed",
      },
      skip: !admissionId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getScholarshipListAdmissionRefetch();
    }
  }, [admissionId, page, getScholarshipListAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getScholarshipListAdmission?.all_scholar) {
      setScholarshipList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getScholarshipListAdmission?.all_scholar]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getScholarshipListAdmission?.all_scholar?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getScholarshipListAdmission?.all_scholar?.length === 10) setState(true);
    else setState(false);
  }, [getScholarshipListAdmission?.all_scholar]);

  return (
    <div className={style.refund_list}>
      {scholarshipList?.map((scholarship, index) =>
        scholarshipList?.length === index + 1 ? (
          <div ref={ref} key={scholarship?._id}>
            <ScholarshipCard
              scholarship={scholarship}
              accessRole={accessRole}
              carryParentState={carryParentState}
              viewAs="COMPLETED"
              callApi={callApi}
            />
          </div>
        ) : (
          <ScholarshipCard
            scholarship={scholarship}
            key={scholarship?._id}
            accessRole={accessRole}
            carryParentState={carryParentState}
            viewAs="COMPLETED"
            callApi={callApi}
          />
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default CompletedScholarship;
