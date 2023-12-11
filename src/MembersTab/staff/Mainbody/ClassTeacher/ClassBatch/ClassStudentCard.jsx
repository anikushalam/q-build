import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../ClassCatalog/Catalog/Catalog.module.css";
import { useTranslation } from "react-i18next";
import ClassStudentCardMenu from "./ClassStudentCardMenu";
const ClassStudentCard = ({ student, batchId, onRefetch }) => {
  const { t } = useTranslation();
  const params = useParams();
  const [studentMenu, setStudentMenu] = useState("");

  const onMenu = (e) => {
    e.preventDefault();
    setStudentMenu(student?._id);
  };
  return (
    <>
      <Link
        to={`/q/${params.username}/student/profile`}
        state={{ sid: student?._id, viewAs: "CLASS_CATALOG" }}
      >
        <div
          className={style.item}
          style={{
            position: "relative",
          }}
        >
          <p>{student?.studentROLLNO ?? ""}</p>
          <img
            alt=""
            src={
              student?.studentProfilePhoto
                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
          <div className={style.student_catalog_name}>
            <h5>
              {student?.studentFirstName ?? ""}{" "}
              {student?.studentMiddleName ?? " "}{" "}
              {student?.studentLastName ?? ""}
            </h5>
            <h6>
              {t("gr_number")}{" "}
              <span
                style={{
                  fontWeight: "500",
                }}
              >
                {student?.studentGRNO ?? ""}
              </span>
              {student?.class_selected_batch?.map((ba) =>
                ba?._id === batchId ? (
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {`, ${t("batch")}: ${ba?.batchName}`}
                  </span>
                ) : null
              )}
            </h6>
          </div>
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={onMenu}
            className={style.batch_container_menu}
            title="Menu"
          />
        </div>
      </Link>
      {studentMenu && (
        <ClassStudentCardMenu
          onClose={() => setStudentMenu("")}
          bid={batchId}
          onRefetch={onRefetch}
          studentMenu={studentMenu}
        />
      )}
    </>
  );
};

export default ClassStudentCard;
