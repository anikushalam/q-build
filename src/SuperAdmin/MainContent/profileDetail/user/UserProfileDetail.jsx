import React from "react";
import style from "../institute//profileDetail.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Middle from "./Main/Middle";
import { useGetAdminOpenOneUserQuery } from "../../../../services/superAdminAPI";

function UserProfileDetail({ setDetailView, openUser, setOpenUser }) {

  const { data: oneUser, refetch: oneFetch } = useGetAdminOpenOneUserQuery(`${openUser && openUser }`)
  return (
    <div className={style.mainbody}>
      <Sidebar status="profile" sideData={oneUser} fetch={oneFetch}/>
      <Middle setDetailView={setDetailView} middleData={oneUser} setOpenUser={setOpenUser} upVote={oneUser?.upVote}/>
    </div>
  );
}

export default UserProfileDetail;
