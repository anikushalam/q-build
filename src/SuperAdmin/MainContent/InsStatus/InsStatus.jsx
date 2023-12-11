import React, { useState } from "react";
import style from "./InsStatus.module.css";
import Tab from "./Components/Tab";
import TabDark from "./Components/TabDark";
import Requests from "./Requests/Requests";
import InsTable from "./Components/InstituteTable/InsTable";
import RequestTable from "./Components/RequestTable/RequestTable";
import DeactivateTable from "./Components/DeactivateTable/DeactivateTable";
import IdCards from "./Components/IdCards/IdCards";

import InsprofileDetail from "../profileDetail/institute/InsprofileDetail";

function InsStatus({
  requestData,
  requestFetch,
  instituteCount,
}) {
  const [index, setIndex] = useState(1);
  const [detailView, setDetailView] = useState(false);
  const [openIns, setOpenIns] = useState('')
  const [approveFetch, setApproveFetch] = useState()

  return (
    <>
      {detailView && <InsprofileDetail setDetailView={setDetailView} openIns={openIns && openIns} setOpenIns={setOpenIns}/>}

      {!detailView && (
        <div className={style.insStatus}>
          {/* <div className={style.insname}>Institutes</div> */}

          <div className={style.tabs}>
            <div className={style.tab} onClick={() => setIndex(1)}>
              {index === 1 ? (
                <TabDark
                  name="All Institutes"
                  img="/images/admin/ins-tab-icon.svg"
                  imgDark="/images/admin/ins-tab-white-icon.svg"
                />
              ) : (
                <Tab
                  name="All Institutes"
                  img="/images/admin/ins-tab-icon.svg"
                  imgDark="/images/admin/ins-tab-white-icon.svg"
                />
              )}
            </div>

            <div className={style.tab} onClick={() => setIndex(2)}>
              {index === 2 ? (
                <TabDark
                  name="Request"
                  img="/images/admin/request-icon.svg"
                  imgDark="/images/admin/request-white-icon.svg"
                />
              ) : (
                <Tab
                  name="Request"
                  img="/images/admin/request-icon.svg"
                  imgDark="/images/admin/request-white-icon.svg"
                />
              )}
            </div>

            <div className={style.tab} onClick={() => setIndex(3)}>
              {index === 3 ? (
                <TabDark
                  index={index}
                  name="Deactivate"
                  img="/images/admin/deactivate-icon.svg"
                  imgDark="/images/admin/deactivate-white-icon.svg"
                />
              ) : (
                <Tab
                  index={index}
                  name="Deactivate"
                  img="/images/admin/deactivate-icon.svg"
                  imgDark="/images/admin/deactivate-white-icon.svg"
                />
              )}
            </div>

            <div className={style.tab} onClick={() => setIndex(4)}>
              {index === 4 ? (
                <TabDark
                  index={index}
                  name="ID Cards"
                  img="/images/admin/idcard-icon.svg"
                  imgDark="/images/admin/idcard-white-icon.svg"
                />
              ) : (
                <Tab
                  index={index}
                  name="ID Cards"
                  img="/images/admin/idcard-icon.svg"
                  imgDark="/images/admin/idcard-white-icon.svg"
                />
              )}
            </div>
          </div>

          {index === 1 && (
            <div className={style.requests}>
              <Requests
                nbr={instituteCount && instituteCount}
                text="Total Institutes"
              />
              <InsTable
                setDetailView={setDetailView}
                setApproveFetch={setApproveFetch}
                setOpenIns={setOpenIns}
              />
            </div>
          )}

          {index === 2 && (
            <div className={style.requests}>
              <Requests
                nbr={requestData?.admin?.instituteList?.length}
                text="Total Requests"
              />
              <RequestTable
                requestArray={requestData && requestData.admin}
                approveFetch={approveFetch}
                requestFetch={requestFetch}
                setDetailView={setDetailView}
              />
            </div>
          )}

          {index === 3 && (
            <div className={style.requests}>
              <Requests nbr={0} text="Total Deactivations" />
              <DeactivateTable />
            </div>
          )}

          {index === 4 && (
            <div className={style.requests}>
              <IdCards />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default InsStatus;
