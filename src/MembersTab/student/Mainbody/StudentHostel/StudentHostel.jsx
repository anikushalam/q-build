import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetRoomDetailHostel } from "../../../../hooks/member_tab/hostel-api";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import MiddleContent from "./MiddleContent/MiddleContent";
import style from "../StudentClass/StudentClass.module.css";
import { useLocation } from "react-router-dom";
import HostelRules from "../../../staff/Mainbody/Hostel/HostelRules/HostelRules";
import HostelUnit from "../../../staff/Mainbody/Hostel/HostelUnit/HostelUnit";
import HostelUnitInfo from "../../../staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/HostelUnitInfo";
import UnitRoomInfo from "../../../staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/UnitRoomInfo/UnitRoomInfo";
import StudentHostelRenewal from "./StudentHostelRenewal";
import StudentAllFeesData from "../StudentClass/StudentAllFeesData/StudentAllFeesData";

const StudentHostel = ({ onClickValue, carryParentState, studentId }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();

  const { getRoomDetailHostel, getRoomDetailHostelRefetch } =
    useGetRoomDetailHostel({
      hrid: onClickValue?.student_bed_number?.hostelRoom?._id,
      skip: !onClickValue?.student_bed_number?.hostelRoom?._id,
    });
  useEffect(() => {
    if (onClickValue?.student_bed_number?.hostelRoom?._id)
      getRoomDetailHostelRefetch();
  }, [
    onClickValue?.student_bed_number?.hostelRoom?._id,
    getRoomDetailHostelRefetch,
  ]);

  return (
    <>
      {(!getQuery?.search ||
        getQuery?.search?.substring(3) === "notice" ||
        getQuery?.search?.substring(3) === "roommate") && (
        <>
          <div className={style.middleHeadContainer}>
            <UniversalDepartmentMiddleHead
              coverKey={getRoomDetailHostel?.one_room?.room_photo}
              coverId={getRoomDetailHostel?.one_room?.room_photo}
              defaultCover="/images/profileAndCover/department-cover.png"
              textLarge={onClickValue?.student_unit?.hostel_unit_name}
              batchStatus="false"
              //   textSmall={`${oneClassProfile?.classes?.batch?.batchName}`}
              rollNoStatus={false}
              count1={
                onClickValue?.student_bed_number?.hostelRoom?.room_name ?? ""
              }
              count1label={t("room_name")}
              count2label={t("bed_number")}
              count2={onClickValue?.student_bed_number?.bed_number ?? ""}
              coverUpdate={false}
              openAs={"STUDENT_HOSTEL"}
            />
          </div>

          <MiddleContent
            carryParentState={carryParentState}
            studentId={studentId}
            hid={onClickValue?.student_unit?.hostel?._id}
          />
        </>
      )}

      {getQuery?.search?.substring(3) === "rule" && (
        <div className={style.middleHeadContainer}>
          <HostelRules
            hid={onClickValue?.student_unit?.hostel?._id}
            viewAs="HOSTEL_SEARCH"
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "fees" && (
        <div className={style.middleHeadContainer}>
          <StudentAllFeesData sid={studentId} viewAs={"STUDENT"} />
        </div>
      )}

      {getQuery?.search?.substring(3) === "knows" && (
        <div className={style.middleHeadContainer}>
          <HostelUnit
            hid={onClickValue?.student_unit?.hostel?._id}
            carryParentState={carryParentState}
            viewAs="STUDENT"
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "unit&n=menu&n=room" && (
        <div className={style.middleHeadContainer}>
          <HostelUnitInfo
            carryParentState={carryParentState}
            viewAs="STUDENT"
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "unit&n=room" && (
        <div className={style.middleHeadContainer}>
          <UnitRoomInfo carryParentState={carryParentState} viewAs="STUDENT" />
        </div>
      )}

      {getQuery?.search?.substring(3) === "renewal" && (
        <div className={style.middleHeadContainer}>
          <StudentHostelRenewal
            sid={onClickValue?._id}
            viewAs="HOSTEL_SEARCH"
          />
        </div>
      )}
    </>
  );
};

export default StudentHostel;
