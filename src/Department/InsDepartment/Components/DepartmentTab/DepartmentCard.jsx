import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../redux/store/department-slice";
import style from "./Departments.module.css";
import { useTranslation } from "react-i18next";

const DepartmentCard = ({ depart }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const changeIdHandler = (id) => {
    dispatch(
      idChangeAction.addDepartmentId({
        did: id,
      })
    );
  };
  return (
    <Link
      to={`/q/${depart?.dName}/viewdept`}
      onClick={() => {
        changeIdHandler(depart._id);
      }}
    >
      <div className={style.department_card_container}>
        <img
          src="/images/profileAndCover/department-profile-img.svg"
          alt="department avatar"
          className={style.department_card_image}
        />
        <div>
          <h6 className={style.department_card_name}>
            {depart?.dName || "Mechanical Engineering"}
          </h6>
          <p className={style.department_card_head}>
            {depart?.dHead?.staffFirstName}
            {depart?.dHead?.staffMiddleName
              ? ` ${depart?.dHead?.staffMiddleName} `
              : " "}
            {depart?.dHead?.staffLastName}
          </p>
          <p className={style.department_card_title}>
            {depart?.dTitle || t("hod")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentCard;
