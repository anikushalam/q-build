import React from "react";
import AdmissionTabChangeLink from "../../AdmissionTabChangeLink";
import style from "../AdmissionApplicationRequest.module.css";
import InstituteAdmissionTabChangeLink from "../../../../../../AdmisionAdmin/InstituteAdmissionTabChangeLink";

const OngoingApplicationCard = ({
  data,
  carryParentState,
  accessRole,
  accessApplication,
  setOpenApplicationMenu,
  accessTpye,
  callApi,
  pageOpenAs,
}) => {
  const onMenu = (e) => {
    e.preventDefault();
    setOpenApplicationMenu(data);
  };

  return (
    <>
      {pageOpenAs === "INSTITUTE" ? (
        <InstituteAdmissionTabChangeLink
          carryParentState={{ ...carryParentState, applicationId: data?._id }}
          activeTab="?a=ongoing&n=application"
        >
          <div className={style.ongoing_card}>
            <div className={style.ongoing_card_inner}>
              <img
                alt="Ongoing App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.ongoing_card_text}>
                <h6>{data?.applicationName}</h6>
                <p>{data?.applicationDepartment?.dName}</p>
              </div>
            </div>
            <div className={style.ongoing_card_count_date}>
              <div className={style.ongoing_card_count_container}>
                <h6>{data?.receievedCount ?? 0}</h6>
                <h6>{data?.selectCount ?? 0}</h6>
                <h6>{data?.confirmCount ?? 0}</h6>
              </div>
            </div>

            <img
              src="/images/three-24-dot-icon.svg"
              alt="menu icon"
              onClick={onMenu}
              className={style.menu_icon}
              title="Menu"
            />
          </div>
        </InstituteAdmissionTabChangeLink>
      ) : accessRole ? (
        accessTpye ? (
          <AdmissionTabChangeLink
            carryParentState={{ ...carryParentState, applicationId: data?._id }}
            activeTab={`ongoing&n=${
              accessTpye === "Application"
                ? "application"
                : accessTpye === "Selected"
                ? "select"
                : accessTpye === "Confirmed"
                ? "confirm"
                : accessTpye === "Allotted"
                ? "allot"
                : "cancel"
            }`}
            accessRole={accessRole}
            accessTpye={accessTpye}
            callApi={callApi}
          >
            <div className={style.ongoing_card}>
              <div className={style.ongoing_card_inner}>
                <img
                  alt="Ongoing App"
                  src="/images/admision-application-icon.svg"
                />
                <div className={style.ongoing_card_text}>
                  <h6>{data?.applicationName}</h6>
                  <p>{data?.applicationDepartment?.dName}</p>
                </div>
              </div>
              <div className={style.ongoing_card_count_date}>
                <div className={style.ongoing_card_count_container}>
                  <h6>{data?.receievedCount ?? 0}</h6>
                  <h6>{data?.selectCount ?? 0}</h6>
                  <h6>{data?.confirmCount ?? 0}</h6>
                </div>
                {/* <div className={style.ongoing_card_text}>
                  <p
                    style={{
                      marginRight: "2rem",
                    }}
                  >
                    {data?.applicationEndDate}
                  </p>
                </div> */}
              </div>
            </div>
          </AdmissionTabChangeLink>
        ) : accessApplication?.includes(data?._id) ? (
          <AdmissionTabChangeLink
            carryParentState={{ ...carryParentState, applicationId: data?._id }}
            // activeTab={`ongoing&n=${
            //   accessTpye === "Application"
            //     ? "application"
            //     : accessTpye === "Selected"
            //     ? "select"
            //     : accessTpye === "Confirmed"
            //     ? "confirm"
            //     : accessTpye === "Allotted"
            //     ? "allot"
            //     : "cancel"
            // }`}
            activeTab={`ongoing&n=application`}
            accessRole={accessRole}
            callApi={callApi}

            // accessTpye={accessTpye}
          >
            <div className={style.ongoing_card}>
              <div className={style.ongoing_card_inner}>
                <img
                  alt="Ongoing App"
                  src="/images/admision-application-icon.svg"
                />
                <div className={style.ongoing_card_text}>
                  <h6>{data?.applicationName}</h6>
                  <p>{data?.applicationDepartment?.dName}</p>
                </div>
              </div>
              <div className={style.ongoing_card_count_date}>
                <div className={style.ongoing_card_count_container}>
                  <h6>{data?.receievedCount ?? 0}</h6>
                  <h6>{data?.selectCount ?? 0}</h6>
                  <h6>{data?.confirmCount ?? 0}</h6>
                </div>
                {/* <div className={style.ongoing_card_text}>
                  <p
                    style={{
                      marginRight: "2rem",
                    }}
                  >
                    {data?.applicationEndDate}
                  </p>
                </div> */}
              </div>
            </div>
          </AdmissionTabChangeLink>
        ) : (
          <div
            className={style.ongoing_card}
            style={{
              opacity: "0.5",
            }}
          >
            <div className={style.ongoing_card_inner}>
              <img
                alt="Ongoing App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.ongoing_card_text}>
                <h6>{data?.applicationName}</h6>
                <p>{data?.applicationDepartment?.dName}</p>
              </div>
            </div>
            <div className={style.ongoing_card_count_date}>
              <div className={style.ongoing_card_count_container}>
                <h6>{data?.receievedCount ?? 0}</h6>
                <h6>{data?.selectCount ?? 0}</h6>
                <h6>{data?.confirmCount ?? 0}</h6>
              </div>
              {/* <div className={style.ongoing_card_text}>
                <p
                  style={{
                    marginRight: "2rem",
                  }}
                >
                  {data?.applicationEndDate}
                </p>
              </div> */}
            </div>
          </div>
        )
      ) : (
        <AdmissionTabChangeLink
          carryParentState={{ ...carryParentState, applicationId: data?._id }}
          activeTab="ongoing&n=application"
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
        >
          <div className={style.ongoing_card}>
            <div className={style.ongoing_card_inner}>
              <img
                alt="Ongoing App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.ongoing_card_text}>
                <h6>{data?.applicationName}</h6>
                <p>{data?.applicationDepartment?.dName}</p>
              </div>
            </div>
            <div className={style.ongoing_card_count_date}>
              <div className={style.ongoing_card_count_container}>
                <h6>{data?.receievedCount ?? 0}</h6>
                <h6>{data?.selectCount ?? 0}</h6>
                <h6>{data?.confirmCount ?? 0}</h6>
              </div>
              {/* <div className={style.ongoing_card_text}>
                <p
                  style={{
                    marginRight: "2rem",
                  }}
                >
                  {data?.applicationEndDate}
                </p>
              </div> */}
            </div>

            <img
              src="/images/three-24-dot-icon.svg"
              alt="menu icon"
              onClick={onMenu}
              className={style.menu_icon}
              title="Menu"
            />
          </div>
        </AdmissionTabChangeLink>
      )}
    </>
  );
};

export default OngoingApplicationCard;
