import React, { useState, useEffect } from "react";
import style from "./NewEnquiryModal.module.css";
import { useTranslation } from "react-i18next";
import { useAllAppAtInstitute } from "../../../../../../hooks/member_tab/admission-api";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import moment from "moment";
const AllApplication = ({ onClose, instituteId, onSelectApplication }) => {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [applicationList, setApplicationList] = useState([]);
  const { allAppAtInstitute, allAppAtInstituteRefetch } = useAllAppAtInstitute({
    data: {
      id: instituteId,
      page: page,
      limit: 10,
    },
    skip: !instituteId,
  });

  useEffect(() => {
    if (instituteId) allAppAtInstituteRefetch();
  }, [instituteId, page, allAppAtInstituteRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (allAppAtInstitute?.allApp) {
      const uniquePost = [...applicationList, ...allAppAtInstitute?.allApp];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setApplicationList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (allAppAtInstitute?.allApp?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (allAppAtInstitute?.allApp?.length === 10) setState(true);
    else setState(false);
  }, [allAppAtInstitute?.allApp]);
  // console.info("this is standard", allAppAtInstitute);

  return (
    <>
      <div className={style.modalhead}>
        <img src="/images/back.svg" onClick={onClose} />
        <h6>{t("select_app")}</h6>
        <div />
      </div>
      <div className={style.modalbody}>
        <h6 className={style.modalbodyheader}>{t("new_application")}</h6>

        <div className={style.itemsContainer}>
          {applicationList?.map((application, index) =>
            applicationList?.length === index + 1 ? (
              <div
                className={style.modalItem}
                onClick={() => onSelectApplication(application?._id)}
                ref={ref}
                key={application?._id}
              >
                <div className={style.modalItemLeft}>
                  <h6>{application?.applicationName}</h6>
                  <p>{application?.applicationDepartment?.dName}t</p>
                </div>

                <div className={style.modalItemLeft}>
                  <h6>
                    {moment(application?.applicationEndDate).format(
                      "DD MMM yyyy"
                    )}
                  </h6>
                  <p>Last Date</p>
                </div>
              </div>
            ) : (
              <div
                className={style.modalItem}
                onClick={() => onSelectApplication(application?._id)}
                key={application?._id}
              >
                <div className={style.modalItemLeft}>
                  <h6>{application?.applicationName}</h6>
                  <p>{application?.applicationDepartment?.dName}t</p>
                </div>

                <div className={style.modalItemLeft}>
                  <h6>
                    {moment(application?.applicationEndDate).format(
                      "DD MMM yyyy"
                    )}
                  </h6>
                  <p>Last Date</p>
                </div>
              </div>
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
    </>
  );
};

export default AllApplication;
