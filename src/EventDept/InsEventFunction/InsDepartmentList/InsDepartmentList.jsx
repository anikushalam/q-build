import React from "react";
import { useSelector } from "react-redux";
import style from "./DepartmentList.module.css";
import { useTranslation } from "react-i18next";
import { useAllDepartment } from "../../../Department/Institute/Components/DepartmentApi/depart-api";

function DepartmentList({ carryParentState, setStatus, setDid }) {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: id,
    skip: !id,
  });

  return (
    <div className={style.department_container}>
      {allDepartment?.institute?.depart?.map((depart) => (
        <div
          className={style.department_card_container}
          onClick={() => {
            setDid(depart?._id);
            setStatus("deptEventFunction");
          }}
        >
          <img
            src="/images/profileAndCover/department-profile-img.svg"
            alt="department avatar"
            className={style.department_card_image}
          />
          <div>
            <h6 className={style.department_card_name}>
              {depart?.dName || ""}
            </h6>
            <p className={style.department_card_head}>
              {t("total_masters")} {depart?.classMasterCount ?? 0}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DepartmentList;
