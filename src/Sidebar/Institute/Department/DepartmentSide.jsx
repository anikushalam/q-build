import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./DepartmentSide.module.css";
import DepartmentSideBottom from "./DepartmentSideBottom";
import { Link, useParams } from "react-router-dom";
const DepartmentSide = ({
  name,
  batch,
  deptHead,
  classes,
  staff,
  student,
  about,
  photoKey,
  deptPlace,
  coverKey,
  type,
  subject,
}) => {
  const params = useParams();
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarback}>
        <Link
          to={
            type === "department"
              ? `/q/${params?.username}/department`
              : `/q/${params?.username}/viewdept`
          }
        >
          <div className={style.sidebarbackflex}>
            <img src="/images/arr-left-white.svg" alt="back icon" />
            <h6>Go Back</h6>
          </div>
        </Link>
      </div>
      <div className={style.sidebartopp}>
        <div className={style.sidebartoppHead}>
          <img
            src={
              coverKey
                ? `${imageShowUrl}/${coverKey}`
                : type === "department"
                ? "/images/profileAndCover/department-cover.svg"
                : "/images/profileAndCover/classroom-cover.svg"
            }
            style={
              !coverKey
                ? { marginTop: "-0.77vw" }
                : { marginTop: "0", height: "10.7vw" }
            }
            alt="department cover icon"
          />

          <div className={`${style.imgcontainer} ${style.imgposition}`}>
            <img
              alt="not found"
              src={
                photoKey
                  ? `${imageShowUrl}/${photoKey}`
                  : type === "department"
                  ? "/images/profileAndCover/department-profile-img.svg"
                  : "/images/profileAndCover/classroom-profile-img.svg"
              }
            />
          </div>
        </div>

        <img
          src="/images/menu-dots-icon.svg"
          alt="menu icon"
          className={style.menudots}
        />

        <div className={style.textContainerr}>
          <h6>
            {name.substr(0, 20)}
            {name.length >= 20 ? `...` : ""}
          </h6>
          <p className={style.batch}>{batch}</p>
        </div>
        <div className={style.countsContainer}>
          {type === "department" ? (
            <>
              <div className={style.count}>
                <h6>{classes}</h6>
                <p>Classes</p>
              </div>
              <div className={style.count}>
                <h6>{student}</h6>
                <p>Students</p>
              </div>
              <div className={style.count}>
                <h6>{staff}</h6>
                <p>Staffs</p>
              </div>
            </>
          ) : (
            <>
              <div className={style.count}>
                <h6>{student}</h6>
                <p>Students</p>
              </div>
              <div className={style.count}>
                <h6>{subject}</h6>
                <p>Subjects</p>
              </div>
            </>
          )}
        </div>
      </div>

      <DepartmentSideBottom
        deptHead={
          deptHead &&
          `${deptHead.staffFirstName} ${
            deptHead.staffMiddleName ? deptHead.staffMiddleName : ""
          } ${deptHead.staffLastName}`
        }
        headPhoto={deptHead?.staffProfilePhoto}
        about={about}
        deptPlace={deptPlace}
      />
    </div>
  );
};

export default DepartmentSide;
