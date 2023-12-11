import React from "react";
import style from "./SelectSiteDepartment.module.css";
import { Link, useParams } from "react-router-dom";
const SelectDepartmentCard = ({ depart, isExcel }) => {
  const params = useParams();

  return (
    <>
      {isExcel ? (
        <div className={style.select_department_card_container}>
          <img
            src="/images/profileAndCover/department-profile-img.svg"
            alt="department avatar"
            className={style.select_department_card_image}
          />
          <h6 className={style.select_department_card_name}>
            {depart?.dName || "Mechanical Engineering"}
          </h6>
        </div>
      ) : (
        <Link
          to={`/q/${params.username}/viewdept?a=site`}
          state={{
            did: depart?._id,
          }}
        >
          <div className={style.select_department_card_container}>
            <img
              src="/images/profileAndCover/department-profile-img.svg"
              alt="department avatar"
              className={style.select_department_card_image}
            />
            <h6 className={style.select_department_card_name}>
              {depart?.dName || "Mechanical Engineering"}
            </h6>
          </div>
        </Link>
      )}
    </>
  );
};

export default SelectDepartmentCard;
