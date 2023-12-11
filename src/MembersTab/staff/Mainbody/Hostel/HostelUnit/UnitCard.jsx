import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../../../../../InstituteHostel/InstituteHostel.module.css";
import HostelTabChangeLink from "../HostelTabChangeLink";
import StudentHostelTabChangeLink from "../../../../student/Mainbody/StudentHostel/StudentHostelTabChangeLink";
import { Link, useParams } from "react-router-dom";
import InstituteHostelTabChangeLink from "../../../../../InstituteHostel/InstituteHostelTabChange";

const UnitCard = ({
  hostelUnit,
  carryParentState,
  viewAs,
  callApi,
  pageOpenAs,
}) => {
  const params = useParams();
  return (
    <>
      {viewAs === "STUDENT" ? (
        <StudentHostelTabChangeLink
          carryParentState={{ ...carryParentState, huid: hostelUnit?._id }}
          activeTab="unit&n=menu&n=room"
          // accessRole={accessRole}
        >
          <div className={style.hostel_warden_card}>
            <img
              src={
                hostelUnit?.hostel_unit_photo
                  ? `${imageShowUrl}/${hostelUnit?.hostel_unit_photo}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.warden_card_text}>
              <h6>{hostelUnit?.hostel_unit_name ?? ""}</h6>
              <p>{`${hostelUnit?.hostel_unit_head?.staffFirstName ?? ""} ${
                hostelUnit?.hostel_unit_head?.staffMiddleName ?? ""
              } ${hostelUnit?.hostel_unit_head?.staffLastName ?? ""}`}</p>
            </div>
          </div>
        </StudentHostelTabChangeLink>
      ) : viewAs === "HOSTEL_SEARCH" ? (
        <Link
          to={`/q/${params.username}/hostel/profile?a=unit&n=menu&n=room`}
          state={{ ...carryParentState, huid: hostelUnit?._id }}
        >
          <div className={style.hostel_warden_card}>
            <img
              src={
                hostelUnit?.hostel_unit_photo
                  ? `${imageShowUrl}/${hostelUnit?.hostel_unit_photo}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.warden_card_text}>
              <h6>{hostelUnit?.hostel_unit_name ?? ""}</h6>
              <p>{`${hostelUnit?.hostel_unit_head?.staffFirstName ?? ""} ${
                hostelUnit?.hostel_unit_head?.staffMiddleName ?? ""
              } ${hostelUnit?.hostel_unit_head?.staffLastName ?? ""}`}</p>
            </div>
          </div>
        </Link>
      ) : pageOpenAs === "INSTITUTE" ? (
        <InstituteHostelTabChangeLink
          carryParentState={{
            ...carryParentState,
            huid: hostelUnit?._id,
            unitName: hostelUnit?.hostel_unit_name,
          }}
          activeTab={
            viewAs === "RENEWAL" ? "request&renewal&application" : "unit&n=info"
          }
        >
          <div className={style.hostel_warden_card}>
            <img
              src={
                hostelUnit?.hostel_unit_photo
                  ? `${imageShowUrl}/${hostelUnit?.hostel_unit_photo}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.warden_card_text}>
              <h6>{hostelUnit?.hostel_unit_name ?? ""}</h6>
              <p>{`${hostelUnit?.hostel_unit_head?.staffFirstName ?? ""} ${
                hostelUnit?.hostel_unit_head?.staffMiddleName ?? ""
              } ${hostelUnit?.hostel_unit_head?.staffLastName ?? ""}`}</p>
            </div>
          </div>
        </InstituteHostelTabChangeLink>
      ) : (
        <HostelTabChangeLink
          carryParentState={{
            ...carryParentState,
            huid: hostelUnit?._id,
            unitName: hostelUnit?.hostel_unit_name,
          }}
          activeTab={
            viewAs === "RENEWAL" ? "request&renewal&application" : "unit&n=info"
          }
          callApi={callApi}
          // accessRole={accessRole}
        >
          <div className={style.hostel_warden_card}>
            <img
              src={
                hostelUnit?.hostel_unit_photo
                  ? `${imageShowUrl}/${hostelUnit?.hostel_unit_photo}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.warden_card_text}>
              <h6>{hostelUnit?.hostel_unit_name ?? ""}</h6>
              <p>{`${hostelUnit?.hostel_unit_head?.staffFirstName ?? ""} ${
                hostelUnit?.hostel_unit_head?.staffMiddleName ?? ""
              } ${hostelUnit?.hostel_unit_head?.staffLastName ?? ""}`}</p>
            </div>
          </div>
        </HostelTabChangeLink>
      )}
    </>
  );
};

export default UnitCard;
