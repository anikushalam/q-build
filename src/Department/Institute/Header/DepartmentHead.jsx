import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../../../hooks/dashboard/dashboard-api";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./DepartmentHead.module.css";

const DepartmentHead = () => {
  const ids = useSelector((state) => state.idChange);
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);
  return (
    <div>
      <div className={style.main}>
        <img
          src={
            oneInstituteDashboard?.institute?.photoId !== "1"
              ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfileCoverPhoto}`
              : "/images/Institute-cover.svg"
          }
          alt="Insitute avatar"
        />
        <div className={style.textcontainer}>
          <h6>{oneInstituteDashboard?.institute?.insName}</h6>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHead;
