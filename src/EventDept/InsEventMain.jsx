import React from "react";
import style from "./InsEventDeptMain.module.css";
import CommonTab from "../Sidebar/CommonTab";
import { useGeteventDeptDetail } from "../hooks/member_tab/event-api";
import { useParams } from "react-router-dom";
import Sidebar from "./InsEventSidebar/InsEventSidebar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import InsEventMenu from "./InsEventMenu";
import InsEventFunction from "./InsEventFunction/InsEventFunction";
import InsEventDeptFunction from "./InsEventDeptFunction/InsEventDeptFunction";
import InsDepartmentList from "./InsEventFunction/InsDepartmentList/InsDepartmentList";
import { useLocation } from "react-router-dom";

function InsEventMain() {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [status, setStatus] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [did, setDid] = useState("");

  const params = useParams();
  const { getEventDeptDetail, getEventDeptDetailRefetch } =
    useGeteventDeptDetail({
      eid: getQuery?.state?.eid,
      skip: !getQuery?.state?.eid,
    });

  return (
    <div className={style.main}>
      <div className={style.sidebar}>
        <Sidebar
          username={params.username}
          event={getEventDeptDetail?.manager}
          eventRefetch={getEventDeptDetailRefetch}
        />
      </div>
      <div className={style.rightbody}>
        {status === "" && (
          <div className={style.admission_tab_tabs}>
            <CommonTab
              tabLevel={t("menu")}
              onTabAction={() => setActiveIndex(0)}
              customStyleContainer={{
                width: "50%",
                marginRight: "2px",
                borderTopLeftRadius: "0.3rem",
              }}
              customStyleLevel={{ borderTopLeftRadius: "0.3rem" }}
              tabValue={0}
              currentValue={activeIndex}
            />
            <CommonTab
              tabLevel={t("departments")}
              onTabAction={() => setActiveIndex(1)}
              customStyleContainer={{
                width: "50%",
                borderTopRightRadius: "0.3rem",
              }}
              customStyleLevel={{ borderTopLeftRadius: "0.3rem" }}
              tabValue={1}
              currentValue={activeIndex}
            />
          </div>
        )}

        {status === "" && activeIndex === 0 && (
          <InsEventMenu setStatus={setStatus} />
        )}
        {status === "" && activeIndex === 1 && (
          <InsDepartmentList setStatus={setStatus} setDid={setDid} />
        )}
        {(status === "eventFunction" || status === "seminarFunction") &&
          activeIndex === 0 && (
            <InsEventFunction
              status={status}
              setStatus={setStatus}
              eid={getQuery?.state?.eid}
              seminarCount={getEventDeptDetail?.manager?.seminar_count}
              eventCount={getEventDeptDetail?.manager?.event_count}
            />
          )}

        {status === "deptEventFunction" && activeIndex === 1 && (
          <InsEventDeptFunction
            status={status}
            setStatus={setStatus}
            eid={did}
          />
        )}
      </div>
    </div>
  );
}

export default InsEventMain;
