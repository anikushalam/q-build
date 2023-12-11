import React, { Suspense, useEffect, useState } from "react";
import style from "./Mainbody.module.css";
import "./Mainbody.css";
import CommonStaffMember from "../CommonStaffMember";
import CommonStudentMemberSidebar from "../../student/Mainbody/Sidebar/CommonStudentMemberSidebar";
import { useTranslation } from "react-i18next";
import { useStudentDesignationDataQuery } from "../../../services/joining/joinApi";
import StudentDesignationMenu from "../../student/Mainbody/Menu/StudentDesignationMenu";
import QLoader from "../../../Loader/QLoader";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const StudentMemberConfig = ({
  sid,
  index,
  onClickValue,
  carryParentState,
  children,
}) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const {
    data: studentDesignationData,
    refetch: studentDesignationDataRefetch,
  } = useStudentDesignationDataQuery(sid, { skip: !sid });

  useEffect(() => {
    if (sid) studentDesignationDataRefetch();
  }, [sid, studentDesignationDataRefetch]);
  return (
    <CommonStaffMember>
      <div className={style.mainbody}>
        <div className={style.sidebar}>
          <CommonStudentMemberSidebar
            student={studentDesignationData?.student}
            index={index}
            carryParentState={carryParentState}
          />
        </div>

        <div className={style.rightbody}>
          <>
            {index === "0" && (
              <div
                className={`${style.formSelect} ${style.bottomborder}`}
                onClick={() => setMenu(!menu)}
              >
                <h6>Application Status</h6>
                <img alt="" src="/images/members/downTriangle.svg" />
              </div>
            )}

            {index === "1" && (
              <div className={style.formSelect} onClick={() => setMenu(!menu)}>
                <h6>{onClickValue?.studentClass?.classTitle ?? ""}</h6>
                <img alt="" src="/images/members/downTriangle.svg" />
              </div>
            )}

            {index === "2" && (
              <div className={style.formSelect} onClick={() => setMenu(!menu)}>
                <h6>{onClickValue?.student_unit?.hostel_unit_name ?? ""}</h6>
                <img alt="" src="/images/members/downTriangle.svg" />
              </div>
            )}
            {(index === "20" ||
              index === "21" ||
              index === "22" ||
              index === "23" ||
              index === "24" ||
              index === "25" ||
              index === "26") && (
              <div
                className={`${style.formSelect} ${style.disabled}`}
                style={{ ...BUTTON_WRAPPER_STYLES, top: "3px" }}
                onClick={() => setMenu(!menu)}
              >
                <h6>{t("application_status")}</h6>
                <img alt="" src="/images/members/downTriangle_disabled.svg" />
              </div>
            )}
          </>

          {menu && (
            <StudentDesignationMenu
              onClose={() => setMenu(false)}
              studentDesignationData={studentDesignationData}
            />
          )}
          <Suspense fallback={<QLoader />}>{children}</Suspense>
        </div>
      </div>
    </CommonStaffMember>
  );
};

export default StudentMemberConfig;
