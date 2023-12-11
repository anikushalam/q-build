import React, { useCallback, useEffect, useState } from "react";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import { useTranslation } from "react-i18next";
import style from "../../AdmissionApplicationRequest.module.css";
import AdmissionSelectConfirmCard from "./AdmissionSelectConfirmCard";
import { useInView } from "react-intersection-observer";
import {
  useGetAllConfirm,
  useTransferApplicatToOtherApplication,
} from "../../../../../../../hooks/member_tab/admission-api";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import QLoader from "../../../../../../../Loader/QLoader";
import SelectAdmissionOngoingApp from "./SelectAdmissionOngoingApp";

const AdmissionApplicantTransfer = ({
  onClose,
  applicationId,
  onRefetchConfirmTab,
}) => {
  const { t } = useTranslation();
  const [stepOpen, setStepOpen] = useState(0);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [confirm, setConfirm] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [transferApplication, setTransferApplication] = useState("");
  const [transferApplicat, setTransferApplicat] = useState([]);
  const [transferStudent, setTransferStudent] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [transferApplicatToOtherApplication] =
    useTransferApplicatToOtherApplication();
  const { getAllConfirmList, getAllConfirmListRefetch } = useGetAllConfirm({
    data: {
      id: applicationId,
      page: page,
      limit: 10,
      search: search ? search : "",
    },
    skip: !applicationId,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      getAllConfirmListRefetch();
    }
  }, [page, applicationId, getAllConfirmListRefetch, search]);

  useEffect(() => {
    if (search) {
      setConfirm(getAllConfirmList?.confirm);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setConfirm(getAllConfirmList?.confirm);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getAllConfirmList?.confirm) {
          setConfirm((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAllConfirmList?.confirm]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllConfirmList?.confirm?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getAllConfirmList?.confirm?.length === 10) setState(true);
    else setState(false);
  }, [getAllConfirmList?.confirm]);

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };

  const onBack = () => {
    if (disabled) {
    } else {
      if (stepOpen === 0) {
        onClose();
      } else if (stepOpen === 1) {
        setStepOpen(0);
      } else {
        setStepOpen(1);
      }
    }
  };

  const onSelectApplicant = (val) => {
    if (transferApplicat?.includes(val?._id)) {
      setTransferApplicat((prevState) =>
        prevState?.filter((ap) => ap !== val?._id)
      );
      setTransferStudent((pre) =>
        pre?.filter((fd) => fd?.studentId !== val?.student?._id)
      );
    } else {
      let stu = {
        studentId: val?.student?._id,
        mode: val?.payment_status,
        type: val?.install_type,
        price: val?.fee_remain,
      };
      setTransferStudent((previous) =>
        previous?.length ? [...previous, stu] : [stu]
      );
      setTransferApplicat((prev) =>
        prev?.length ? [...prev, val?._id] : [val?._id]
      );
    }
  };
  const onSelectDone = () => {
    setStepOpen(1);
  };
  const onSelectApp = (val) => {
    setTransferApplication(val);
    setStepOpen(2);
  };

  const onTransferApplicant = () => {
    if (transferApplication?._id && applicationId && transferApplicat?.length) {
      setDisabled((pre) => !pre);
      transferApplicatToOtherApplication({
        aid: transferApplication?._id,
        transferApplicantData: {
          app_array: transferApplicat,
          oaid: applicationId,
          student_array: transferStudent,
        },
      })
        .then(() => {
          onRefetchConfirmTab();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };
  return (
    <>
      {stepOpen === 0 || stepOpen === 2 ? (
        <PopupWrapper onClose={onBack}>
          <div className={style.admission_modal}>
            {stepOpen === 0 ? (
              <div className={style.transfer_container}>
                <h6 className={style.admission_modal_heading}>
                  {t("select_confirm_student")}
                </h6>
                <button
                  className={style.transfer_select_btn}
                  onClick={onSelectDone}
                >
                  {transferApplicat?.length ?? ""} {` `}
                  {t("select")}
                </button>
              </div>
            ) : (
              <h6 className={style.admission_modal_heading}>
                {t("transfer_select_student")}
              </h6>
            )}

            <BorderBottom
              customStyle={{
                width: "100%",
                margin: "0.7rem 0",
              }}
            />

            {stepOpen === 0 ? (
              <>
                <div
                  className={style.with_search}
                  style={{
                    marginBottom: "0.7rem",
                  }}
                >
                  <div
                    className={style.search_container_filter}
                    style={{
                      width: "100%",
                    }}
                  >
                    <section
                      className={style.search_container}
                      style={{
                        width: "100%",
                      }}
                    >
                      <div
                        className={style.search_container_input}
                        style={{
                          width: "100%",
                        }}
                      >
                        <img
                          className={style.searchIcon}
                          alt="search icon"
                          src="/images/search-dash-icon.svg"
                        />
                        <input
                          type="text"
                          placeholder="Search classes..."
                          onChange={onSearchEvent}
                          style={{
                            width: "100%",
                          }}
                        />
                      </div>
                    </section>
                  </div>
                </div>
                {confirm?.map((applicant, index) =>
                  confirm?.length === index + 1 ? (
                    <div ref={ref} key={index}>
                      <AdmissionSelectConfirmCard
                        applicant={applicant}
                        onSelectApplicant={onSelectApplicant}
                        transferApplicat={transferApplicat}
                      />
                    </div>
                  ) : (
                    <AdmissionSelectConfirmCard
                      key={index}
                      applicant={applicant}
                      onSelectApplicant={onSelectApplicant}
                      transferApplicat={transferApplicat}
                    />
                  )
                )}
                {showingDataLoading && <QvipleLoading status="white" />}
              </>
            ) : (
              <>
                <div className={style.admission_class_confirm}>
                  {t("transfering")}{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {transferApplicat?.length}
                  </span>{" "}
                  {t("students")} {` `},{t("to")}{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {transferApplication?.applicationName ?? ""}
                  </span>
                </div>
                <div
                  className={style.confirm_btn}
                  onClick={onTransferApplicant}
                >
                  {t("confirm")}
                </div>
              </>
            )}

            {disabled && <QLoader />}
          </div>
        </PopupWrapper>
      ) : (
        <SelectAdmissionOngoingApp
          onBack={onBack}
          onSelectApp={onSelectApp}
          transferApplication={transferApplication}
        />
      )}
    </>
  );
};

export default AdmissionApplicantTransfer;
