import React, { useCallback } from "react";
// import { Link, useParams } from "react-router-dom";
import style from "../StaffMemberConfig.module.css";
import { assestsUserMemberUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { memberChangeAction } from "@/Store/member-slice";
const StaffSelectedDesignation = ({ isView, data }) => {
  const { t } = useTranslation();
  // const params = useParams();
  const dispatch = useDispatch();
  const sidbarCollapse = useSelector((state) => state.memberChange.sidebar);

  const onSidebarUnCollaps = useCallback(() => {
    dispatch(memberChangeAction.sidebarToggle(""));
  }, [dispatch]);

  return (
    <div className={style.smc_header_container}>
      {sidbarCollapse ? (
        <div className={style.smc_side_unwrap}>
          <img
            src={`${assestsUserMemberUrl}/hamburger.svg`}
            alt="go back icon"
            onClick={onSidebarUnCollaps}
          />
        </div>
      ) : null}

      {/* <Link
        to={`/q/${params.username}/member/staff/designation`}
        style={{
          width: "99%",
        }}
      > */}
      {/* <div className={style.smc_selected_designation_container}>
        <div className={style.smc_selected_designation_container_inner}>
          <img
            src={`${assestsUserMemberUrl}/hamburger.svg`}
            //   src={`${assestsUserMemberUrl}/${data?.urlIcon}`}
            alt="member icon"
          />
          <h6>{data?.label ?? "Finance Manager"}</h6>
        </div>
      </div> */}
      {/* </Link> */}
      {isView === "Designation" ? (
        <div className={style.smc_selected_designation_container}>
          <div className={style.smc_selected_designation_container_inner}>
            <img
              src={`${assestsUserMemberUrl}/hamburger.svg`}
              //   src={`${assestsUserMemberUrl}/${data?.urlIcon}`}
              alt="member icon"
            />
            <h6>{t("select_designation")}</h6>
          </div>
        </div>
      ) : (
        <div className={style.smc_selected_designation_container}>
          <div className={style.smc_selected_designation_container_inner}>
            <img
              src={`${assestsUserMemberUrl}/hamburger.svg`}
              //   src={`${assestsUserMemberUrl}/${data?.urlIcon}`}
              alt="member icon"
            />
            <h6>{data?.label ?? "Finance Manager"}</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffSelectedDesignation;
