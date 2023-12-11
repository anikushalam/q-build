import React from "react";
import style from "./profileDetail.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Middle from "./Main/Middle";
import { useGetAdminOpenOneInstituteQuery } from "../../../../services/superAdminAPI";

function InsprofileDetail({ setDetailView, openIns, setOpenIns }) {
  const { data: oneInstitute, refetch: oneFetch } = useGetAdminOpenOneInstituteQuery(`${openIns && openIns}`)
  return (
    <div className={style.mainbody}>
      <Sidebar status="profile" data={oneInstitute} fetch={oneFetch}/>
      <Middle setDetailView={setDetailView} insData={oneInstitute} setOpenIns={setOpenIns}/>
    </div>
  );
}

export default InsprofileDetail;
