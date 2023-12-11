import React, { useState } from "react";
import style from "../Hostel.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useNavigate, useParams } from "react-router-dom";
import HostelApplicationDetail from "./HostelApplicationDetail";
import { useHostelExportApplicantApplicaton } from "../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../Loader/QLoader";
import { Notfication } from "../../../../../validation/Snackbar";
const accessExport = ["Request_Query", "Confirm_Query", "Allot_Query"];

const HostelOngoingTitle = ({
  applicationDetail,
  carryParentState,
  unitName,
  tabStatusFlow,
  applicationDetailApplicablePending,
  pageOpenAs,
  children,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  const [viewDetail, setViewDetail] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [hostelExportApplicantApplicaton] =
    useHostelExportApplicantApplicaton();
  const onBackWithArrowLeft = () => {
    if (pageOpenAs === "INSTITUTE") {
      navigate(`/q/${params.username}/hostel?a=request`, {
        state: {
          ...carryParentState,
        },
      });
    } else {
      navigate(`/q/${params.username}/member/hostel?a=request`, {
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
              navigate(`/q/${params.username}/hostel?a=export`, {
                state: carryParentState,
              });
            } else {
              navigate(`/q/${params.username}/member/hostel?a=export`, {
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
          <h6>{applicationDetail?.applicationName ?? unitName ?? ""}</h6>
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
            {!unitName && (
              <img
                style={{
                  height: "2.2rem",
                  cursor: "pointer",
                }}
                onClick={() => setViewDetail(true)}
                src="/images/application_info.svg"
                alt=""
              />
            )}

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
        <HostelApplicationDetail
          completeApplication={true}
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

export default HostelOngoingTitle;
