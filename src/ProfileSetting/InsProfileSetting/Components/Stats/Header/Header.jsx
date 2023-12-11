import React, { useEffect } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";
import { useSelector } from "react-redux";

function Header() {
  const id = useSelector((state) => state.idChange.id);
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);
  return (
    <Link to={`/q/${oneInstituteDashboard?.institute?.name}/profile`}>
      <div className={style.header}>
        <div className={style.imgContainer}>
          {/* <Link to={`/q/${oneInstituteDashboard?.institute?.name}/profile`}> */}
          <img
            src={
              oneInstituteDashboard?.institute?.photoId !== "1"
                ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
            alt=""
          />
          {/* </Link> */}
        </div>
        <div className={style.textContainer}>
          <h5>{oneInstituteDashboard?.institute?.name}</h5>
          <p>{oneInstituteDashboard?.institute?.insName}</p>
        </div>
      </div>
    </Link>
  );
}

export default Header;
