import React from "react";
import style from "./StudentClassmates.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../services/BaseUrl";

const StudentClassmatesCard = ({ classmate }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Link
      to={`/q/${classmate?.user?.username}/profile`}
      onClick={() => {
        dispatch(
          idChangeAction.searchId({
            id: classmate?.user?._id,
            type: "ID",
          })
        );
      }}
    >
      <section className={style.classmates_container}>
        <img
          alt="Student Request Avatar"
          src={
            classmate?.studentProfilePhoto
              ? `${imageShowUrl}/${classmate?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
        <div className={style.classmates_container_inner}>
          <div className={style.classmates_container_inner_text}>
            <h6>
              {`${classmate?.studentFirstName ?? ""} ${
                classmate?.studentMiddleName ?? ""
              } ${classmate?.studentLastName ?? ""}`}
              {classmate?.you_default && (
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "rgba(18, 18, 18, 0.5)",
                  }}
                >
                  {" "}
                  (you)
                </span>
              )}
            </h6>
            <p>
              {t("roll_number")} {classmate?.studentROLLNO ?? ""}
            </p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default StudentClassmatesCard;
