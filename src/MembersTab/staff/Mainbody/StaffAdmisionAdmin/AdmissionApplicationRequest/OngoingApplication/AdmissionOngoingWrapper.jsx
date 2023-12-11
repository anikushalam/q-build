import React, { useState } from "react";
import style from "../AdmissionApplicationRequest.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AdmissionApplicationDetail from "./AdmissionApplicationDetail";
import { useHostelExportApplicantApplicaton } from "../../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../../Loader/QLoader";
import { Notfication } from "../../../../../../validation/Snackbar";
import AdmissionApplicantTransfer from "../AdmissionConfirm/AdmissionApplicantTransfer/AdmissionApplicantTransfer";
// import AdmissionApplicationDetail from "./AdmissionApplicationDetail";

const accessExport = ["Request_Query", "Confirm_Query", "Allot_Query"];
const AdmissionOngoingWrapper = ({
  applicationDetail,
  carryParentState,
  instituteId,
  tabStatusFlow,
  applicationDetailApplicablePending,
  onRefetchConfirmTab,
  pageOpenAs,
  children,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [hostelExportApplicantApplicaton] =
    useHostelExportApplicantApplicaton();
  const onBackWithArrowLeft = () => {
    if (pageOpenAs === "INSTITUTE") {
      navigate(`/q/${params.username}/admission?a=ongoing`, {
        state: {
          ...carryParentState,
        },
      });
    } else {
      navigate(`/q/${params.username}/member/admission?a=ongoing`, {
        state: {
          ...carryParentState,
        },
      });
    }
  };

  const onExportApplicationApplicant = () => {
    if (applicationDetail?._id && tabStatusFlow) {
      setDisabled((pre) => !pre);
      hostelExportApplicantApplicaton({
        appId: applicationDetail?._id,
        flow: tabStatusFlow,
      })
        .then((res) => {
          setNotificationState({
            msg: res?.data?.message,
            run: true,
          });
          setTimeout(() => {
            if (pageOpenAs === "INSTITUTE") {
              navigate(`/q/${params.username}/admission?a=export`, {
                state: carryParentState,
              });
            } else {
              navigate(`/q/${params.username}/member/admission?a=export`, {
                state: carryParentState,
              });
            }
          }, 1000);
        })
        .catch({});
    }
  };

  return (
    <>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{applicationDetail?.applicationName ?? ""}</h6>
          <div className={style.search_container_filter}>
            <section className={style.search_container}>
              <div className={style.search_container_input}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                {children}
              </div>
            </section>
            <Link
              to={"/q/joining"}
              state={{
                formAs: "STUDENT",
                openAs: "ADMISSION_ADMIN_SIDE",
                instituteId: instituteId,
                appId: applicationDetail?._id,
                admissionAmount: [
                  applicationDetail?.admissionFee ?? 0,
                  applicationDetail?.one_installments?.fees ?? 0,
                ],
                applicationMaster: applicationDetail?.applicationMaster,
                applicationDepartment:
                  applicationDetail?.applicationDepartment?._id,
                batchId: applicationDetail?.applicationBatch?._id,
                departmentId: applicationDetail?.applicationDepartment?._id,
                whichFormShow: "DEPARTMENT",

                // otherField: oneApplicationDetail?.oneApply,
              }}
            >
              <img
                style={{
                  height: "2.2rem",
                  cursor: "pointer",
                }}
                src="/images/add-icon.svg"
                alt="icon"
                title="Add student"
              />
            </Link>
            <img
              style={{
                height: "2.2rem",
                cursor: "pointer",
              }}
              onClick={() => setViewDetail(true)}
              src="/images/application_info.svg"
              alt="icon"
              title="View Application Details"
            />
            {accessExport.includes(tabStatusFlow) ? (
              <img
                style={{
                  height: "2.2rem",
                  cursor: "pointer",
                }}
                onClick={onExportApplicationApplicant}
                src="/images/member_tab/finance/finance-export-icon.svg"
                alt=""
              />
            ) : null}
            {tabStatusFlow === "Confirm_Query" ? (
              <img
                style={{
                  height: "2.2rem",
                  cursor: "pointer",
                }}
                onClick={() => setTransfer(true)}
                src="/images/member_tab/admission/admission-transfer-icon.svg"
                alt=""
              />
            ) : null}
          </div>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      {viewDetail && (
        <AdmissionApplicationDetail
          completeApplication
          viewDetail={viewDetail}
          applicationDetail={applicationDetail}
          hideModal={setViewDetail}
          carryParentState={carryParentState}
          applicationDetailApplicablePending={
            applicationDetailApplicablePending
          }
          pageOpenAs={pageOpenAs}
        />
      )}

      {transfer && (
        <AdmissionApplicantTransfer
          instituteId={instituteId}
          applicationId={applicationDetail?._id}
          onClose={() => setTransfer(false)}
          onRefetchConfirmTab={onRefetchConfirmTab}
        />
      )}

      {disabled && <QLoader />}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="success"
      />
    </>
  );
};

export default AdmissionOngoingWrapper;
