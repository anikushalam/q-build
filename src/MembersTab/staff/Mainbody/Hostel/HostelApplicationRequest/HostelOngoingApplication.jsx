import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetOngoingApplicationList } from "../../../../../hooks/member_tab/hostel-api";
import HostelTabChangeLink from "../HostelTabChangeLink";
import ApplicationMenu from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/OngoingApplication/ApplicationMenu";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useTranslation } from "react-i18next";
import style from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import CreateAdmissionApplication from "../../StaffAdmisionAdmin/AdmisionApplication/CreateApplication/CreateAdmissionApplication";
import InstituteHostelTabChangeLink from "../../../../../InstituteHostel/InstituteHostelTabChange";

function Item({
  data,
  carryParentState,
  accessRole,
  accessTpye,
  accessApplication,
  setOpenApplicationMenu,
  callApi,
  pageOpenAs,
}) {
  const onMenu = (e) => {
    e.preventDefault();
    setOpenApplicationMenu(data);
  };
  return (
    <>
      {accessRole ? (
        accessTpye ? (
          <HostelTabChangeLink
            carryParentState={{
              ...carryParentState,
              applicationId: data?._id,
              unitId: data?.applicationUnit?._id,
            }}
            // activeTab="request&ongoing&n=application"
            activeTab={`request&ongoing&n=${
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
                  <p
                    style={{
                      marginBottom: "0",
                    }}
                  >
                    {data?.applicationUnit?.hostel_unit_name ?? ""}
                  </p>
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
          </HostelTabChangeLink>
        ) : accessApplication?.includes(data?._id) ? (
          <HostelTabChangeLink
            carryParentState={{
              ...carryParentState,
              applicationId: data?._id,
              unitId: data?.applicationUnit?._id,
            }}
            activeTab="request&ongoing&n=application"
            accessRole={accessRole}
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
                  <p
                    style={{
                      marginBottom: "0",
                    }}
                  >
                    {data?.applicationUnit?.hostel_unit_name ?? ""}
                  </p>
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
          </HostelTabChangeLink>
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
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {" "}
                  {data?.applicationUnit?.hostel_unit_name ?? ""}
                </p>
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
      ) : pageOpenAs === "INSTITUTE" ? (
        <InstituteHostelTabChangeLink
          carryParentState={{
            ...carryParentState,
            applicationId: data?._id,
            unitId: data?.applicationUnit?._id,
          }}
          activeTab="request&ongoing&n=application"
        >
          <div className={style.ongoing_card}>
            <div className={style.ongoing_card_inner}>
              <img
                alt="Ongoing App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.ongoing_card_text}>
                <h6>{data?.applicationName}</h6>
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {data?.applicationUnit?.hostel_unit_name ?? ""}
                </p>
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
        </InstituteHostelTabChangeLink>
      ) : (
        <HostelTabChangeLink
          carryParentState={{
            ...carryParentState,
            applicationId: data?._id,
            unitId: data?.applicationUnit?._id,
          }}
          activeTab="request&ongoing&n=application"
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
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {data?.applicationUnit?.hostel_unit_name ?? ""}
                </p>
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
        </HostelTabChangeLink>
      )}
    </>
  );
}

function HostelOngoingApplication({
  hid,
  accessRole,
  accessTpye,
  carryParentState,
  accessApplication,
  callApi,
  pageOpenAs,
}) {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [ongoing, setOngoing] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [openApplicationMenu, setOpenApplicationMenu] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [createApplication, setCreateApplication] = useState(false);
  const { getOngoingApplicationList, getOngoingApplicationListRefetch } =
    useGetOngoingApplicationList({
      data: {
        hid: hid,
        page: page,
        limit: 10,
      },
      skip: !hid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getOngoingApplicationListRefetch();
    }
  }, [hid, page, getOngoingApplicationListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setOngoing(getOngoingApplicationList?.ongoing);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getOngoingApplicationList?.ongoing) {
        setOngoing((prevState) =>
          [
            ...new Set(
              [...prevState, ...getOngoingApplicationList?.ongoing]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getOngoingApplicationList?.ongoing?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getOngoingApplicationList?.ongoing?.length === 10) setState(true);
    else setState(false);
  }, [getOngoingApplicationList?.ongoing]);

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getOngoingApplicationListRefetch();
  };
  const onClose = () => {
    if (!accessRole) {
      setCreateApplication((pre) => !pre);
    }
  };
  return (
    <>
      <p
        className={style.add_new_category}
        onClick={onClose}
        style={{
          opacity: accessRole ? "0.5" : 1,
        }}
      >
        {t("create_new_application")}
      </p>
      <div className={style.remainingFees}>
        {ongoing?.map((ele, index) =>
          ongoing?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <Item
                data={ele}
                carryParentState={carryParentState}
                accessRole={accessRole}
                accessTpye={accessTpye}
                accessApplication={accessApplication}
                setOpenApplicationMenu={setOpenApplicationMenu}
                callApi={callApi}
                pageOpenAs={pageOpenAs}
              />
            </div>
          ) : (
            <Item
              data={ele}
              key={index}
              carryParentState={carryParentState}
              accessRole={accessRole}
              accessTpye={accessTpye}
              accessApplication={accessApplication}
              setOpenApplicationMenu={setOpenApplicationMenu}
              callApi={callApi}
              pageOpenAs={pageOpenAs}
            />
          )
        )}
        {showingDataLoading && <QvipleLoading />}

        {openApplicationMenu && (
          <ApplicationMenu
            openApplicationMenu={openApplicationMenu}
            onClose={() => setOpenApplicationMenu("")}
            onRefetch={onRefetchWhenCreate}
            viewAs="HOSTEL_MANAGER"
            hostelId={hid}
          />
        )}
      </div>
      {createApplication && (
        <CreateAdmissionApplication
          setCreateApplication={setCreateApplication}
          createApplication={createApplication}
          hostelId={hid}
          setRefetchOngoining={onRefetchWhenCreate}
          viewAs="HOSTEL_MANAGER"
        />
      )}
    </>
  );
}

export default HostelOngoingApplication;
