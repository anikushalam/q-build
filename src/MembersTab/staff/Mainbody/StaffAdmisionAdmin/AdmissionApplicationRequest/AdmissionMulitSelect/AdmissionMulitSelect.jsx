import React, { useState, useEffect, useCallback } from "react";
import { useGetAllConfirmMultiselect } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { debounce } from "lodash";
import AdmissionOngoingWrapper from "../OngoingApplication/AdmissionOngoingWrapper";
import AdmissionOneOngoingTab from "../OngoingApplication/AdmissionOneOngoingTab";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import style from "../AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import AdmissionMultiCard from "./AdmissionMultiCard";
import AllotSelectBacth from "../AdmissionConfirm/ConfirmProcess/AllotSelectBacth";
import AllotClassToApplicant from "../AdmissionConfirm/ConfirmProcess/AllotClassToApplicant";

const AdmissionMulitSelect = ({
  carryParentState,
  applicationId,
  applicationDetail,
  accessRole,
  accessTpye,
  instituteId,
  applicationDetailApplicablePending,
  pageOpenAs,
}) => {
  const { t } = useTranslation();
  const [selectedApplicant, setSelectedApplicant] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [applicantList, setApplicantList] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [batchId, setBatchId] = useState("");
  const [allSelected, setAllSelected] = useState(false);
  const [search, setSearch] = useState("");
  const [stepOpen, setStepOpen] = useState("");

  const { getAllConfirmListMulitselect, getAllConfirmListMulitselectRefetch } =
    useGetAllConfirmMultiselect({
      data: {
        id: applicationId,
        search: search,
      },
      skip: !applicationId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      getAllConfirmListMulitselectRefetch();
    }
  }, [applicationId, getAllConfirmListMulitselectRefetch, search]);

  useEffect(() => {
    if (search) {
      setApplicantList(getAllConfirmListMulitselect?.confirm);
      setShowingDataLoading(false);
    } else {
      if (getAllConfirmListMulitselect?.confirm?.length) {
        setApplicantList(getAllConfirmListMulitselect?.confirm);
        setShowingDataLoading(false);
      } else if (getAllConfirmListMulitselect?.confirm?.length === 0) {
        setShowingDataLoading(false);
      } else {
      }
    }
  }, [getAllConfirmListMulitselect?.confirm]);
  const onSelectOne = (id) => {
    if (selectedApplicant?.includes(id)) {
      setSelectedApplicant((pre) => pre?.filter((val) => val !== id));
      setSelectedCount((pre) => --pre);
    } else {
      setSelectedApplicant((pre) => [...pre, id]);
      setSelectedCount((pre) => ++pre);
    }
    setAllSelected(false);
  };
  const onAllSelect = () => {
    let arrayOfId = [];
    for (let applicant of getAllConfirmListMulitselect?.confirm) {
      arrayOfId.push(applicant?.student?._id);
    }
    setSelectedApplicant(arrayOfId);
    setSelectedCount(arrayOfId?.length);
    setAllSelected(true);
  };
  const onRemoveAllSelect = () => {
    setSelectedApplicant([]);
    setAllSelected(false);
    setSelectedCount(0);
  };
  const onAllotApplicantBatch = () => {
    if (selectedApplicant?.length) {
      setStepOpen("ALLOT_BATCH");
    }
  };
  const onAllotApplicantClasses = (batch_id) => {
    setBatchId(batch_id);
    setStepOpen("ALLOT_CLASSES");
  };
  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };

  return (
    <>
      <AdmissionOngoingWrapper
        applicationDetail={applicationDetail}
        carryParentState={carryParentState}
        instituteId={instituteId}
        applicationDetailApplicablePending={applicationDetailApplicablePending}
        pageOpenAs={pageOpenAs}
      >
        <input
          type="text"
          placeholder="Search applicants..."
          onChange={onSearchEvent}
        />
      </AdmissionOngoingWrapper>
      <AdmissionOneOngoingTab
        carryParentState={carryParentState}
        accessRole={accessRole}
        accessTpye={accessTpye}
        pageOpenAs={pageOpenAs}
      />
      <div className={style.admission_mulit_select}>
        <p>
          {selectedCount ? selectedCount : ""} {t("selected_")}
        </p>
        <div className={style.admission_mulit_select_right}>
          {allSelected ? (
            <p onClick={onRemoveAllSelect} style={{ cursor: "pointer" }}>
              {t("remove_all")}
            </p>
          ) : (
            <p onClick={onAllSelect} style={{ cursor: "pointer" }}>
              {t("select_all")}
            </p>
          )}

          <div
            className={style.selectBtnContainer}
            style={{
              width: "auto",
            }}
          >
            <div className={style.selectBtn} onClick={onAllotApplicantBatch}>
              {t("allot_class")}
            </div>
          </div>
        </div>
      </div>
      {applicantList?.map((applicant) => (
        <AdmissionMultiCard
          key={applicant?.student?._id}
          applicant={applicant}
          onSelectOne={onSelectOne}
          selectedApplicant={selectedApplicant}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
      {stepOpen === "ALLOT_BATCH" && (
        <AllotSelectBacth
          onClose={() => setStepOpen("")}
          applicationId={applicationDetail?._id}
          onAllotApplicantClasses={onAllotApplicantClasses}
        />
      )}
      {stepOpen === "ALLOT_CLASSES" && (
        <AllotClassToApplicant
          onClose={() => setStepOpen("")}
          currentApplicant={selectedApplicant}
          onRefetchWhenAction={getAllConfirmListMulitselectRefetch}
          applicationId={applicationDetail?._id}
          batchId={batchId}
          openAs="MULITSELECT"
        />
      )}
    </>
  );
};

export default AdmissionMulitSelect;
