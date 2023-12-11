import React from "react";
import style from "../Mainbody.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const MODAL_STYLES = {
  position: "absolute",
  left: "10.5vw",
  top: "3vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};
function StudentDesignationMenu({ onClose, studentDesignationData }) {
  const params = useParams();
  const { t } = useTranslation();

  return (
    <div>
      <div onClick={onClose} style={OVERLAY_STYLES} />

      <div className={style.menu} style={MODAL_STYLES}>
        {studentDesignationData?.student?.studentClass && (
          <Link
            to={`/q/${params.username}/member/student/class`}
            state={{
              sid: studentDesignationData?.student?._id,
              onClickValue: studentDesignationData?.student,
            }}
          >
            <div className={style.menuItem}>
              <img alt="" src="/images/members/dHead-icon.svg" />
              <h6>
                {studentDesignationData?.student?.studentClass?.classTitle}
              </h6>
            </div>
          </Link>
        )}
        {studentDesignationData?.student?.student_unit && (
          <Link
            to={`/q/${params.username}/member/student/hostel`}
            state={{
              sid: studentDesignationData?.student?._id,
              onClickValue: studentDesignationData?.student,
              is_profile: "HOSTEL",
            }}
          >
            <div className={style.menuItem}>
              <img alt="" src="/images/members/dHead-icon.svg" />
              <h6>
                {
                  studentDesignationData?.student?.student_unit
                    ?.hostel_unit_name
                }
              </h6>
            </div>
          </Link>
        )}

        <Link
          to={`/q/${params.username}/member/status`}
          state={{
            sid: studentDesignationData?.student?._id,
            openAs: "STUDENT",
          }}
          onClick={onClose}
        >
          <div className={style.menuItem}>
            <img alt="" src="/images/members/aStatus-icon.svg" />
            <h6>{t("application_status")}</h6>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StudentDesignationMenu;
