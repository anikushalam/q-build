import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useGetAnnouncementListByHostel } from "../../../../../hooks/member_tab/hostel-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../Hostel.module.css";
import HostelAnnouncementCard from "./HostelAnnouncementCard";
import HostelNewAnnouncement from "./HostelNewAnnouncement";

const HostelAnnouncement = ({ hid, carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [announcementList, setAnnouncementList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getAnnouncementListByHostel, getAnnouncementListByHostelRefetch } =
    useGetAnnouncementListByHostel({
      data: {
        hid: hid ?? getQuery.state?.hid,
        page: page,
        limit: 10,
      },
      skip: !hid ? !getQuery.state?.hid : !hid,
    });
  useEffect(() => {
    if (hid || getQuery.state?.hid) {
      setShowingDataLoading(true);
      getAnnouncementListByHostelRefetch();
    }
  }, [hid, getQuery.state?.hid, page, getAnnouncementListByHostelRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setAnnouncementList(getAnnouncementListByHostel?.announcement);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getAnnouncementListByHostel?.announcement) {
        setAnnouncementList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAnnouncementListByHostel?.announcement]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAnnouncementListByHostel?.announcement?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAnnouncementListByHostel?.announcement?.length === 10)
      setState(true);
    else setState(false);
  }, [getAnnouncementListByHostel?.announcement]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getAnnouncementListByHostelRefetch();
  };

  return (
    <>
      {!add && (
        <>
          <div className={style.with_search}>
            <h6>{t("hostel_announcement")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              marginTop: "0.5rem",
              marginBottom: "0.6rem",
              width: "100%",
            }}
          />
          {getQuery.state?.viewNotice === "HOSTEL_UNIT_TAB" ? (
            ""
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <p className={style.add_new_category} onClick={onClose}>
                {t("create_new_announcement")}
              </p>
            </div>
          )}

          {announcementList?.map((announcement, index) =>
            announcementList?.length === index + 1 ? (
              <div ref={ref} key={announcement?._id}>
                <HostelAnnouncementCard announcement={announcement} />
              </div>
            ) : (
              <HostelAnnouncementCard
                key={announcement?._id}
                announcement={announcement}
              />
            )
          )}

          {showingDataLoading && <QvipleLoading />}
        </>
      )}
      {add && (
        <HostelNewAnnouncement
          onClose={onClose}
          hid={hid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default HostelAnnouncement;
