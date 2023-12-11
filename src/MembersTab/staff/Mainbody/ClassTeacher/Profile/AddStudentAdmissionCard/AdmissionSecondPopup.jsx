import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../FinanceManager/FeesStructure/FeesStructure.module.css";
import { useAllApplicationByAdmission } from "../../../../../../hooks/member_tab/admission-api";
import ApplicationAdmissionCard from "./ApplicationAdmissionCard";
const AdmissionSecondPopup = ({
  onClose,
  departmentId,
  classMasterId,
  batchId,
  onGrabApplication,
  instituteId,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [structureList, setStructureList] = useState([]);
  const { allApplicationByAdmission, allApplicationByAdmissionRefetch } =
    useAllApplicationByAdmission({
      data: {
        id: instituteId,
        page: page,
        limit: 10,
        departId: departmentId,
        batchId: batchId,
        masterId: classMasterId,
      },
      skip: !instituteId,
    });

  // console.info(departmentId, classMasterId);
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      allApplicationByAdmissionRefetch();
    }
  }, [instituteId, page, allApplicationByAdmissionRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStructureList((prevState) =>
        [
          ...new Set(
            [...allApplicationByAdmission?.all_apps, ...prevState]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (allApplicationByAdmission?.all_apps) {
        setStructureList((prevState) =>
          [
            ...new Set(
              [...prevState, ...allApplicationByAdmission?.all_apps]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (allApplicationByAdmission?.all_apps?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (allApplicationByAdmission?.all_apps?.length === 10) setState(true);
    else setState(false);
  }, [allApplicationByAdmission?.all_apps]);

  const onSelectedApplication = (value) => {
    onGrabApplication(value);
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "40rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowY: "auto",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <section
          className={style.add_category_modal_title_left}
          style={{ marginBottom: "1.2rem" }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back arrow"
          />
          <h6>{t("select_admission_application")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "-0.5rem",
            marginBottom: "1rem",
          }}
        />
        {structureList?.map((category, index) =>
          structureList?.length === index + 1 ? (
            <div ref={ref} key={category?._id}>
              <ApplicationAdmissionCard
                data={category}
                onSelectedApplication={onSelectedApplication}
              />
            </div>
          ) : (
            <ApplicationAdmissionCard
              key={category?._id}
              data={category}
              onSelectedApplication={onSelectedApplication}
            />
          )
        )}

        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default AdmissionSecondPopup;
