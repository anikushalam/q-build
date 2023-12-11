import React, { useState } from "react";
import style from "./UserStatus.module.css";
import Tab from "./Components/Tab";
import Requests from "./Requests/Requests";
import InsTable from "./Components/InstituteTable/InsTable";
import TabDark from "../InsStatus/Components/TabDark";
import RequestTable from "./Components/RequestTable/RequestTable";
import DeactivateTable from "./Components/DeactivateTable/DeactivateTable";
import UserProfileDetail from "../profileDetail/user/UserProfileDetail";

function UserStatus({ count }) {
  const [index, setIndex] = useState(1);
  const [detailView, setDetailView] = useState(false);
  const [openUser, setOpenUser] = useState('')

  return (
    <>
      {detailView && <UserProfileDetail setDetailView={setDetailView} openUser={openUser} setOpenUser={setOpenUser}/>}

      {!detailView && (
        <div className={style.insStatus}>
          <div className={style.insname}>Users</div>

          <div className={style.tabs}>
            <div className={style.tab} onClick={() => setIndex(1)}>
              {index === 1 ? (
                <TabDark
                  name="All Users"
                  img="/images/admin/users-icon.svg"
                  imgDark="/images/admin/users-dark-icon.svg"
                  imgType="user"
                />
              ) : (
                <Tab
                  name="All Users"
                  img="/images/admin/users-icon.svg"
                  imgDark="/images/admin/users-dark-icon.svg"
                  imgType="user"
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
                  name="Deactivate"
                  img="/images/admin/deactivate-icon.svg"
                  imgDark="/images/admin/deactivate-white-icon.svg"
                />
              ) : (
                <Tab
                  name="Deactivate"
                  img="/images/admin/deactivate-icon.svg"
                  imgDark="/images/admin/deactivate-white-icon.svg"
                />
              )}
            </div>

            <div className={style.tab} onClick={() => setIndex(4)}>
              {index === 4 ? (
                <TabDark
                  name="ID Cards"
                  img="/images/admin/idcard-icon.svg"
                  imgDark="/images/admin/idcard-white-icon.svg"
                />
              ) : (
                <Tab
                  name="ID Cards"
                  img="/images/admin/idcard-icon.svg"
                  imgDark="/images/admin/idcard-white-icon.svg"
                />
              )}
            </div>
          </div>

          {index === 1 && (
            <div className={style.requests}>
              <Requests nbr={count?.admins?.userCount} text="Total Users" />
              <InsTable
                setDetailView={setDetailView}
                setOpenUser={setOpenUser}
              />
            </div>
          )}

          {index === 2 && (
            <div className={style.requests}>
              {/* <Requests nbr={8} text="Total Requests" /> */}
              <RequestTable setDetailView={setDetailView} />
            </div>
          )}

          {index === 3 && (
            <div className={style.requests}>
              {/* <Requests nbr={8} text="Total Deactivations" /> */}
              <DeactivateTable />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UserStatus;
